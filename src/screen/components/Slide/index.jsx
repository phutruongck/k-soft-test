import React, { useState, useEffect } from "react";
import { SLIDE_LIST } from "./init-data";
import ItemComponent from "./item";

const Slides = React.memo(() => {
  const [tempData, setTempData] = useState({});
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    setTempData(SLIDE_LIST[currentItem]);
  }, [currentItem]);

  const handleOnNext = () => {
    if (currentItem < SLIDE_LIST.length - 1) {
      setCurrentItem(currentItem + 1);
      return;
    }

    return;
  };

  const handleOnPrevious = () => {
    if (currentItem >= 0) {
      setCurrentItem(currentItem - 1);
      return;
    }

    return;
  };

  const handleOnReset = () => {
    setCurrentItem(0);
  };

  return (
    <React.Fragment>
      <div>
        <ItemComponent item={tempData} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <button onClick={handleOnPrevious} disabled={currentItem === 0}>
            Previous
          </button>
        </div>
        <div>
          <button onClick={handleOnReset}>RESET</button>
        </div>
        <div>
          <button
            onClick={handleOnNext}
            disabled={currentItem === SLIDE_LIST.length - 1}
          >
            Next
          </button>
        </div>
      </div>
      <br />
      <div>Trang: {currentItem + 1}</div>
    </React.Fragment>
  );
});

Slides.displayName = "Slides";
export { Slides };
