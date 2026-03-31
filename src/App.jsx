import { useState, useEffect } from "react";
import "./App.css";
import About from "./About";
import Projects from "./Projects";
import Navbar from "./Navbar";
import News from "./News";
import Publications from "./Publications";
import Resume from "./Resume";

const App = () => {
	const [theme, setTheme] = useState(() => {
		return localStorage.getItem("theme") || "light";
	});

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};

	return (
		<>
			<a href="#about" className="skip-link">
				Skip to main content
			</a>
			<Navbar theme={theme} toggleTheme={toggleTheme} />
			<main>
				<About />
				<News />
				<Publications />
				<Projects />
				<Resume />
			</main>
			<footer className="site-footer">
				<img
					src="/images/Scene.png"
					alt="Decorative painting of mountain goats on a hillside"
					className="footer-image"
				/>
				<div className="footer-overlay">
					<div className="footer-buttons">
						<a className="footer-glass-btn" href="https://github.com/yahya3867" target="_blank" rel="noopener noreferrer">GitHub</a>
						<a className="footer-glass-btn" href="https://www.linkedin.com/in/yahya-masri/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
						<a className="footer-glass-btn" href="https://scholar.google.com/citations?user=9H1ryOAAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Scholar</a>
					</div>
					<p className="footer-copy">&copy; {new Date().getFullYear()} Yahya Masri</p>
				</div>
			</footer>
		</>
	);
};
export default App;
