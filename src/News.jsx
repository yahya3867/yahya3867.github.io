import Event from "./Event";

const News = () => {
	const events = [
		{
			date: "January 2026",
			description: (
				<>
					Accepted an AI Software Engineer Internship at <strong>Lillup</strong>.
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
						"Benchmarking Small Language Models on System Log Severity Classification"
					</a>{" "}
					on arXiv.
				</>
			),
		},
		{
			date: "July 2025",
			description: (
				<>
					Paper published in the{" "}
					<strong>International Journal of Digital Earth</strong>:{" "}
					<a
						href="https://www.tandfonline.com/doi/full/10.1080/17538947.2025.2521786"
						target="_blank"
						rel="noopener noreferrer"
					>
						"Optimizing Context-Based Location Extraction by Tuning Open-Source LLMs with RAG."
					</a>
				</>
			),
		},
	];

	return (
		<section className="section" id="news">
			<h2 className="title title-large">News</h2>
			{events.map((event, index) => (
				<Event key={index} {...event} />
			))}
		</section>
	);
};

export default News;
