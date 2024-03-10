import React from "react";
function getRandomColor() {
  var letters = "123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const Color = (WrappedComponents) => {
  const colorRandom = getRandomColor();
  return (props) => (
    <div style={{ color: colorRandom }}>
      <WrappedComponents {...props} />
    </div>
  );
};
export default Color;
