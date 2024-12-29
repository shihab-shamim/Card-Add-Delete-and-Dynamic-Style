const Style = ({ attributes, id }) => {
	const { colors,alignment,title,description } = attributes;

	const mainSl = `#${id}`;
const cardBody = `${mainSl} .cardBody`
const cardContainer =`${cardBody} .cardContainer`
const profileCard = `${cardContainer} .profile-card`
const profileInfo = `${profileCard} .profile-info`
const cardTitle=`${profileInfo} .cardTitle`
const jobDescription=`${profileInfo} .job-title`

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
	${cardTitle}{
		color:${title.color};
		background-color:${title.bg}
		}
	`}} />;
}
export default Style;