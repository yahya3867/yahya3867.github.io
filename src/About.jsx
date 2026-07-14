const About = () => {
	return (
		<section className="section" id="about">
			<div className="about-container">
				<figure className="about-image">
					<img src="./images/updatedpfp.png" alt="Yahya Masri" width="280" height="280" />
				</figure>
				<div className="about-content">
					<h1 className="title">Yahya Masri</h1>
					<h2 className="subtitle">AI Systems & Applied Language Models</h2>
					<p>
						I'm a computer science student at <strong>George Mason University</strong> and
						a Software Engineer Intern on <strong>SAP NS2</strong>'s AI Data and
						Observability team.
					</p>
					<p>
						My work spans agentic systems, infrastructure intelligence, digital
						twins, and the evaluation of language models on domain-specific tasks.
					</p>
					<div className="about-quicklinks">
						<a href="#publications">Publications</a>
						<a href="#projects">Selected Projects</a>
						<a href="#awards">Awards</a>
					</div>
					<p className="about-current">
						Currently: researching a Computing Infrastructure Digital Twin at the
						Spatiotemporal Innovation Center, and building Vision-Language-Action
						models at{" "}
						<a href="https://simplevla.com" target="_blank" rel="noopener noreferrer">
							SimpleVLA
						</a>.
					</p>
					<div className="about-links">
						<a
							href="https://github.com/yahya3867"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub"
							className="about-icon-link"
						>
							<img className="about-icon about-icon-default" src="./images/github.svg" alt="" width="36" height="36" aria-hidden="true" />
							<img className="about-icon about-icon-hover" src="./images/github_hover.svg" alt="" width="36" height="36" aria-hidden="true" />
						</a>
						<a
							href="https://www.linkedin.com/in/yahya-masri/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
							className="about-icon-link"
						>
							<img className="about-icon about-icon-default" src="./images/linkedin.svg" alt="" width="36" height="36" aria-hidden="true" />
							<img className="about-icon about-icon-hover" src="./images/linkedin_hover.svg" alt="" width="36" height="36" aria-hidden="true" />
						</a>
						<a
							href="https://scholar.google.com/citations?user=9H1ryOAAAAAJ&hl=en"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Google Scholar"
							className="about-icon-link"
						>
							<img className="about-icon about-icon-default" src="./images/scholar.svg" alt="" width="36" height="36" aria-hidden="true" />
							<img className="about-icon about-icon-hover" src="./images/scholar_hover.svg" alt="" width="36" height="36" aria-hidden="true" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
