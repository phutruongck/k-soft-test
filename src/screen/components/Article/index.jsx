import React, { useState } from "react";
import { ARTICLE_LIST } from "./init-data";
import ItemComponent from "./item";

const Article = React.memo(() => {
  const [tempData, setTempData] = useState([...ARTICLE_LIST]);

  const handleOnSort = (type = "vote") => {
    if (type === "vote") {
      let temp = [...ARTICLE_LIST].sort((a, b) => b.upvotes - a.upvotes);

      setTempData(temp);
    } else if (type === "date") {
      let temp = [...ARTICLE_LIST].sort((a, b) => {
        return +new Date(b.date) - +new Date(a.date);
      });

      setTempData(temp);
    } else {
      setTempData([...ARTICLE_LIST]);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div style={{ textAlign: "center" }}>
        {tempData.map((_, index) => {
          return (
            <div key={index}>
              <ItemComponent item={_} />
              <hr style={{ width: "30%" }} />
            </div>
          );
        })}
      </div>
      <div>
        <div>
          <button onClick={(ev) => handleOnSort("vote")}>Most Upvoted</button>
        </div>
        <br />
        <div>
          <button onClick={(ev) => handleOnSort("date")}>Most Recent</button>
        </div>
      </div>
    </div>
  );
});

Article.displayName = "Article";
export { Article };
