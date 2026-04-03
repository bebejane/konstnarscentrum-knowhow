import { getSession } from '@/lib/auth';
import SessionProvider from '@/lib/auth/SessionProvider';

export const dynamic = 'force-dynamic';

export default async function ActivityLayout({ children, params }: LayoutProps<'/'>) {
	const session = await getSession();
	return <SessionProvider session={session}>{children}</SessionProvider>;
}
