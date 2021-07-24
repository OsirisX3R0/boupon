import { Select, MenuItem } from "@material-ui/core";

import Option from "./Option";
import { SelectBox, CenteredSelectBox } from "../../../styles";

const SimpleSelect = ({
  items,
  itemText,
  itemValue,
  centered,
  ...selectProps
}) => {
  const splitValue = () => {
    let value = itemValue || itemText;
    return value.split(".");
  };

  const splitText = () => itemText.split(".");

  let options =
    items && items.length
      ? items.map((item, i) => {
          let value = item;
          let text = item;
          let valueProps = splitValue();
          let textProps = splitText();
          valueProps.forEach((p) => {
            value = value[p];
          });
          textProps.forEach((p) => {
            text = text[p];
          });

          return items ? (
            <MenuItem value={value} key={i}>
              {text}
            </MenuItem>
          ) : null;
        })
      : null;

  let selectBox = !options ? null : centered ? (
    <Select {...selectProps}>{options}</Select>
  ) : (
    <Select {...selectProps}>{options}</Select>
  );

  return selectBox;
};

export default SimpleSelect;
