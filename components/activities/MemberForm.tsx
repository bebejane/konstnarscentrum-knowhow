import { useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import s from './MemberForm.module.scss';
import cn from 'classnames';
import React from 'react';

type Props = {
  activity: ActivityRecord
  show: boolean
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

export default function MemberForm({ activity, show }: Props) {

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

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {

    setError(null);
    setSuccess(false);
    setLoading(true);

    abortController.current?.abort();
    abortController.current = new AbortController();

    try {

      const res = await fetch('/api/activity/register', {
        method: 'POST',
        body: JSON.stringify(data),
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
    { id: 'mode', type: 'hidden', value: mode },
    { id: 'id', type: 'hidden', value: activity.id },
  ]

  return (
    <form
      className={cn(s.form, show && s.show)}
      onSubmit={handleSubmit(onSubmit)}
    >
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
            <input id={id} type={type} value={value} {...register(id, { required, pattern })} />
          }

          {errors[id] && <span className={s.error}>{errors[id].message}</span>}
        </React.Fragment>
      ))}
      {success &&
        <div className={s.success}>
          Tack för din anmälan!
          <button className={s.close} onClick={() => setSuccess(false)}>X</button>
        </div>
      }
      {error && <span className={s.error}>{error}</span>}

      <button className={s.register} type="button" onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>
        {mode === 'login' ? 'Registrera dig' : 'Stäng'}
      </button>

      <button type="submit" disabled={loading}>Skicka</button>
    </form>
  );
}
