import { useState } from "react";
import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { ColorsControl } from "../../../../../../bpl-tools/Components";
import { ColorPicker } from "@wordpress/components";
import { SelectControl } from "@wordpress/components";

const Style = ({ attributes, setAttributes }) => {
  const { colors ,title,description,tagName} = attributes;
  const [values, setValues] = useState({
    top: "50px",
    left: "10px",
    right: "10px",
    bottom: "50px",
  });



  return (
    <>
      <PanelBody
      
        className="bPlPanelBody"
        title={__("Title-style", "b-blocks")}
        initialOpen={false}
      >
       <label>Title-Color</label>

       <ColorPicker
	color={ title.color }
  onChange={(val)=>setAttributes({ title: {...title,color: val } })}
/>
       
       <label>Background-Color</label>
       <ColorPicker
       
	color={ title.bg }
  onChange={(val)=>setAttributes({ title: {...title,bg: val } })}
/>
       
      </PanelBody>
      <PanelBody
      className="bPlPanelBody"
      title={__("Description-style", "b-blocks")}
      initialOpen={false}
      >
         <label>Description-Color</label>

<ColorPicker
color={ description.color }
onChange={(val)=>setAttributes({ description: {...description,color: val } })}
/>

<label>Background-Color</label>
<ColorPicker

color={ description.bg }
onChange={(val)=>setAttributes({ description: {...description,bg: val } })}
/>

      </PanelBody>
      <PanelBody 
      className="bPlPanelBody"
      title={__("Title-tag", "b-blocks")}
      initialOpen={false}
       >
<SelectControl
value={tagName} options={ [
		{ value: null, label: 'Select a Tag', disabled: true },
		{ value: 'h2', label: 'H2' },
		{ value: 'p', label: 'P' },
		{ value: 'span', label: 'Span' },
	] }
  onChange={ ( val ) => setAttributes( {tagName:val})}
  >

</SelectControl>

      </PanelBody>
    </>
  );
};

export default Style;
