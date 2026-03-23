const Projects = () => {
	return (
		<section className="section" id="projects">
			<h2 className="title title-large">Projects</h2>
			<div className="columns">
				<ProjectCard
					title="Athena"
					description="Built an always-on voice assistant running on a Raspberry Pi Zero 2 W with a Whisplay HAT. Press-to-talk records audio, transcribes with gpt-4o-mini-transcribe, routes intent with gpt-5-mini, streams a reply from gpt-5.4 (with optional web search), speaks via gpt-4o-mini-tts, and renders images full-screen with gpt-image-1.5. Ships as a systemd service that auto-starts on boot."
					tech_used={["Python", "OpenAI API", "Raspberry Pi", "gpt-4o-mini", "gpt-image-1.5", "systemd"]}
					links={[
						{ label: "GitHub", href: "https://github.com/yahya3867/athena" },
						{ label: "Devpost", href: "https://devpost.com/software/demo-e2sd8z" },
					]}
					images={["/images/athena1.jpeg", "/images/athena2.jpeg"]}
				/>
				<ProjectCard
					title="s24"
					description="Built a 24/7 autonomous Solana trading agent that combines trade orchestration, risk-aware execution, market data ingestion, and a real-time operational dashboard. Won [MLH] Best Use of Solana at HackFax x PatriotHacks 2026."
					tech_used={["OpenClaw", "AWS EC2", "AWS Bedrock", "PostgreSQL", "Solana"]}
					links={[
						{ label: "GitHub", href: "https://github.com/akshithambekar/s24" },
						{ label: "Devpost", href: "https://devpost.com/software/s24" },
					]}
				/>
				<ProjectCard
					title="Glimpse"
					description="Co-developed an AI-powered product video startup that transforms a one-sentence product description into a cinematic 12-second video using a MAS with GPT-5.1 and Sora-2-Pro agents. Implemented the core AI pipeline and backend, orchestrating GPT-5.1 agents to Sora-2-Pro through a Python/OpenAI SDK stack to generate structured prompts and production-ready video outputs."
					tech_used={["Python", "OpenAI SDK", "GPT-5.1", "Sora-2-Pro"]}
					links={[
						{ label: "Website", href: "https://tryglimpse.dev/" },
						{ label: "Devpost", href: "https://devpost.com/software/glimpse-1v58hu" },
					]}
				/>
			</div>
		</section>
	);
};

const ProjectCard = ({ title, description, tech_used, links, images }) => {
	return (
		<div className="card project-card">
			{images && images.length > 0 && (
				<div className="project-images">
					{images.map((src, i) => (
						<img key={i} src={src} alt={`${title} ${i + 1}`} />
					))}
				</div>
			)}
			<div className="card-content">
				<h3 className="title title-medium">{title}</h3>
				<p className="card-description">{description}</p>
				<h4>Technologies Used:</h4>
				<ul className="list">
					{tech_used.map((tech, index) => (
						<li key={index} className="list-item">
							{tech}
						</li>
					))}
				</ul>
			</div>
			<footer className="card-footer mt-auto">
				<div className="card-footer-links">
					{links.map((l, i) => (
						<a
							key={i}
							href={l.href}
							rel="noopener noreferrer"
							target="_blank"
							className="card-footer-item"
						>
							<span className="card-footer-label">{l.label}</span>
						</a>
					))}
				</div>
			</footer>
		</div>
	);
};

export default Projects;
