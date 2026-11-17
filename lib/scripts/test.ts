import 'dotenv/config';
import client from '@/lib/client';
import { Application } from '@/types/datocms-cma';

async function main(): Promise<void> {
	console.log('main');
	//const id = 'K8HXDwEGSTK51e713eySGQ';
	const id = 'NygYssF4QXusGeYPMieTrg';
	const memberId = 'bPtpew7CR_-MVcALe2k3QA';

	let application = (
		await client.items.list<Application>({
			page: { limit: 1 },
			filter: {
				type: 'application',
				fields: { activity: { eq: id }, member: { eq: memberId } },
			},
		})
	)?.[0];

	console.log(application);
}

if (process.env.SKIP !== '1') {
	main()
		.then()
		.catch((err) => {});
}
