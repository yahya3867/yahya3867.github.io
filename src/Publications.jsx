const SCHOLAR_URL = "https://scholar.google.com/citations?user=9H1ryOAAAAAJ&hl=en";

const Publications = () => {
	const papers = [
		{
			title: "Digital twins as decision infrastructure: evolution, architecture, and research roadmap",
			venue: "Big Earth Data",
			year: "2026",
			link: "https://www.tandfonline.com/doi/full/10.1080/20964471.2026.2678046",
			citations: 1,
		},
		{
			title: "Benchmarking Small Language Models and Small Reasoning Language Models on System Log Severity Classification",
			venue: "arXiv Preprint",
			year: "2026",
			link: "https://arxiv.org/abs/2601.07790",
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
			featured: true,
		},
		{
			title: "Comparative analysis of BERT and GPT for classifying crisis news with Sudan conflict as an example",
			venue: "MDPI Algorithms",
			year: "2025",
			link: "https://www.mdpi.com/1999-4893/18/7/420",
			citations: 2,
		},
	];

	const totalCitations = papers.reduce((sum, paper) => sum + paper.citations, 0);

	return (
		<section className="section" id="publications">
			<h2 className="title title-large reveal">Publications</h2>
			<div className="pub-stats reveal-stagger">
				<div className="pub-stat">
					<span className="pub-stat-fig">{papers.length}</span>
					<span className="pub-stat-lab">Publications</span>
				</div>
				<div className="pub-stat pub-stat--accent">
					<span className="pub-stat-fig">{totalCitations}</span>
					<span className="pub-stat-lab">Citations</span>
				</div>
				<a className="pub-stat pub-stat--link" href={SCHOLAR_URL} target="_blank" rel="noopener noreferrer">
					<span className="pub-stat-fig">&#8599;</span>
					<span className="pub-stat-lab">Google Scholar</span>
				</a>
			</div>
			<div className="pub-board reveal-stagger">
				{papers.map((paper, index) => (
					<PubRow key={index} {...paper} />
				))}
			</div>
		</section>
	);
};

const PubRow = ({ title, venue, year, link, citations, featured }) => {
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className={`pub-row${featured ? " is-top" : ""}`}
		>
			<span className="pub-year">{year}</span>
			<span className="pub-main">
				{featured && <span className="pub-flag">Most cited</span>}
				<span className="pub-title">{title}</span>
				<span className="pub-venue">{venue}</span>
			</span>
			<span className={`pub-cites${citations === 0 ? " pub-cites--none" : ""}`}>
				{citations > 0 ? `${citations} citation${citations !== 1 ? "s" : ""}` : "—"}
			</span>
		</a>
	);
};

export default Publications;
