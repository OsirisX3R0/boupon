import Option from "./Option";
import { SelectBox, CenteredSelectBox } from "../../../styles";

const Select = ({ items, itemText, itemValue, centered, ...selectProps }) => {
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

          return items ? <Option value={value} text={text} key={i} /> : null;
        })
      : null;

  let selectBox = !options ? null : centered ? (
    <CenteredSelectBox {...selectProps}>{options}</CenteredSelectBox>
  ) : (
    <SelectBox {...selectProps}>{options}</SelectBox>
  );

  return selectBox;
};

export default Select;
