import { useState } from "react";
import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { ColorsControl } from "../../../../../../bpl-tools/Components";
import { ColorPicker } from "@wordpress/components";
import { SelectControl } from "@wordpress/components";

const Style = ({ attributes, setAttributes, selected }) => {
  const { colors, title, description, tagName, cards } = attributes;
  const [titleColor, setTitleColor] = useState();
  const [bgColor, setBg] = useState();

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__(`Title-style`, "b-blocks")}
        initialOpen={false}
      >
        <label>Title-Color</label>

        <ColorPicker
          color={titleColor}
          onChange={(val) => {
            const newCards = [...cards];
            newCards[selected].color = val;
            setAttributes({ cards: newCards });
          }}
        />

        <label>Background-Color</label>
        <ColorPicker
          color={bgColor}
          onChange={(val) => {
            const newCards = [...cards];
            newCards[selected].bg = val;
            setTitleColor(val);
            setAttributes({ cards: newCards });
            setBg(val);
          }}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Title-tag", "b-blocks")}
        initialOpen={false}
      >
        <SelectControl
          value={tagName}
          options={[
            { value: null, label: "Select a Tag", disabled: true },
            { value: "h2", label: "H2" },
            { value: "p", label: "P" },
            { value: "span", label: "Span" },
          ]}
          onChange={(val) => setAttributes({ tagName: val })}
        ></SelectControl>
      </PanelBody>
    </>
  );
};

export default Style;
