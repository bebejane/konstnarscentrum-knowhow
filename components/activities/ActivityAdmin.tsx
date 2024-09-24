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
    console.log(approval, applicationId)

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

  const Application = ({ application: { id, approvalStatus, member }, application: _application, decline = 'Bortvald', approve = 'Utvald' }) => (
    <>
      <tr
        key={id}
        className={cn(s.member, application?.id === id && s.open)}
        onClick={() => setApplication(_application)}
      >
        <td>{member.email}</td>
        <td>{member.firstName} {member.lastName}</td>
        <td>{member.sex}</td>
        <td>{member.age}</td>
        <td>{member.country}</td>
        <td>{member.language}</td>

        <td className={s.buttons}>
          {approvalStatus !== 'DECLINED' &&
            <button
              type="button"
              data-application-id={id}
              data-approval={'DECLINED'}
              disabled={approvalStatus === 'DECLINED'}
              onClick={handleApprove}
            >{decline}</button>
          }
          <button
            type="button"
            data-application-id={id}
            data-approval={approvalStatus === 'PENDING' ? 'APPROVED' : 'PENDING'}
            onClick={handleApprove}
          >{approvalStatus !== 'PENDING' ? 'Ångra' : 'Utvald'}</button>
        </td>
      </tr>
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
          {declined.map((application, i) => <Application key={i} application={application} />)}
          {!declined.length && <tr><td>Inga anmälningar är bortvalda</td></tr>}

          <tr><td colSpan={colSpanMax}>{error && <p className={s.error}>{error}</p>}</td></tr>

          <tr>
            <td colSpan={colSpanMax}>
              <button className={cn("wide", s.export)} onClick={handleExport} disabled={approved.length === 0}>Exportera lista</button>
            </td>
          </tr>
        </tbody>
      </table>
      {application &&
        <Modal>
          <div className={cn(s.modal, application && s.show)}>
            <div className={s.wrap}>
              <div className={s.content}>
                <h4>{application?.member?.firstName} {application?.member?.lastName}</h4>
                <div className={s.cols}>
                  <span>
                    <h5>Kontakt:</h5>
                    <p>{application.member?.email}, {application.member?.phone}</p>
                  </span>
                  <span>
                    <h5>Adress:</h5>
                    <p>{[
                      application.member?.address,
                      application.member?.postalCode,
                      application.member?.city,
                    ].filter(el => el).join(', ')}</p>
                  </span>
                  <span>
                    <h5>Info:</h5>
                    <p>{[
                      application.member?.country,
                      application.member?.language,
                      application.member?.age,
                      application.member?.sex
                    ].filter(el => el).join(', ')}
                    </p>
                  </span>
                  <span>
                    <h5>Hemsida:</h5>
                    <p><a href={application.member?.url} rel="noreferrer" target="_new">Besök</a></p>
                  </span>
                  <span>
                    <h5>Social</h5>
                    <p>{application.member?.social}</p>
                  </span>
                  <span>

                    <h5>Uppdrag:</h5>
                    <p>{application.member?.mission}</p>
                  </span>
                  <span>
                    <h5>Utbildning:</h5>
                    <p>{application.member?.education}</p>
                  </span>
                  <span>
                    <h5>CV:</h5>
                    <p>
                      {application.member?.pdf ?
                        <a href={application.member?.pdf.url} target="_new" rel="noreferrer">Visa Pdf</a>
                        :
                        'Ingen pdf uppladdad...'
                      }
                    </p>
                  </span>
                  <span>
                    <h5>Medlem i Konstnärscentrum:</h5>
                    <p>{application.member?.kcMember ? 'Ja' : 'Nej'}</p>
                  </span>
                  <span>
                    <h5>Skyddad identitet:</h5>
                    <p>{application.member?.protectedIdentity ? 'Ja' : 'Nej'}</p>
                  </span>
                </div>

                <div className={s.buttons}>
                  <button
                    data-application-id={application.id}
                    data-approval={application.approvalStatus === 'PENDING' ? 'APPROVED' : 'PENDING'}
                    data-toggled={application.approvalStatus === 'APPROVED'}
                    onClick={handleApprove}
                  >Utvald</button>
                  <button
                    data-application-id={application.id}
                    data-approval={application.approvalStatus !== 'DECLINED' ? 'DECLINED' : 'PENDING'}
                    data-toggled={application?.approvalStatus === 'DECLINED'}
                    onClick={handleApprove}
                  >Bortvald</button>
                </div>
              </div>
              <button className={s.close} onClick={() => setApplication(null)}>Stäng</button>
            </div>
          </div>
        </Modal>
      }
    </>
  );
}
