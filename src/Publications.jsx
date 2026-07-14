const PAPERS = [
	{
		title: "Digital twins as decision infrastructure: evolution, architecture, and research roadmap",
		venue: "Big Earth Data",
		year: "2026",
		link: "https://www.tandfonline.com/doi/full/10.1080/20964471.2026.2678046",
		citations: 1,
	},
	{
		title: "Benchmarking Small Language Models and Small Reasoning Language Models on System Log Severity Classification",
		venue: "MDPI Computers",
		year: "2026",
		link: "https://www.mdpi.com/2073-431X/15/7/430",
		citations: 2,
	},
	{
		title: "Automating Data Collection to Support Conflict Analysis: Scraping the Internet for Monitoring Hourly Conflict in Sudan",
		venue: "Cloud Computing and Data Science",
		year: "2026",
		link: "https://ojs.wiserpub.com/index.php/CCDS/article/view/8226/3864",
		citations: 1,
	},
	{
		title: "Optimizing context-based location extraction by tuning open-source LLMs with RAG",
		venue: "International Journal of Digital Earth",
		year: "2025",
		link: "https://www.tandfonline.com/doi/full/10.1080/17538947.2025.2521786",
		citations: 9,
	},
	{
		title: "Comparative analysis of BERT and GPT for classifying crisis news with Sudan conflict as an example",
		venue: "MDPI Algorithms",
		year: "2025",
		link: "https://www.mdpi.com/1999-4893/18/7/420",
		citations: 2,
	},
];

const Publications = () => {
	return (
		<section className="block" id="publications">
			<h2 className="block-title">Publications</h2>
			<ul className="list">
				{PAPERS.map((paper) => (
					<li className="item" key={paper.link}>
						<a className="item-title" href={paper.link} target="_blank" rel="noopener noreferrer">
							{paper.title}
						</a>
						<span className="item-meta">
							{paper.venue} · {paper.year}
							{paper.citations > 0 && ` · ${paper.citations} citation${paper.citations !== 1 ? "s" : ""}`}
						</span>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Publications;
