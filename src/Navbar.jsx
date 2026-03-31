import { useState, useEffect } from "react";

const SunIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<circle cx="12" cy="12" r="5" />
		<line x1="12" y1="1" x2="12" y2="3" />
		<line x1="12" y1="21" x2="12" y2="23" />
		<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
		<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
		<line x1="1" y1="12" x2="3" y2="12" />
		<line x1="21" y1="12" x2="23" y2="12" />
		<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
		<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
	</svg>
);

const MoonIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
	</svg>
);

const SECTIONS = ["about", "news", "publications", "projects", "resume"];

const Navbar = ({ theme, toggleTheme }) => {
	const [active, setActive] = useState("about");

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActive(entry.target.id);
					}
				});
			},
			{ rootMargin: "-40% 0px -55% 0px" }
		);

		SECTIONS.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<nav aria-label="Main navigation">
			{SECTIONS.map((id) => (
				<a key={id} href={`#${id}`} className={active === id ? "active" : ""}>
					{id.charAt(0).toUpperCase() + id.slice(1)}
				</a>
			))}
			<button
				className="theme-toggle"
				onClick={toggleTheme}
				aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
				title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
			>
				{theme === "light" ? <MoonIcon /> : <SunIcon />}
			</button>
		</nav>
	);
};

export default Navbar;
