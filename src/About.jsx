import { ServerRack } from "./Concepts";
import BrandMark from "./BrandMark";

const Intro = () => {
	return (
		<header className="intro">
			<h1 className="name"><BrandMark />Yahya Masri</h1>
			<p className="intro-line">I work on language models, digital twins, and AI systems that interact with the world.</p>
			<ServerRack />
			<p>I'm a senior computer science student at George Mason University.</p>
			<p>
				I'm a research assistant at the NSF Spatiotemporal Innovation Center, where I've published
				five papers across venues including Big Earth Data and the
				International Journal of Digital Earth. My research focuses on language models and
				digital twins for infrastructure monitoring and geospatial intelligence.
			</p>
			<p>Outside of work, I play tennis and chess and enjoy traveling.</p>
			<nav className="intro-nav" aria-label="Explore my work">
				<a href="/publications">Publications</a>
				<a href="/projects">Projects</a>
				<a href="/awards">Awards</a>
				<a href="/recent">Recent</a>
				<a href="/contact">Get in touch ↗</a>

			</nav>
		</header>
	);
};

export default Intro;
