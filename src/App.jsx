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
		</>
	);
};
export default App;
