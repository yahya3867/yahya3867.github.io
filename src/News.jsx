const EVENTS = [
	{
		date: "July 2026",
		text: (
			<>
				Paper published in MDPI Computers:{" "}
				<a
					href="https://www.mdpi.com/2073-431X/15/7/430"
					target="_blank"
					rel="noopener noreferrer"
				>
					"Benchmarking Small Language Models and Small Reasoning Language Models on System
					Log Severity Classification."
				</a>
			</>
		),
	},
	{
		date: "February 2026",
		text: "Accepted a SWE Intern role at SAP NS2.",
	},
	{
		date: "February 2026",
		text: (
			<>
				Won MLH Best Use of Solana at HackFax x PatriotHacks 2026 for{" "}
				<a href="https://devpost.com/software/s24" target="_blank" rel="noopener noreferrer">
					s24
				</a>
				, an autonomous OpenClaw AI agent that trades on Solana.
			</>
		),
	},
	{
		date: "July 2025",
		text: (
			<>
				Paper published in the International Journal of Digital Earth:{" "}
				<a
					href="https://www.tandfonline.com/doi/full/10.1080/17538947.2025.2521786"
					target="_blank"
					rel="noopener noreferrer"
				>
					"Optimizing context-based location extraction by tuning open-source LLMs with RAG."
				</a>
			</>
		),
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
