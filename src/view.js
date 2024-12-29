	import { createRoot } from "react-dom/client";
	import "./style.scss";
	import Style from "./Components/Common/Style";

	document.addEventListener("DOMContentLoaded", () => {
	const blockNameEls = document.querySelectorAll(
		".wp-block-b-blocks-test-purpose"
	);
	blockNameEls.forEach((blockNameEl) => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);
		const {
		cards,tagName
		} = attributes;

		createRoot(blockNameEl).render(
		<>
			<Style attributes={attributes} id={blockNameEl.id} />
			<div className="cardBody">
			<div className="cardContainer">
				{cards.map((card, i) => (
				<div key={i} className="profile-card">
					<div className="profile-header">
					<img
						className="profile-photo"
						src={card.img}
						alt="Profile Photo"
					/>
					</div>
					<div className="profile-info">
					<h2 className="cardTitle" dangerouslySetInnerHTML={{__html : card.name}} />

					<p  className="job-title" dangerouslySetInnerHTML={{__html : card.passionate}} /> 
					<p dangerouslySetInnerHTML={{__html : card.company}} /> 

					<div className="about">
						{card?.about && <h3 id="about-title">About</h3>}
						<p dangerouslySetInnerHTML={{__html : card.about}} /> 

					</div>
					</div>
				</div>
				))}
			</div>
			</div>
		</>
		);

		blockNameEl?.removeAttribute("data-attributes");
	});
	});
