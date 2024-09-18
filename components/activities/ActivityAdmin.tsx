import { useRef, useState } from 'react';
import cn from 'classnames';
import s from './ActivityAdmin.module.scss';

type Props = {
  activity: ActivityRecord,
  applications: ApplicationRecord[],
};

type ApprovalStatus = 'APPROVED' | 'DENIED' | 'PENDING'

export default function ActivityAdmin({ activity, applications: _applications }: Props) {

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [applications, setApplications] = useState(_applications);
  const [open, setOpen] = useState({});
  const abortController = useRef(new AbortController());

  const updateStatus = async (id: string, status: ApprovalStatus) => {

    abortController.current?.abort();
    abortController.current = new AbortController();

    const data = {
      id,
      approvalStatus: status
    }

    try {
      const res = await fetch('/api/activity/status', {
        method: 'POST',
        body: JSON.stringify(data),
        signal: abortController.current.signal,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.status !== 200)
        return setError('Något gick fel, försök igen senare');

      await res.json();

    } catch (e) {
      if (e.name === 'AbortError') return;
      throw e
    }
  };

  const handleApprove = (e: React.MouseEvent) => {
    e.stopPropagation();

    const target = e.target as HTMLButtonElement;
    const approval = target.getAttribute('data-approval') as ApprovalStatus;
    const applicationId = target.getAttribute('data-application-id');
    const currentApplications = [...applications]


    setApplications((applications) => applications.map((a) => {
      if (a.id === applicationId)
        a.approvalStatus = approval;
      return a;
    }));


    setError(null)
    updateStatus(applicationId, approval).then(() => {
      console.log('success')
    }).catch((e) => {
      console.log('error', e)
      setApplications(currentApplications)
      setError(e.message)
    })
  }

  const approved = applications.filter((application) => application.approvalStatus === 'APPROVED');
  const declined = applications.filter((application) => application.approvalStatus === 'DECLINED');
  const pending = applications.filter((application) => application.approvalStatus === 'PENDING');

  const Application = ({ application: { id, approvalStatus, member } }) => (
    <li
      key={id}
      className={open[id] ? s.open : undefined}
      onClick={() => setOpen((o) => ({ ...o, [id]: open[id] ? false : true }))}
    >
      {member.firstName} {member.lastName} ({member.email})
      <p className={s.extended}>
        Extended info...
      </p>
      <div className={s.buttons}>
        <button
          type="button"
          data-application-id={id}
          data-approval={'DECLINED'}
          disabled={approvalStatus === 'DECLINED'}
          onClick={handleApprove}
        >Neka</button>
        <button
          type="button"
          data-application-id={id}
          data-approval={'APPROVED'}
          disabled={approvalStatus === 'APPROVED'}
          onClick={handleApprove}
        >Godkänn</button>
      </div>
    </li>
  )

  return (
    <div className={s.container}>
      <h5>Godkända</h5>
      <ul>
        {approved.map((application, i) => <Application key={i} application={application} />)}
        {!approved.length && <li>Inga ansökningar är godkända</li>}
      </ul>

      <h5>Nya</h5>
      <ul>
        {pending.map((application, i) => <Application key={i} application={application} />)}
        {!pending.length && <li>Inga nya ansökningar</li>}
      </ul>

      <h5>Nekade</h5>
      <ul>
        {declined.map((application, i) => <Application key={i} application={application} />)}
        {!declined.length && <li>Inga ansökningar är nekade</li>}
      </ul>

      {error && <p className={s.error}>{error}</p>}

      <button className="wide">Exportera lista</button>
    </div>
  );
}
