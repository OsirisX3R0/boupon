import Option from "./Option";
import { SelectBox, CenteredSelectBox } from "../../styles";

const Select = ({ items, itemText, itemValue, centered, ...selectProps }) => {
  let options = items.map((item) => (
    <Option value={item[itemValue || itemText]} text={item[itemText]} />
  ));

  let selectBox = centered ? (
    <CenteredSelectBox {...selectProps}>{options}</CenteredSelectBox>
  ) : (
    <SelectBox {...selectProps}>{options}</SelectBox>
  );

  return selectBox;
};

export default Select;
