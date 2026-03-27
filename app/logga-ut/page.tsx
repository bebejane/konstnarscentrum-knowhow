import { Breadcrumbs } from '@/components';
import { LogoutForm } from './LogoutForm';
import { buildMetadata } from '@/app/layout';
import { Metadata } from 'next';
export default async function Logout() {
	return (
		<>
			<LogoutForm />
			<Breadcrumbs crumbs={[{ title: 'Logga ut' }]} />
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return buildMetadata({
		title: 'Logga ut',
		pathname: '/logga-ut',
	});
}
