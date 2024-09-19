import s from "./index.module.scss";
import cn from 'classnames'
import withGlobalProps from "/lib/withGlobalProps";
import { ClientSafeProvider, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export type Props = {
	csrfToken: string,
	providers: ClientSafeProvider[]
}

export default function Logout({ }: Props) {

	const router = useRouter()

	useEffect(() => {
		signOut({ callbackUrl: `${window.location.origin}/` })
	}, [])

	return <div className={s.logout}>Loggar ut...</div>
}

Logout.page = { title: 'Logga ut', regional: false, crumbs: [{ title: 'Logga ut' }] } as PageProps