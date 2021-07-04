export const buttonBackgroundColor = (props) => {
  return props.primary ? "#53a318" : props.secondary ? "#297AA3" : "#f5f5f5";
};

export const buttonTextColor = (props) => {
  return props.primary || props.secondary ? "#f5f5f5" : "#53a318";
};
