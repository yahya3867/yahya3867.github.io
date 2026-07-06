import "./App.css";
import About from "./About";
import Projects from "./Projects";
import Navbar from "./Navbar";
import News from "./News";
import Publications from "./Publications";
import Resume from "./Resume";
import useReveal from "./useReveal";

const App = () => {
	useReveal();

	return (
		<>
			<a href="#about" className="skip-link">
				Skip to main content
			</a>
			<Navbar />
			<main>
				<About />
				<News />
				<Publications />
				<Projects />
				<Resume />
			</main>
			<footer className="site-footer" id="contact">
				<div className="footer-inner">
					<div className="footer-head reveal">
						<p className="footer-marker">
							<span className="ttl">Contact</span>
						</p>
						<h2 className="footer-title">
							Say <span className="it">hello.</span>
						</h2>
					</div>
					<div className="contact-links reveal">
						<a href="mailto:yahya.masri@yahoo.com">
							<span className="lbl">Email</span>
							<span className="v">yahya.masri@yahoo.com</span>
						</a>
						<a href="https://github.com/yahya3867" target="_blank" rel="noopener noreferrer">
							<span className="lbl">GitHub</span>
							<span className="v">github.com/yahya3867</span>
						</a>
						<a href="https://www.linkedin.com/in/yahya-masri/" target="_blank" rel="noopener noreferrer">
							<span className="lbl">LinkedIn</span>
							<span className="v">linkedin.com/in/yahya-masri</span>
						</a>
						<a href="https://scholar.google.com/citations?user=9H1ryOAAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
							<span className="lbl">Scholar</span>
							<span className="v">Google Scholar</span>
						</a>
					</div>
				</div>
				<div className="colophon">
					<div className="colophon-inner">
						<span>&copy; {new Date().getFullYear()} Yahya Masri</span>
						<span>Washington, D.C. Area</span>
					</div>
				</div>
			</footer>
		</>
	);
};
export default App;
