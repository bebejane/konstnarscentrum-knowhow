import s from './SelectedCommission.module.scss';
import Thumbnail from '@/components/common/Thumbnail';
import SectionHeader from '@/components/layout/SectionHeader';
import { CardContainer, Card, BackgroundImage } from '@/components';

export type SelectedCommissionBlockProps = {
	data: SelectedCommissionRecord & {
		commissions: CommissionRecord[];
	};
};

export default function SelectedCommission({
	data: { commissions },
}: SelectedCommissionBlockProps) {
	return (
		<section className={s.container}>
			<SectionHeader title='Utvalda uppdrag' slug='/anlita-oss/uppdrag' margin={true} />
			<CardContainer columns={3} whiteBorder={true}>
				{commissions.map(
					({ year, city, image, slug }, idx) =>
						image && (
							<Card key={idx}>
								<Thumbnail
									title={`${city} ${year}`}
									image={image}
									slug={`/anlita-oss/uppdrag/${slug}`}
									regional={false}
								/>
							</Card>
						),
				)}
			</CardContainer>
			{commissions?.[0]?.image && <BackgroundImage image={commissions[0].image} />}
		</section>
	);
}
