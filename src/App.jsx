import React, { useState } from "react";
import ButtonComponent from "./components/ButtonComponent";
import CheckBox from "./components/CheckBox";
import PageWithCheckBox from "./components/PageWithCheckBox";

const pages = [
  {
    pageName: "Page 1",
    pageStatus: false,
    pageId: 1,
  },
  {
    pageName: "Page 2",
    pageStatus: false,
    pageId: 2,
  },
  {
    pageName: "Page 3",
    pageStatus: false,
    pageId: 3,
  },
  {
    pageName: "Page 4",
    pageStatus: false,
    pageId: 4,
  },
];

function App() {
  const [allPages, setAllPages] = useState(false);

  const handleCheckBox = (e) => {
   
  };

  const handleAllPageCheck = (e) => {
    
  };
  return (
    <section
      style={{ display: "flex", justifyContent: "center", marginTop: "5em" }}
    >
      <div className="container">
        <PageWithCheckBox
          pageName={"All pages"}
          checkBoxId={"allPages"}
          handleCheckBox={handleCheckBox}
        />
        <hr />
        <div>
          {pages.map((page) => (
            <PageWithCheckBox
              key={page.pageId}
              pageName={page.pageName}
              checkBoxId={page.pageId}
              handleCheckBox={handleCheckBox}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;
