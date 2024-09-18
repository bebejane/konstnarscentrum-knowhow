import { useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import s from './MemberForm.module.scss';
import cn from 'classnames';

type FormInputs = {
  id: string
  mode: 'login' | 'register'
  firstName: string;
  lastName: string;
  email: string;

};

type Props = {
  activity: ActivityRecord
  show: boolean
};

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

      if (res.status === 404) {
        throw new Error('Du måste registrera dig först');
      }

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

  return (
    <form className={cn(s.form, show && s.show)} onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="id" value={activity.id} {...register("id")} />
      <input type="hidden" name="mode" value={mode} {...register("mode")} />
      <label htmlFor="email">E-post</label>
      <input
        id="email"
        type="email"
        {...register("email", {
          required: "E-post är obligatoriskt",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Ogiltig e-postadress",
          },
        })}
      />
      {errors.email && <span className={s.error}>{errors.email.message}</span>}

      {mode === 'register' &&
        <>
          <label htmlFor="firstName">Namn</label>
          <input
            id="firstName"
            {...register("firstName", { required: "Namn är obligatoriskt" })}
          />
          {errors.firstName && <span className={s.error}>{errors.firstName.message}</span>}

          <label htmlFor="lastName">Efternamn</label>
          <input
            id="lastName"
            {...register("lastName", { required: "Efternamn är obligatoriskt" })}
          />
          {errors.lastName && <span className={s.error}>{errors.lastName.message}</span>}
        </>
      }

      {success &&
        <div className={s.success}>
          Tack för din anmälan!
          <button className={s.close} onClick={() => setSuccess(false)}>X</button>
        </div>
      }
      {error && <span className={s.error}>{error}</span>}

      <button type="button" onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>
        {mode === 'login' ? 'Registrera dig' : 'Logga in'}
      </button>

      <button type="submit" disabled={loading}>Skicka</button>
    </form>
  );
}
