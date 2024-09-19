import s from "./index.module.scss";
import withGlobalProps from "/lib/withGlobalProps";
import { signOut } from "next-auth/react";
import { useEffect } from "react";

export type Props = {
	csrfToken: string,
}

export default function Logout({ }: Props) {

	useEffect(() => {
		signOut({ callbackUrl: `${window.location.origin}/` })
	}, [])

	return <div className={s.logout}>Loggar ut...</div>
}

Logout.page = { title: 'Logga ut', regional: false, crumbs: [{ title: 'Logga ut' }] } as PageProps