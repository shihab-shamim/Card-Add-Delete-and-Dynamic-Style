import { RichText, useBlockProps } from "@wordpress/block-editor";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;
  const {
    purposeType,
   cards,
   tagName
  } = attributes;
  console.log(tagName);

  return (
    <>
      

      <div {...useBlockProps()}>
      <Settings {...{ attributes, setAttributes }} />
      <Style attributes={attributes} id={`block-${clientId}`} />
        

       <div className="cardBody">
       <div className="cardContainer">
       {
          cards.map((card,i)=><div key={i} className="profile-card">
          <div className="profile-header">
            <img
              className="profile-photo"
              src={card.img}
              alt="Profile Photo"
            />
          </div>
          <div className="profile-info">
            <RichText
            tagName={tagName}
              value={card.name}
             className="cardTitle"
              onChange={(e) => {
                const newCards = [...cards]
                newCards[i].name= e
                setAttributes({ cards: newCards })

              }}
            ></RichText>

            <RichText
              className="job-title"
              value={card.passionate}
              onChange={(e) => {
                const newCards = [...cards]
                newCards[i].passionate= e
                setAttributes({ cards: newCards })

              }}
            ></RichText>
            <RichText
              className="website"
              value={card.company}
              onChange={(e) => {
                const newCards = [...cards]
                newCards[i].company= e
                setAttributes({ cards: newCards })

              }}
            ></RichText>

            <div className="about">
             {
              card?.about &&  <h3 id="about-title">About</h3>
             }
              <RichText
                value={card.about}
                id="about-des"
                onChange={(e) => {
                  const newCards = [...cards]
                  newCards[i].about= e
                  setAttributes({ cards: newCards })

                }}
              ></RichText>
            </div>
          </div>
        </div>)
        }
       </div>
       </div>
        
      </div>
    </>
  );
};
export default Edit;
