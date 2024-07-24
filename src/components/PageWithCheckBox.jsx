import React from "react";
import CheckBox from "./CheckBox";
import { useCheckboxContext } from "../CheckboxContext";

function PageWithCheckBox({ pageName, checkBoxId }) {
  // Access state and dispatch function from context
  const { state, dispatch } = useCheckboxContext();

  const isAllPages = checkBoxId === "allPages";
  const checked = isAllPages ? state.allPages : false;

  // Handle checkbox change for "All pages"
  const handleCheckBox = () => {
    if (isAllPages) {
      dispatch({ type: "TOGGLE_ALL_PAGES" });
    }
  };

  // Render individual page checkboxes
  if (checkBoxId === "pages") {
    return (
      <>
        {state.pages.map((page) => (
          <div key={page.pageId}>
            <label className="page-box checkbox-lable" htmlFor={page.pageId}>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {page.pageName}
              </span>
              <CheckBox
                id={page.pageId}
                checked={page.pageStatus}
                handleCheckBox={() =>
                  dispatch({ type: "TOGGLE_PAGE", payload: page.pageId })
                }
              />
            </label>
          </div>
        ))}
      </>
    );
  }
  // Render "All pages" checkbox
  return (
    <div>
      <label className="page-box checkbox-lable" htmlFor={checkBoxId}>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {pageName}
        </span>
        <CheckBox
          id={checkBoxId}
          handleCheckBox={handleCheckBox}
          checked={checked}
        />
      </label>
    </div>
  );
}

export default PageWithCheckBox;
