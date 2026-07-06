import Event from "./Event";

const News = () => {
	const events = [
		{
			date: "February 2026",
			description: (
				<>
					Accepted a Language Model Intern role at SAP NS2.
				</>
			),
		},
		{
			date: "February 2026",
			description: (
				<>
					Won [MLH] Best Use of Solana at HackFax x PatriotHacks 2026 for{" "}
					<a
						href="https://lnkd.in/eU4vBiP2"
						target="_blank"
						rel="noopener noreferrer"
					>
						s24
					</a>
					, a fully autonomous OpenClaw AI agent that trades on Solana.
				</>
			),
		},
		{
			date: "January 2026",
			description: (
				<>
					Published preprint{" "}
					<a
						href="https://arxiv.org/abs/2601.07790"
						target="_blank"
						rel="noopener noreferrer"
					>
						"Benchmarking Small Language Models and Small Reasoning Language Models on System Log Severity Classification"
					</a>{" "}
					on arXiv.
				</>
			),
		},
		{
			date: "July 2025",
			description: (
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

	return (
		<section className="section" id="news">
			<h2 className="title title-large reveal">News</h2>
			<div className="reveal-stagger">
				{events.map((event, index) => (
					<Event key={index} {...event} />
				))}
			</div>
		</section>
	);
};

export default News;
