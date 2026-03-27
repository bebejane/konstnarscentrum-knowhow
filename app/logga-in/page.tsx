import { buildMetadata } from '@/app/layout';
import { LoginForm } from '@/app/logga-in/LoginForm';
import { Breadcrumbs } from '@/components';
import { Metadata } from 'next';

export default async function Login() {
	return (
		<>
			<LoginForm />
			<Breadcrumbs crumbs={[{ title: 'Logga in' }]} />
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return buildMetadata({
		title: 'Logga in',
		pathname: '/logga-in',
	});
}
