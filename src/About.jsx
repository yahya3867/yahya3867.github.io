const Intro = () => {
	return (
		<header className="intro">
			<h1 className="name">Yahya Masri</h1>
			<h2 className="block-title">About Me</h2>
			<p>
				Currently a software engineer intern on SAP NS2's AI Data and Observability team.
			</p>
			<p>
				I'm an undergraduate computer science student at George Mason University, graduating
				in 2028.
			</p>
			<p>
				My research focuses on getting language models to hold up on real, domain-specific
				tasks: log-severity classification, location extraction with RAG, digital twins, and
				crisis-news classification. I've published five papers across venues including MDPI
				Computers, Big Earth Data, and the International Journal of Digital Earth.
			</p>
			<p>
				Right now I'm also researching a computing-infrastructure digital twin at the
				Spatiotemporal Innovation Center and building vision-language-action models at{" "}
				<a href="https://simplevla.com" target="_blank" rel="noopener noreferrer">
					SimpleVLA
				</a>
				.
			</p>
		</header>
	);
};

export default Intro;
