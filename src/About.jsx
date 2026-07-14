const Intro = () => {
	return (
		<header className="intro">
			<h1 className="name">Yahya Masri</h1>
			<h2 className="block-title">About Me</h2>
			<p>
				Currently a software engineer intern on SAP NS2's AI Data and Observability team.
			</p>
			<p>I'm an undergraduate computer science student at George Mason University.</p>
			<p>
				I'm a research assistant at the NSF Spatiotemporal Innovation Center, where I've had
				the chance to publish five papers across venues including MDPI Computers, Big Earth
				Data, Cloud Computing and Data Science, the International Journal of Digital Earth,
				and MDPI Algorithms. My research focuses on language models and digital twins for
				infrastructure monitoring and geospatial intelligence.
			</p>
			<p>
				Right now I'm working on the Anduril project, an autonomous FPV drone-racing stack
				for the Anduril AI Grand Prix that spans perception, mapless control, random-course
				generation, and truth-based race scoring. I'm also building vision-language-action
				models from scratch at{" "}
				<a href="https://simplevla.com" target="_blank" rel="noopener noreferrer">
					SimpleVLA
				</a>
				.
			</p>
			<p>I like to play tennis, chess, and travel.</p>
		</header>
	);
};

export default Intro;
