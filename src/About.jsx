const Intro = () => {
	return (
		<header className="intro">
			<h1 className="name">Yahya Masri</h1>
			<p>
				I'm a computer science student at George Mason University and a software engineer
				intern on SAP NS2's AI Data &amp; Observability team. My work sits at the
				intersection of agentic systems, infrastructure monitoring, and the evaluation of
				language models on real, domain-specific tasks.
			</p>
			<p>
				I've published research on log-severity classification, location extraction with
				RAG, digital twins, and crisis-news classification, mostly on getting language
				models to hold up outside of benchmarks. Right now I'm researching a
				computing-infrastructure digital twin at the Spatiotemporal Innovation Center and
				building vision-language-action models at{" "}
				<a href="https://simplevla.com" target="_blank" rel="noopener noreferrer">
					SimpleVLA
				</a>
				.
			</p>
		</header>
	);
};

export default Intro;
