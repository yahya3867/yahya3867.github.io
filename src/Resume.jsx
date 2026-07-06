const Resume = () => {
	return (
		<section className="section" id="resume">
			<h2 className="title title-large reveal">Resume</h2>
			<div className="resume-viewer">
				<object
					data="resume.pdf#view=FitH"
					type="application/pdf"
					style={{ height: "100vh", width: "100%" }}
					aria-label="Resume"
				>
					<p style={{ padding: "2rem", textAlign: "center" }}>
						Unable to display PDF.{" "}
						<a href="resume.pdf" download>Download Resume</a>
					</p>
				</object>
			</div>
		</section>
	);
};

export default Resume;
