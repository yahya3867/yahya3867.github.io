import { useState, useEffect } from "react";

const SECTIONS = ["about", "news", "publications", "projects", "resume"];

const Navbar = () => {
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
		</nav>
	);
};

export default Navbar;
