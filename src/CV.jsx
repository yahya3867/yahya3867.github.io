const CV = () => {
	return (
		<section className="section" id="cv">
			<h2 className="title title-large">CV</h2>
			<div className="cv-viewer">
				<object
					data="cv.pdf#view=FitH"
					type="application/pdf"
					style={{ height: "100vh", width: "100%" }}
					aria-label="Curriculum Vitae"
				>
					<p style={{ padding: "2rem", textAlign: "center" }}>
						Unable to display PDF.{" "}
						<a href="cv.pdf" download>Download CV</a>
					</p>
				</object>
			</div>
		</section>
	);
};

export default CV;
