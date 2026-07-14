import "./App.css";
import Intro from "./About";
import Publications from "./Publications";
import Projects from "./Projects";
import Awards from "./Awards";
import News from "./News";

const App = () => {
	return (
		<>
			<a href="#main" className="skip-link">
				Skip to content
			</a>
			<main className="page" id="main">
				<Intro />
				<Publications />
				<Projects />
				<Awards />
				<News />
				<footer className="contact" id="contact">
					<a href="mailto:yahya.masri@yahoo.com">Email</a>
					<a href="https://github.com/yahya3867" target="_blank" rel="noopener noreferrer">
						GitHub
					</a>
					<a href="https://www.linkedin.com/in/yahya-masri/" target="_blank" rel="noopener noreferrer">
						LinkedIn
					</a>
					<a
						href="https://scholar.google.com/citations?user=9H1ryOAAAAAJ&hl=en"
						target="_blank"
						rel="noopener noreferrer"
					>
						Google Scholar
					</a>
					<a href="Yahya_Masri_Resume.pdf" target="_blank" rel="noopener noreferrer">
						Resume
					</a>
				</footer>
				<p className="colophon">&copy; {new Date().getFullYear()} Yahya Masri</p>
			</main>
		</>
	);
};

export default App;
