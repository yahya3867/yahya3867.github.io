import Event from "./Event";

const News = () => {
	const events = [
		{
			date: "January 2026",
			description: (
				<>
					Accepted an AI Software Engineer Internship at Lillup.
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
			<h2 className="title title-large">News</h2>
			{events.map((event, index) => (
				<Event key={index} {...event} />
			))}
		</section>
	);
};

export default News;
