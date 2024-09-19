import { useRef, useState } from 'react';
import cn from 'classnames';
import s from './ActivityAdmin.module.scss';
import { sleep } from '../../lib/utils';

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
  const colSpanMax = 20;

  const updateStatus = async (id: string, approvalStatus: ApprovalStatus) => {

    setLoading(true);
    abortController.current?.abort();
    abortController.current = new AbortController();

    const data = { id, approvalStatus }

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
      setLoading(false);
      throw e
    }

    setLoading(false);

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
      //console.log('success')
    }).catch((e) => {
      console.log('error', e)
      setApplications(currentApplications)
      setError(e.message)
    })
  }

  const handleExport = async () => {
    const columns = ['firstName', 'lastName', 'email'];

    const t = applications
      .filter((application) => application.approvalStatus === 'APPROVED')
      .map(({ member }) => columns.map(c => member[c]).join('\t')).join('\n');

    if (!t) return
    navigator.clipboard.writeText(t);
    alert('Kopierat till urklipp');
  }

  const approved = applications.filter((application) => application.approvalStatus === 'APPROVED');
  const declined = applications.filter((application) => application.approvalStatus === 'DECLINED');
  const pending = applications.filter((application) => application.approvalStatus === 'PENDING');

  const Application = ({ application: { id, approvalStatus, member } }) => (
    <>
      <tr
        key={id}
        className={open[id] ? s.open : undefined}
        onClick={() => setOpen((o) => ({ ...o, [id]: open[id] ? false : true }))}
      >
        <td>{member.firstName} {member.lastName}</td>
        <td>{member.email}</td>
        <td>{member.sex}</td>
        <td>{member.age}</td>
        <td>{member.country}</td>
        <td>{member.language}</td>

        <td className={s.buttons}>
          <button
            type="button"
            data-application-id={id}
            data-approval={'DECLINED'}
            disabled={approvalStatus === 'DECLINED'}
            onClick={handleApprove}
          >Nej</button>
          <button
            type="button"
            data-application-id={id}
            data-approval={'APPROVED'}
            disabled={approvalStatus === 'APPROVED'}
            onClick={handleApprove}
          >Ja</button>
        </td>
      </tr>
      {open[id] &&
        <tr>
          <td colSpan={colSpanMax} className={s.extended}>
            Extended content...
          </td>
        </tr>
      }
    </>
  )


  return (
    <table className={s.container}>
      <tbody>
        <tr><th colSpan={colSpanMax}>Nya ansökningar ({pending.length})</th></tr>
        <tr><td colSpan={colSpanMax}><hr /></td></tr>
        {pending.map((application, i) => <Application key={i} application={application} />)}
        {!pending.length && <tr><td>Inga nya ansökningar</td></tr>}

        <tr><th colSpan={colSpanMax}>Utvalda ({approved.length})</th></tr>
        <tr><td colSpan={colSpanMax}><hr /></td></tr>
        {approved.map((application, i) => <Application key={i} application={application} />)}
        {!approved.length && <tr><td>Inga ansökningar är godkänd</td></tr>}

        <tr><th colSpan={colSpanMax}>Bortvalda ({declined.length})</th></tr>
        <tr><td colSpan={colSpanMax}><hr /></td></tr>
        {declined.map((application, i) => <Application key={i} application={application} />)}
        {!declined.length && <tr><td>Inga ansökningar är nekade</td></tr>}

        <tr><td colSpan={colSpanMax}>{error && <p className={s.error}>{error}</p>}</td></tr>

        <tr>
          <td colSpan={colSpanMax}>
            <button className="wide" onClick={handleExport} disabled={approved.length === 0}>Exportera lista</button>
          </td>
        </tr>
      </tbody >
    </table >
  );
}
