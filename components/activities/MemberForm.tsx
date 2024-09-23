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

type ActivityRecord = {
  id: string;
  // Add other properties of ActivityRecord as needed
};

type Props = {
  activity: ActivityRecord
  show: boolean
  setShow: (show: boolean) => void
};

export type Upload = SimpleSchemaTypes.Upload;

type FormInputs = {
  email: string;
  kc_member: string
  first_name: string;
  last_name: string;
  address: string;
  postal_code: string;
  city?: string;
  pdf?: File | { upload_id: string, default_field_metadata: any }
  id: string
  phone?: string;
  age?: string;
  sex?: string;
  country?: string;
  language?: string;
  education?: string;
  mission?: string;
  work_category?: string;
};

type FormField = {
  id: keyof FormInputs
  type: 'email' | 'hidden' | 'text' | 'textarea' | 'file' | 'checkbox' | 'select'
  label?: string
  required?: string
  pattern?: { value: RegExp, message: string }
  value?: string
  options?: { id: string, value: string }[]
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
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
  const [member, setMember] = useState<any | null>(null);
  const [isAlreadyMember, setIsAlreadyMember] = useState(false);
  const [loadingMember, setLoadingMember] = useState(false);
  const abortController = useRef(new AbortController());
  const { data: session, status } = useSession();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {

    setError(null);
    setSuccess(false);
    setLoading(true);

    abortController.current?.abort();
    abortController.current = new AbortController();

    try {
      console.log(data)

      const body = { member: data, id: activity.id }
      const upload = data.pdf[0] instanceof File ? await createUpload(data.pdf[0], []) : null;

      if (upload)
        body.member.pdf = { upload_id: upload.id, default_field_metadata: upload.default_field_metadata }

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
        throw new Error('Något gick fel, försök igen senare.');

      const result = await res.json(); console.log(result);
      reset()
      setSuccess(true)
    } catch (e: any) {
      if (e.name === 'AbortError') return;
      setError(e.message);
    }
    setLoading(false);

  };

  const fetchMember = async () => {
    setLoadingMember(true);

    try {
      const res = await fetch(`/api/activity/member`, { cache: 'no-store' });
      if (res.status === 200) {
        const member = await res.json();
        setMember(member);
      }

    } catch (e: any) {
      console.log(e)
      setError(e.message)
    }
    setLoadingMember(false);
  }

  useEffect(() => {
    if (status === 'authenticated')
      fetchMember();
  }, [reset, status, show])

  useEffect(() => {

    if (!member) return
    reset(member)
    setSuccess(false)
    setError(null)

  }, [member, reset])

  useEffect(() => {
    if (window.location.hash !== '#apply?login=1') return

    setShow(true)
    setTimeout(() => document.getElementById('apply')?.scrollIntoView({ behavior: 'auto', block: 'start' }), 200);

  }, [setShow])

  const createUpload = useCallback(async (file: File, allTags: string[]): Promise<Upload> => {

    if (!file)
      return Promise.reject(new Error('Ingen fil vald'))

    return new Promise((resolve, reject) => {
      uploadClient.uploads.createFromFileOrBlob({
        fileOrBlob: file,
        filename: file.name,
        tags: allTags.concat(['upload']),
        default_field_metadata: {
          en: {
            alt: file.name,
            title: file.name,
            custom_data: {}
          }
        },
        onProgress: (info: OnProgressInfo) => {
          console.log(info)
        }
      }).then((u) => resolve(u)).catch(reject)
    })

  }, [])

  const handleValueChange = (e: React.ChangeEvent<HTMLElement>) => {
    const target = e.target as HTMLInputElement
    const { id } = target

    switch (id) {
      case 'kc_member':
        setIsAlreadyMember(target.checked)
        break;
      default:
        break;
    }
  }

  let fields: FormField[] = [
    { id: 'id', type: 'hidden', value: activity.id },
    { id: 'email', type: 'email', label: 'E-post', required: 'E-post är obligatoriskt', pattern: { value: /\S+@\S+\.\S+/, message: 'Ogiltig e-postadress' } },
    { id: 'kc_member', type: 'checkbox', label: 'Jag är medlem i Konstnärscentrum' },
    { id: 'first_name', type: 'text', label: 'Namn', required: 'Namn är obligatoriskt' },
    { id: 'last_name', type: 'text', label: 'Efternamn', required: 'Efternamn är obligatoriskt' },
    { id: 'address', type: 'text', label: 'Adress', required: 'Adress är obligatoriskt' },
    { id: 'city', type: 'text', label: 'Stad', required: 'Stad är obligatoriskt' },
    { id: 'postal_code', type: 'text', label: 'Postnummer', required: 'Postnummer är obligatoriskt' },
    { id: 'phone', type: 'text', label: 'Telefon' },
    { id: 'age', type: 'text', label: 'Ålder', required: 'Ålder är obligatoriskt' },
    { id: 'sex', type: 'select', label: 'Kön', required: 'Kön är obligatoriskt', options: [{ id: 'Kvinna', value: 'Kvinna' }, { id: 'Man', value: 'Man' }, { id: 'Annat', value: 'Annat' }] },
    { id: 'country', type: 'text', label: 'Födelseland', required: 'Födelseland är obligatoriskt' },
    { id: 'language', type: 'text', label: 'Språk', required: 'Språk är obligatoriskt' },
    { id: 'education', type: 'textarea', label: 'Utbildning' },
    { id: 'mission', type: 'textarea', label: 'Uppdrag' },
    { id: 'work_category', type: 'textarea', label: 'Arbetskategori' },
    { id: 'pdf', type: 'file', label: 'Pdf', value: '' },
  ]
  fields = fields.filter(({ id }) => isAlreadyMember && !['email', 'kc_member', 'id'].includes(id) ? false : true)

  return (
    <div id="apply" className={cn(s.container, show && s.show)}>
      <MemberLogin />
      {!success ?
        <form className={s.form} onSubmit={handleSubmit(onSubmit)} >
          {fields.map(({ id, type, label, value, options, required, pattern }, idx) => (
            <React.Fragment key={idx}>
              {label &&
                <label htmlFor={id}>
                  {label}
                  {required && <span className={s.required}>*</span>}
                </label>
              }
              {type === 'textarea' ?
                <textarea
                  id={id}
                  {...register(id, { required, pattern })}
                  className={cn(errors[id] && s.error)}
                  onChange={handleValueChange}
                />
                :
                type === 'file' ?
                  <FileField
                    id={id}
                    register={register}
                    member={member}
                    className={cn(errors[id] && s.error)}
                  />
                  :
                  type === 'select' ?
                    <select
                      id={id}
                      {...register(id, { required, pattern })}
                      className={cn(errors[id] && s.error)}
                      onChange={handleValueChange}
                    >
                      <option value="">Välj...</option>
                      {options.map(({ id, value }) => <option key={id} value={id}>{value}</option>)}
                    </select>

                    : <input
                      id={id}
                      type={type}
                      value={value}
                      {...register(id, { required, pattern })}
                      className={cn(errors[id] && s.error)}
                      onChange={handleValueChange}
                    />
              }
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

type MemberLoginProps = {}

function MemberLogin({ }: MemberLoginProps) {

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const { data: session, status } = useSession();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true);
    setDone(false);

    const emailInput = e.currentTarget.elements.namedItem('email') as HTMLInputElement;
    const email = emailInput.value;
    const callbackUrl = `${window.location.href.replace('#apply?login=1', '')}#apply?login=1`;

    try {
      const res = await signIn('email', {
        email,
        callbackUrl,
        redirect: false,
      });

      if (res?.error === 'EmailSignin')
        setError('Något gick fel, försök igen senare');
      else
        setSuccess(true);

    } catch (e: any) {
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

type FileFieldProps = {
  member: any
  id: string
  register: any
  className: string
}

function FileField({ member, id, register, className }: FileFieldProps) {

  const [newUpload, setNewUpload] = useState(false)
  const ref = useRef<HTMLInputElement | null>(null)
  const upload = member?.[id]

  if (upload && !newUpload) {

    const title = upload.default_field_metadata?.en?.title ?? upload.title ?? 'Unknow.pdf'

    return (
      <div className={cn(s.upload, className)}>
        <div className={s.title}>{title}</div>
        <button onClick={() => setNewUpload(true)}>&times;</button>
      </div>
    )
  }

  const handleClick = () => {
    const input = document.getElementById(id) as HTMLInputElement
    input?.click()
  }

  return (
    <div className={cn(s.file, className)}>
      <button type="button" onClick={handleClick}>Välj fil</button>
      <input ref={ref} id={id} {...register(id)} type="file" accept=".pdf" className={className} />
    </div>
  )
}
