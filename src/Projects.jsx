const PROJECTS = [
	{
		title: "Autonomous FPV Drone Racing",
		description:
			"An autonomous drone-racing stack built for the Anduril AI Grand Prix, integrating FPV perception, mapless control, random-course generation, and truth-based race scoring, with a reproducible pipeline for seeded races.",
		links: [{ label: "GitHub", href: "https://github.com/yahya3867/ai-grand-prix-sim" }],
	},
	{
		title: "Athena",
		description:
			"A pocket-sized multimodal assistant that boots with the device, listens for spoken requests, responds by voice, and displays generated visuals, running continuously on a Raspberry Pi Zero 2 W.",
		links: [
			{ label: "GitHub", href: "https://github.com/yahya3867/athena" },
			{ label: "Devpost", href: "https://devpost.com/software/demo-e2sd8z" },
		],
	},
	{
		title: "s24",
		description:
			"An autonomous Solana trading agent with risk-aware execution, market-data ingestion, and a real-time operational dashboard. Winner of MLH Best Use of Solana at HackFax x PatriotHacks 2026.",
		links: [
			{ label: "GitHub", href: "https://github.com/akshithambekar/s24" },
			{ label: "Devpost", href: "https://devpost.com/software/s24" },
		],
	},
];

const Projects = () => {
	return (
		<section className="block" id="projects">
			<h2 className="block-title">Projects</h2>
			<ul className="list">
				{PROJECTS.map((project) => (
					<li className="item" key={project.title}>
						<div className="item-head">
							<span className="item-title">{project.title}</span>
							<span className="item-links">
								{project.links.map((link) => (
									<a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
										{link.label}
									</a>
								))}
							</span>
						</div>
						<p className="item-desc">{project.description}</p>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Projects;
