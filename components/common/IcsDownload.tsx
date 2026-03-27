'use client';

export function IcsDownload({ event, title }: { event?: string | null; title?: string | null }) {
	if (!event || !title) return null;

	function download(e: React.MouseEvent) {
		e.preventDefault();
		if (!event) return;
		const filename = 'KnowHowEvent.ics';
		const file = new File([event], filename, { type: 'text/calendar' });
		const url = URL.createObjectURL(file);
		const anchor = document.createElement('a');
		anchor.href = url;
		anchor.download = filename;
		document.body.appendChild(anchor);
		anchor.click();
		document.body.removeChild(anchor);
		URL.revokeObjectURL(url);
	}

	return (
		<a href='./calender.ics' onClick={download}>
			{title}
		</a>
	);
}
