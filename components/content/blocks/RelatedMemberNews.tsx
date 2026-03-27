import { Article } from '@/components';

export type RelatedMemberNewsBlockProps = {
	data: {
		memberNews: NewsRecord;
	};
	onClick: Function;
};

export default function RelatedMemberNews({ data: { memberNews } }: RelatedMemberNewsBlockProps) {
	const { id, content, blackHeadline } = memberNews;
	return <Article id={id} blackHeadline={blackHeadline} content={content} />;
}
