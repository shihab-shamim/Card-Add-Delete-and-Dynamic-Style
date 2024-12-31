	const Style = ({ attributes, id }) => {
		const { colors,alignment,title,description,cards } = attributes;

		const mainSl = `#${id}`;
	const cardBody = `${mainSl} .cardBody`;
	const cardContainer =`${cardBody} .cardContainer`;
	const profileCard = `${cardContainer} .profile-card`;
	const profileInfo = `${profileCard} .profile-info`;
	const jobDescription=`${profileInfo} .job-title`;

	const cardStyle=cards.map((card,index)=>{
		const uniqueCardClass = `.cardTitle-${index}`; 
		return `
		${uniqueCardClass} {
			color: ${card.color};
			background-color: ${card.bg};
		}
		`;

	}).join("\n") || "";
	

		return <style dangerouslySetInnerHTML={{
			__html: `
			${cardBody}{
			display: flex;
			justify-content:${alignment};
		}
		
		${jobDescription}{
			color:${description.color};
			background-color:${description.bg}
			}
			
		${cardStyle}
		
		`}} />;
	}
	export default Style;