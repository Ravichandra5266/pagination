import React, { useState } from "react";

import "./App.css";

function App() {
  const [data] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  ]);
  const [pagelimit] = useState(5);
  const [currentpage, setcurrentpage] = useState(0);
  const [showcurrentpage, setshowcurrentpage] = useState(
    data.slice(currentpage, pagelimit)
  );
  const [totalpages] = useState(Math.ceil(data.length / pagelimit));

  const onclickPage = (index) => {
    setcurrentpage(index);
    let changepage = data.slice(index * pagelimit, pagelimit * (index + 1));
    setshowcurrentpage(changepage);
    console.log(index);
  };

  return (
    <div className="container">
      {showcurrentpage.map((each) => (
        <p key={each}> {each}</p>
      ))}
      <div className="button-container ">
        <button onClick={() => onclickPage(0)} disabled={currentpage === 0}>
          first
        </button>
        <button
          onClick={() => onclickPage(currentpage - 1)}
          disabled={currentpage === 0}
        >
          prev
        </button>
        {Array(totalpages)
          .fill(null)
          .map((each, index) => (
            <button
              className={currentpage === index ? "active" : ""}
              onClick={() => onclickPage(index)}
              key={index}
            >
              {index + 1}
            </button>
          ))}
        <button
          onClick={() => onclickPage(currentpage + 1)}
          disabled={currentpage === totalpages - 1}
        >
          next
        </button>
        <button
          onClick={() => onclickPage(totalpages - 1)}
          disabled={currentpage === totalpages - 1}
        >
          last
        </button>
      </div>
    </div>
  );
}

export default App;
