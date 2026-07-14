import Event from "./Event";

const Awards = () => {
	const awards = [
		{
			date: "2026",
			description: "MLH Best Use of Solana — HackFax x PatriotHacks",
		},
		{
			date: "2025–2026",
			description: "Dean's List, George Mason University (Fall 2025, Spring 2026)",
		},
		{
			date: "2026",
			description:
				"Long Nguyen and Kimmy Duong School of Computing Endowed Scholarship, George Mason University",
		},
		{
			date: "2026",
			description: "ADVANCE Initiative STEM Scholarship Fund, George Mason University",
		},
		{
			date: "2026",
			description: "Alliance for Excellence Endowed Scholarship, George Mason University",
		},
	];

	return (
		<section className="section" id="awards">
			<h2 className="title title-large reveal">Awards</h2>
			<div className="reveal-stagger">
				{awards.map((award, index) => (
					<Event key={index} {...award} />
				))}
			</div>
		</section>
	);
};

export default Awards;
