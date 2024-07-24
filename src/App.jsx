import React, { useEffect, useState } from "react";
import ButtonComponent from "./components/ButtonComponent";
import PageWithCheckBox from "./components/PageWithCheckBox";
import { CheckboxProvider, useCheckboxContext } from "./CheckboxContext";
import DisplayResult from "./components/DisplayResult";

function App() {
  // Access the checkbox state from context
  const { state } = useCheckboxContext();
  const [showResult, setshowResult] = useState(false);

  useEffect(() => {
    setshowResult(false);
  }, [state]);

  // Handle button click
  const handleClick = () => {
    setshowResult(true);
    // Log selected pages to console
    console.log(
      "Selected pages:",
      state.pages.filter((page) => page.pageStatus)
    );
  };

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "5em",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="container">
        {/* "All pages" checkbox */}
        <PageWithCheckBox pageName={"All pages"} checkBoxId={"allPages"} />
        <hr className="line" />
        <div>
          {/* Individual page checkboxes */}
          <PageWithCheckBox checkBoxId={"pages"} />
        </div>

        <hr className="line" />
        <div style={{ padding: 10 }}>
          <ButtonComponent handleClick={handleClick} />
        </div>
      </div>
      <div>{showResult && <DisplayResult />}</div>
    </section>
  );
}

export default App;
