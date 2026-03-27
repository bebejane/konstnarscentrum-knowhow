import s from './FindArtist.module.scss';

export type FindArtistBlockProps = {
	data: any;
};

export default function FindArtist({ data }: FindArtistBlockProps) {
	return <section className={s.container}>Find artist</section>;
}
