const EVENTS = [
	{
		date: "August 2026",
		text: "Joined the U.S. Naval Research Laboratory as a researcher to work on neuro-symbolic AI for capture-the-flag (CTF) as part of CS 491.",
	},
	{
		date: "May 2026",
		text: "Joined SAP NS2 as a Software Engineer Intern on the AI Data & Observability team.",
	},
];

const News = () => {
	return (
		<section className="block" id="news">
			<h2 className="block-title">Recent</h2>
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
