import { useState } from "react";

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
	const [imageIndex, setImageIndex] = useState(0);
	const hasImages = images.length > 0;
	const hasMultiple = images.length > 1;

	const showPrev = () => setImageIndex((i) => (i - 1 + images.length) % images.length);
	const showNext = () => setImageIndex((i) => (i + 1) % images.length);

	return (
		<article className="project-card">
			<div className={`project-media ${hasImages ? "project-media--carousel" : "project-media--placeholder"}`}>
				{hasImages ? (
					<>
						<img
							key={images[imageIndex]}
							src={images[imageIndex]}
							alt={`${title} project preview${hasMultiple ? ` (photo ${imageIndex + 1} of ${images.length})` : ""}`}
							className="project-media-img"
							loading="lazy"
						/>
						{hasMultiple && (
							<>
								<button type="button" className="carousel-btn carousel-btn--prev" onClick={showPrev} aria-label="Previous photo">
									&#8249;
								</button>
								<button type="button" className="carousel-btn carousel-btn--next" onClick={showNext} aria-label="Next photo">
									&#8250;
								</button>
								<div className="carousel-dots" aria-hidden="true">
									{images.map((src, i) => (
										<span key={src} className={`carousel-dot${i === imageIndex ? " is-active" : ""}`} />
									))}
								</div>
							</>
						)}
					</>
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
