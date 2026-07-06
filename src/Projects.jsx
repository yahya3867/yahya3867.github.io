const PROJECTS = [
	{
		title: "Athena",
		description:
			"Built an always-on voice assistant running on a Raspberry Pi Zero 2 W with a Whisplay HAT. Press-to-talk records audio, transcribes with gpt-4o-mini-transcribe, routes intent with gpt-5-mini, streams a reply from gpt-5.4 (with optional web search), speaks via gpt-4o-mini-tts, and renders images full-screen with gpt-image-1.5. Ships as a systemd service that auto-starts on boot.",
		techUsed: [
			"Python",
			"Raspberry Pi Zero 2 W",
			"Whisplay HAT",
			"OpenAI API",
			"gpt-4o-mini-transcribe",
			"gpt-5-mini",
			"gpt-5.4",
			"gpt-4o-mini-tts",
			"gpt-image-1.5",
			"systemd",
		],
		links: [
			{ label: "GitHub", href: "https://github.com/yahya3867/athena" },
			{ label: "Devpost", href: "https://devpost.com/software/demo-e2sd8z" },
		],
		images: ["/images/athena1.jpeg", "/images/athena2.jpeg"],
	},
	{
		title: "s24",
		description:
			"Built a 24/7 autonomous Solana trading agent that combines trade orchestration, risk-aware execution, market data ingestion, and a real-time operational dashboard. Won MLH Best Use of Solana at HackFax x PatriotHacks 2026.",
		techUsed: ["OpenClaw", "AWS EC2", "AWS Bedrock", "PostgreSQL", "Solana"],
		links: [
			{ label: "GitHub", href: "https://github.com/akshithambekar/s24" },
			{ label: "Devpost", href: "https://devpost.com/software/s24" },
		],
		images: ["/images/s24.jpg"],
	},
	{
		title: "Glimpse",
		description:
			"Co-developed an AI-powered product video startup that transforms a one-sentence product description into a cinematic 12-second video using a MAS with GPT-5.1 and Sora-2-Pro agents. Implemented the core AI pipeline and backend, orchestrating GPT-5.1 agents to Sora-2-Pro through a Python/OpenAI SDK stack to generate structured prompts and production-ready video outputs.",
		techUsed: ["Python", "OpenAI SDK", "GPT-5.1", "Sora-2-Pro"],
		links: [
			{ label: "Website", href: "https://tryglimpse.dev/" },
			{ label: "Devpost", href: "https://devpost.com/software/glimpse-1v58hu" },
		],
	},
];

const Projects = () => {
	return (
		<section className="section" id="projects">
			<h2 className="title title-large reveal">Projects</h2>
			<div className="projects-grid reveal-stagger">
				{PROJECTS.map((project) => (
					<ProjectCard key={project.title} {...project} />
				))}
			</div>
		</section>
	);
};

const ProjectCard = ({ title, description, techUsed, links, images = [] }) => {
	const hasImages = images.length > 0;

	return (
		<article className="project-card">
			<div className={`project-media ${hasImages ? "project-media--images" : "project-media--placeholder"}`}>
				{hasImages ? (
					images.map((src) => <img key={`${title}-${src}`} src={src} alt={`${title} project preview`} loading="lazy" />)
				) : (
					<div className="project-media-placeholder">
						<span>{title}</span>
					</div>
				)}
			</div>

			<div className="project-card-body">
				<h3 className="title project-card-title">{title}</h3>
				<p className="project-card-description">{description}</p>
				<h4 className="project-card-label">Technologies Used</h4>
				<ul className="project-tech-list">
					{techUsed.map((tech) => (
						<li key={`${title}-${tech}`} className="project-tech-item">
							{tech}
						</li>
					))}
				</ul>
			</div>

			<footer className="project-card-footer">
				{links.map((link) => (
					<a
						key={`${title}-${link.href}`}
						href={link.href}
						rel="noopener noreferrer"
						target="_blank"
						className="project-card-link"
					>
						<span className="project-card-link-label">{link.label}</span>
					</a>
				))}
			</footer>
		</article>
	);
};

export default Projects;
