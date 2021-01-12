import React from "react";

const Item = React.memo(({ item, ...rest }) => {
  const { title, text } = item;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
});

export default Item;
