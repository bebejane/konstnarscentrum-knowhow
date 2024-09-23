import { useRef, useState } from 'react';
import Modal from '/components/layout/Modal';
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
  const [application, setApplication] = useState<ApplicationRecord | null>(null);
  const [open, setOpen] = useState({});
  const [showModal, setShowModal] = useState(false);
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

  const Application = ({ application: { id, approvalStatus, member }, application, decline = 'Bortvald', approve = 'Utvald' }) => (
    <>
      <tr
        key={id}
        className={open[id] ? s.open : undefined}
        onClick={() => setApplication(application)}
      >
        <td>{member.email}</td>
        <td>{member.firstName} {member.lastName}</td>
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
          >{decline}</button>
          <button
            type="button"
            data-application-id={id}
            data-approval={'APPROVED'}
            disabled={approvalStatus === 'APPROVED'}
            onClick={handleApprove}
          >{approve}</button>
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
    <>
      <table className={s.container}>
        <tbody>
          <tr><th colSpan={colSpanMax}>Ohanterade anmälningar ({pending.length})</th></tr>
          <tr><td colSpan={colSpanMax}><hr /></td></tr>
          {pending.map((application, i) => <Application key={i} application={application} />)}
          {!pending.length && <tr><td>Alla anmälningar hanterade</td></tr>}

          <tr><th colSpan={colSpanMax}>Utvalda ({approved.length})</th></tr>
          <tr><td colSpan={colSpanMax}><hr /></td></tr>
          {approved.map((application, i) => <Application key={i} application={application} />)}
          {!approved.length && <tr><td>Inga anmälningar är utvalda</td></tr>}

          <tr><th colSpan={colSpanMax}>Bortvalda ({declined.length})</th></tr>
          <tr><td colSpan={colSpanMax}><hr /></td></tr>
          {declined.map((application, i) => <Application key={i} application={application} approve="Ångra" />)}
          {!declined.length && <tr><td>Inga anmälningar är bortvalda</td></tr>}

          <tr><td colSpan={colSpanMax}>{error && <p className={s.error}>{error}</p>}</td></tr>

          <tr>
            <td colSpan={colSpanMax}>
              <button className={cn("wide", s.export)} onClick={handleExport} disabled={approved.length === 0}>Exportera lista</button>
            </td>
          </tr>
        </tbody >
      </table >
      {application &&
        <Modal>
          <div className={cn(s.modal, application && s.show)}>
            <div className={s.wrap}>
              <div className={s.content}>
                <h4>{application?.member?.firstName} {application?.member?.lastName}</h4>
                <h5>Kontakt:</h5>
                <p>{application.member?.email}, {application.member?.phone}
                </p>
                <h5>Adress:</h5>
                <p>{application.member?.address}, {application.member?.postalCode} {application.member?.city}</p>
                <h5>Info:</h5>
                <p>{application.member?.country}, {application.member?.language}, {application.member?.age}, {application.member?.sex}</p>
                <h5>Portfolio:</h5>
                <p><a href={application.member?.url} rel="noreferrer" target="_new">{application.member?.url}</a> {application.member?.pdf && <p>{application.member?.pdf.url}</p>}</p>
                <h5>Uppdrag:</h5>
                <p>{application.member?.mission}</p>
                <h5>Utbildning:</h5>
                <p>{application.member?.education}</p>

              </div>
              <button className={s.close} onClick={() => setApplication(null)}>Stäng</button>
            </div>
          </div>
        </Modal>
      }
    </>
  );
}
