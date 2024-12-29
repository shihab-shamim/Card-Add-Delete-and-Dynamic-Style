import { __ } from '@wordpress/i18n';

import { PanelBody, SelectControl } from '@wordpress/components';
import { purposeTypeOptions } from '../../../../utils/options';
import { updateData } from '../../../../utils/functions';
import { TextControl } from '@wordpress/components';
import { TextareaControl } from '@wordpress/components';
import { ToggleControl,IconButton } from '@wordpress/components';
import {MediaUpload} from "@wordpress/block-editor"
import { Button } from '@wordpress/components';


const General = ({ attributes, setAttributes }) => {
  
  const { purposeType ,name,passsionate,about,company,social,target,Profile,cards} = attributes;
  

  return (
   <>


      <PanelBody lassName='bPlPanelBody' title={__('Card', 'b-blocks')} initialOpen={false}>


        {
          cards.map((card,i)=><PanelBody key={i} lassName='bPlPanelBody' title={__(`Card-${i+1}`)} initialOpen={false}> 
          <TextControl 
                    label={__('Name', 'b-blocks')}
                    value={card.name}
                    placeholder='type your name'
                    onChange={(e) => {
                      const newCards = [...cards]
                      newCards[i].name= e
                      setAttributes({ cards: newCards })

                    }}
                  />
          <TextControl 
                    label={__('Passionate', 'b-blocks')}
                    value={card.passionate}
                    placeholder='type your passionate'
                    onChange={(e) => {
                      const newCards = [...cards]
                      newCards[i].passionate= e
                      setAttributes({ cards: newCards })

                    }}
                  />
          <TextControl 
                    label={__('Company-Name', 'b-blocks')}
                    value={card.company}
                    placeholder='type your company name'
                    onChange={(e) => {
                      const newCards = [...cards]
                      newCards[i].company= e
                      setAttributes({ cards: newCards })

                    }}
                  />
          <TextControl 
                    label={__('About', 'b-blocks')}
                    value={card.about}
                    placeholder='type your about'
                    onChange={(e) => {
                      const newCards = [...cards]
                      newCards[i].about= e
                      setAttributes({ cards: newCards })

                    }}
                  />
                  <MediaUpload
					onSelect={(media) => {
            const newCards = [...cards]
            newCards[i].img= media.url
            setAttributes({ cards: newCards })

          }}
					type="image"
					value={card.img}
					render={({ open }) => (
						<IconButton
							onClick={open}
							icon="upload"
							className="editor-media-placeholder_button is-button is-default is-large"
						>
							Upload a Photo
						</IconButton>
					)}
				/> 
        <Button onClick={()=>{
          const newCards= [...cards]
          const deletyedCards = newCards.filter((card,index) =>  index!==i)
          setAttributes({ cards: deletyedCards })

        }} variant='primary'>Delete</Button>
          </PanelBody>)

        }

        <Button onClick={()=>{
            const newCard = [...cards]
            newCard.push({
              name:"",
              passionate:"",
              company:"",
              about:"",
              img:""

            })
            setAttributes({ cards: newCard })

        }} variant='primary'>Add Card</Button>

      </PanelBody>
   
   
     
   


    
    
  
   </>
  )
}

export default General