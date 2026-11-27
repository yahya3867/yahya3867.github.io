const EVENTS = [
	{
		date: "November 2026",
		text: <>Earned 3rd overall at Patriot Hackfest Fall 2026 for building <a href="https://tryaro.app">Aro</a>.</>,
	},
	{
		date: "August 2026",
		text: "Joined the U.S. Naval Research Laboratory as a researcher to work on neuro-symbolic AI for capture-the-flag (CTF) as part of CS 491.",
	},
	{
		date: "May 2026",
		text: "Joined SAP NS2 as a Software Engineer Intern on the AI Data & Observability team.",
	},
	{
		date: "February 2026",
		text: <>Won MLH Best Use of Solana at HackFax x PatriotHacks for <a href="https://devpost.com/software/s24">s24</a>, an autonomous trading agent.</>,
	},
];

const News = ({ heading: Heading = 'h2' }) => {
	return (
		<section className="block" id="news">
			<Heading className="block-title">Recent</Heading>
			<ul className="line-list">
				{EVENTS.map((event, index) => (
					<li className="line" key={index}>
						<span className="line-date">{event.date}</span>
						<span className="line-text">{event.text}</span>
					</li>
				))}
			</ul>
		</section>
	);
};

export default News;
