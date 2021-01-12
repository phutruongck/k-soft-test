import React from "react";

const Item = React.memo(({ item, ...rest }) => {
  const { title, upvotes, date } = item;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{title}</h1>
      <p>VOTE: {upvotes}</p>
      <span>DATE: {date}</span>
    </div>
  );
});

export default Item;
