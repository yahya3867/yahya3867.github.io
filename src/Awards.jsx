const AWARDS = [
	{
		date: "2026",
		text: "MLH Best Use of Solana — HackFax x PatriotHacks",
	},
	{
		date: "2025–2026",
		text: "Dean's List, George Mason University (Fall 2025, Spring 2026)",
	},
	{
		date: "2026",
		text: "Long Nguyen and Kimmy Duong School of Computing Endowed Scholarship, George Mason University",
	},
	{
		date: "2026",
		text: "ADVANCE Initiative STEM Scholarship Fund, George Mason University",
	},
];

const Awards = () => {
	return (
		<section className="block" id="awards">
			<h2 className="block-title">Awards</h2>
			<ul className="line-list">
				{AWARDS.map((award, index) => (
					<li className="line" key={index}>
						<span className="line-date">{award.date}</span>
						<span className="line-text">{award.text}</span>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Awards;
