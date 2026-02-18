const Publications = () => {
	const papers = [
		{
			title: "Benchmarking Small Language Models and Small Reasoning Language Models on System Log Severity Classification",
			venue: "arXiv Preprint",
			year: "2026",
			link: "https://arxiv.org/abs/2601.07790",
			citations: 0,
		},
		{
			title: "Automating Data Collection to Support Conflict Analysis: Scraping the Internet for Monitoring Hourly Conflict in Sudan",
			venue: "Cloud Computing and Data Science",
			year: "2025",
			link: "https://ojs.wiserpub.com/index.php/CCDS/article/view/8226/3864",
			citations: 0,
		},
		{
			title: "Comparative analysis of BERT and GPT for classifying crisis news with Sudan conflict as an example",
			venue: "MDPI Algorithms",
			year: "2025",
			link: "https://www.mdpi.com/1999-4893/18/7/420",
			citations: 2,
		},
		{
			title: "Optimizing context-based location extraction by tuning open-source LLMs with RAG",
			venue: "International Journal of Digital Earth",
			year: "2025",
			link: "https://www.tandfonline.com/doi/full/10.1080/17538947.2025.2521786",
			citations: 6,
		},
	];

	return (
		<section className="section" id="publications">
			<h2 className="title title-large">Publications</h2>
			<p className="pub-summary">
				4 publications &middot; 8 citations &middot;{" "}
				<a
					href="https://scholar.google.com/citations?user=9H1ryOAAAAAJ&hl=en"
					target="_blank"
					rel="noopener noreferrer"
				>
					Google Scholar
				</a>
			</p>
			{papers.map((paper, index) => (
				<PubCard key={index} {...paper} />
			))}
		</section>
	);
};

const PubCard = ({ title, venue, year, link, citations }) => {
	return (
		<div className="pub-item">
			<a
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				className="pub-title"
			>
				{title}
			</a>
			<p className="pub-meta">
				{venue} &middot; {year}
				{citations > 0 && <> &middot; {citations} citation{citations !== 1 ? "s" : ""}</>}
			</p>
		</div>
	);
};

export default Publications;
