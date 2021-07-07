export const buttonBackgroundColor = (props) => {
  return props.primary ? "#53a318" : props.secondary ? "#297AA3" : "#f5f5f5";
};

export const buttonTextColor = (props) => {
  return props.primary || props.secondary ? "#f5f5f5" : "#53a318";
};

export const buttonMargin = (props) => {
  let top = props.marginY || props.topMargin || 0;
  let right = props.marginX || props.rightMargin || 0;
  let bottom = props.marginY || props.bottomMargin || 0;
  let left = props.marginX || props.leftMargin || 0;
  return `${top} ${right} ${bottom} ${left}`;
};
