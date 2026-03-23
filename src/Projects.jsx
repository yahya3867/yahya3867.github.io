const Projects = () => {
	return (
		<section className="section" id="projects">
			<h2 className="title title-large">Projects</h2>
			<div className="columns">
				<ProjectCard
					title="Athena"
					description="Built an always-on voice assistant running on a Raspberry Pi Zero 2 W with a Whisplay HAT. Press-to-talk records audio, transcribes with gpt-4o-mini-transcribe, routes intent with gpt-5-mini, streams a reply from gpt-5.4 (with optional web search), speaks via gpt-4o-mini-tts, and renders images full-screen with gpt-image-1.5. Ships as a systemd service that auto-starts on boot."
					tech_used={["Python", "OpenAI API", "Raspberry Pi", "gpt-4o-mini", "gpt-image-1.5", "systemd"]}
					link="https://github.com/yahya3867/athena"
					image="/images/athena1.jpeg"
				/>
				<ProjectCard
					title="s24"
					description="Built a 24/7 autonomous Solana trading agent that combines trade orchestration, risk-aware execution, market data ingestion, and a real-time operational dashboard. Won [MLH] Best Use of Solana at HackFax x PatriotHacks 2026."
					tech_used={["OpenClaw", "AWS EC2", "AWS Bedrock", "PostgreSQL", "Solana"]}
					link="https://github.com/akshithambekar/s24"
				/>
				<ProjectCard
					title="Glimpse"
					description="Co-developed an AI-powered product video startup that transforms a one-sentence product description into a cinematic 12-second video using a MAS with GPT-5.1 and Sora-2-Pro agents. Implemented the core AI pipeline and backend, orchestrating GPT-5.1 agents to Sora-2-Pro through a Python/OpenAI SDK stack to generate structured prompts and production-ready video outputs."
					tech_used={["Python", "OpenAI SDK", "GPT-5.1", "Sora-2-Pro"]}
					link="https://tryglimpse.dev/"
				/>
				<ProjectCard
					title="SoccerBot"
					description="Built a lightweight RAG pipeline through retrieval over curated league data using Python and CSV-based search, enabling context-aware LLM predictions. Created a UI through Streamlit with dropdown-driven team selection and RAG-backed retrieval logic, improving reliability with robust error handling for missing historical data."
					tech_used={["Python", "RAG", "Streamlit", "LLMs"]}
					link="https://github.com/yahya3867/SoccerBot"
				/>
			</div>
		</section>
	);
};

const ProjectCard = ({ title, description, tech_used, link, image }) => {
	return (
		<div className="card project-card">
			{image && (
				<div className="card-image">
					<figure className="image">
						<img src={image} alt={title} style={{ objectFit: "cover", maxHeight: "200px", width: "100%" }} />
					</figure>
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
				<a
					href={link}
					rel="noopener noreferrer"
					target="_blank"
					className="card-footer-item"
				>
					<span className="card-footer-label">Project Link</span>
				</a>
			</footer>
		</div>
	);
};

export default Projects;
