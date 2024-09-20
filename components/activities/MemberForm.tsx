import { useCallback, useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import s from './MemberForm.module.scss';
import cn from 'classnames';
import React from 'react';
import { signIn, useSession } from 'next-auth/react';
import { OnProgressInfo, SimpleSchemaTypes } from '@datocms/cma-client-browser';
import { buildClient } from '@datocms/cma-client-browser'

const uploadClient = buildClient({
  apiToken: process.env.NEXT_PUBLIC_UPLOADS_API_TOKEN,
  environment: process.env.NEXT_PUBLIC_DATOCMS_ENVIRONMENT ?? 'main'
})

type Props = {
  activity: ActivityRecord
  show: boolean
  setShow: (show: boolean) => void
};

export type Upload = SimpleSchemaTypes.Upload;

type FormInputs = {
  first_name: string;
  last_name: string;
  address: string;
  postal_code: string;
  email: string;
  pdf?: string | { upload_id: string }
  id: string
  mode: 'login' | 'register'
};

type FormField = {
  id: string
  type: 'email' | 'hidden' | 'text' | 'textarea' | 'file'
  label?: string
  required?: string
  pattern?: { value: RegExp, message: string }
  value?: string
}

export default function MemberForm({ activity, show, setShow }: Props) {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingMember, setLoadingMember] = useState(false);
  const abortController = useRef(new AbortController());
  const { status } = useSession();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {

    setError(null);
    setSuccess(false);
    setLoading(true);

    abortController.current?.abort();
    abortController.current = new AbortController();

    try {

      const body = { member: data, id: activity.id }
      const upload = data.pdf ? await createUpload(data.pdf[0] as File, []) : null;

      if (upload)
        body.member.pdf = { upload_id: upload.id }

      const res = await fetch('/api/activity/register', {
        method: 'POST',
        body: JSON.stringify(body),
        signal: abortController.current.signal,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.status === 404)
        throw new Error('Du måste registrera dig först');

      if (res.status !== 200)
        throw new Error('Något gick fel, försök igen senare');

      const result = await res.json();
      console.log(result)
      reset()
      setSuccess(true)
    } catch (e) {
      if (e.name === 'AbortError') return;
      setError(e.message);
    }
    setLoading(false);

  };

  useEffect(() => {

    const fetchMember = async () => {
      setLoadingMember(true);

      try {
        const res = await fetch(`/api/auth/member`);
        if (res.status === 200) {
          const member = await res.json();
          reset(member);
        }

      } catch (e) {
        console.log(e)
      }
      setLoadingMember(false);
    }

    if (status === 'authenticated') fetchMember();

  }, [reset, status, show])

  useEffect(() => {
    if (window.location.hash !== '#apply?login=1') return

    setShow(true)
    setTimeout(() => document.getElementById('apply')?.scrollIntoView({ behavior: 'auto', block: 'start' }), 200);

  }, [setShow])

  const createUpload = useCallback(async (file: File, allTags): Promise<Upload> => {

    if (!file)
      return Promise.reject(new Error('Ingen fil vald'))
    console.log(process.env.NEXT_PUBLIC_UPLOADS_API_TOKEN)
    return new Promise((resolve, reject) => {
      uploadClient.uploads.createFromFileOrBlob({
        fileOrBlob: file,
        filename: file.name,
        tags: allTags,
        default_field_metadata: {
          en: {
            alt: '',
            title: '',
            custom_data: {}
          }
        },
        onProgress: (info: OnProgressInfo) => {
          //if (info.payload && 'progress' in info.payload)
          //onProgress(info.payload.progress)
          console.log(info)
        }
      }).then((u) => resolve(u)).catch(reject)
    })

  }, [])

  const fields: FormField[] = [
    { id: 'email', type: 'email', label: 'E-post', required: 'E-post är obligatoriskt', pattern: { value: /\S+@\S+\.\S+/, message: 'Ogiltig e-postadress' } },
    { id: 'first_name', type: 'text', label: 'Namn', required: 'Namn är obligatoriskt' },
    { id: 'last_name', type: 'text', label: 'Efternamn', required: 'Efternamn är obligatoriskt' },
    { id: 'address', type: 'text', label: 'Adress', required: 'Adress är obligatoriskt' },
    { id: 'postal_code', type: 'text', label: 'Postnummer', required: 'Postnummer är obligatoriskt' },
    { id: 'phone', type: 'text', label: 'Telefon' },
    { id: 'age', type: 'text', label: 'Ålder', required: 'Ålder är obligatoriskt' },
    { id: 'sex', type: 'text', label: 'Kön' },
    { id: 'country', type: 'text', label: 'Födelseland', required: 'Födelseland är obligatoriskt' },
    { id: 'language', type: 'text', label: 'Språk', required: 'Språk är obligatoriskt' },
    { id: 'education', type: 'textarea', label: 'Utbildning' },
    { id: 'mission', type: 'textarea', label: 'Uppdrag' },
    { id: 'work_category', type: 'textarea', label: 'Arbetskategori' },
    { id: 'pdf', type: 'file', label: 'Pdf' },
    { id: 'id', type: 'hidden', value: activity.id },
  ]

  return (
    <div id="apply" className={cn(s.container, show && s.show)}>
      <MemberLogin />
      {!success ?
        <form className={s.form} onSubmit={handleSubmit(onSubmit)} >
          {fields.map(({ id, type, label, value, required, pattern }, idx) => (
            <React.Fragment key={idx}>
              {label &&
                <label htmlFor={id}>
                  {label}
                  {required && <span className={s.required}>*</span>}
                </label>
              }
              {type === 'textarea' ?
                <textarea id={id} {...register(id, { required, pattern })} />
                :
                type === 'file' ?
                  <input id={id} type={type} {...register(id, { required })} accept=".pdf" />
                  :
                  <input id={id} type={type} value={value} {...register(id, { required, pattern })} />
              }

              {errors[id] && <span className={s.error}>{errors[id].message}</span>}
            </React.Fragment>
          ))}
          {error && <span className={s.error}>{error}</span>}
          <button type="submit" disabled={loading}>Skicka</button>
        </form>
        :
        <div className={s.success}>
          Tack för din anmälan!
          <button onClick={() => {
            setShow(false)
            setSuccess(false)
            setError(null)
          }}>Stäng</button>
        </div>
      }
    </div>
  );
}

type MemberLoginProps = {

}

function MemberLogin({ }: MemberLoginProps) {

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const { data: session, status } = useSession();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true);
    setDone(false);

    const email = e.target['email'].value;
    const callbackUrl = `${window.location.href.replace('#apply?login=1', '')}#apply?login=1`;

    try {
      const res = await signIn('email', {
        email,
        callbackUrl,
        redirect: false,
      });

      if (res.error === 'EmailSignin')
        setError('Något gick fel, försök igen senare');
      else
        setSuccess(true);

    } catch (e) {
      setError(e.message)
      setSuccess(false);
    }
    setLoading(false);
  }

  if (status === 'authenticated' || done) return null;

  return (
    <form onSubmit={handleLogin} className={cn(s.form)}>
      <input
        type="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        name="email"
        placeholder={'E-post...'}
        disabled={loading}
      />
      <button className={s.register} type="submit" disabled={loading}>
        Skicka login länk
      </button>
      {success &&
        <div className={s.success}>
          <span>Ett mail med din login länk har skickats till din e-postadress.</span>
          <button type="reset" onClick={() => setDone(true)}>Stäng</button>
        </div>
      }
      {error && <span className={s.error}>{error}</span>}
    </form>
  )
}
