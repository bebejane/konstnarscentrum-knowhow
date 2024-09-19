import { useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import s from './MemberForm.module.scss';
import cn from 'classnames';
import React from 'react';
import { signIn, useSession } from 'next-auth/react';

type Props = {
  activity: ActivityRecord
  show: boolean
  setShow: (show: boolean) => void
};

type FormInputs = {
  first_name: string;
  last_name: string;
  address: string;
  postal_code: string;
  email: string;
  id: string
  mode: 'login' | 'register'
};

type FormField = {
  id: string
  type: 'email' | 'hidden' | 'text' | 'textarea'
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

  const [mode, setMode] = useState<'login' | 'register'>('login');
  const abortController = useRef(new AbortController());
  const { data, status } = useSession();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {

    setError(null);
    setSuccess(false);
    setLoading(true);

    abortController.current?.abort();
    abortController.current = new AbortController();

    try {
      console.log(data)
      const res = await fetch('/api/activity/register', {
        method: 'POST',
        body: JSON.stringify({ member: data, id: activity.id }),
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
      reset()
      setSuccess(true)
    } catch (e) {
      if (e.name === 'AbortError') return;
      setError(e.message);
    }
    setLoading(false);

  };

  useEffect(() => {
    setError(null);
  }, [mode])

  useEffect(() => {
    console.log('fetch member...')
    const fetchMember = async () => {
      const res = await fetch(`/api/auth/member`);

      if (res.status === 200) {
        const member = await res.json();
        reset(member);
      }
    }

    if (status === 'authenticated') fetchMember();

  }, [reset, status, show])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = e.target['email'].value;
    const res = await signIn('email', { email, redirect: false, callbackUrl: window.location.href });
    if (res.error) setError(res.error);
  }

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
    { id: 'id', type: 'hidden', value: activity.id },
  ]

  return (
    <div className={cn(s.container, show && s.show)}>
      {status !== 'authenticated' &&
        <form onSubmit={handleLogin} className={cn(s.form, show && s.show)}>
          <input type="email" name="email" />
          <button className={s.register} type="submit" >
            Skicka
          </button>
        </form>
      }
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
                <textarea id={id} {
                  //@ts-ignore
                  ...register(id, { required, pattern })} />
                :
                <input id={id} type={type} value={value} {
                  //@ts-ignore
                  ...register(id, { required, pattern })} />
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
