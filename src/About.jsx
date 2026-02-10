const About = () => {
	return (
		<section className="section" id="about">
			<div className="about-container">
				<figure className="about-image">
					<img src="./images/updatedpfp.png" alt="Yahya Masri" width="280" height="280" />
				</figure>
				<div className="about-content">
					<h1 className="title">Yahya Masri</h1>
					<h2 className="subtitle">AI Evaluation & Digital Twins</h2>
					<p>
						Hi, my name is Yahya and I'm a third year student studying
						computer science at George Mason University.
					</p>
					<p>
						I'm broadly interested in evaluating language models on
						domain-specific tasks, digital twins, and their intersection.
					</p>
					<p>
						This spring, I'll be interning at Lillup as an AI Software
						Engineer, and this summer I'll be interning at ___.
					</p>
					<h2 className="subtitle" style={{ marginTop: "2.25rem" }}>What I'm Working On</h2>
					<div className="about-project-desc">
						<p className="about-project-text">
							Research @ the Spatiotemporal Innovation Center on a
							Computing Infrastructure Digital Twin.
						</p>
						<p className="about-project-text">
							Working on a Human Digital Twin @ Lillup.
						</p>
						<p className="about-project-text">
							Teaching C and Low-level Systems as a TA for CS262.
						</p>
					</div>
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
