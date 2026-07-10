const About = () => {
	return (
		<section className="section" id="about">
			<div className="about-container">
				<figure className="about-image">
					<img src="./images/updatedpfp.png" alt="Yahya Masri" width="280" height="280" />
				</figure>
				<div className="about-content">
					<h1 className="title">Yahya Masri</h1>
					<h2 className="subtitle">Language Models & Digital Twins</h2>
					<p>
						Hi, my name is Yahya and I'm a computer science student
						at <strong>George Mason University</strong>.
					</p>
					<p>
						I'm interested in <strong>agentic systems</strong> and how language
						models hold up on real-world, domain-specific tasks — from
						infrastructure logs to conflict monitoring.
					</p>
					<p>
						This summer, I'm interning at <strong>SAP NS2</strong> as a Software
						Engineer Intern on the AI Data and Observability team.
					</p>
					<h2 className="subtitle" style={{ marginTop: "2.25rem" }}>What I'm Working On</h2>
					<ul className="about-project-list">
						<li className="about-project-item">
							Competing in the <strong>Anduril AI Grand Prix</strong>.
						</li>
						<li className="about-project-item">
							Research @ the <strong>Spatiotemporal Innovation Center</strong> on a
							Computing Infrastructure Digital Twin.
						</li>
						<li className="about-project-item">
							Building Vision-Language-Action models from first principles @ <a href="https://simplevla.com" target="_blank" rel="noopener noreferrer">SimpleVLA</a>, <em>whenever time allows</em>.
						</li>
					</ul>
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
