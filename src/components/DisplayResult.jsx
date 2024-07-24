import React from "react";
import { useCheckboxContext } from "../CheckboxContext";

function DisplayResult() {
  const { state } = useCheckboxContext();

  return (
    <div style={{ marginTop: 30, display: "flex", gap: 50 }}>
      <div>
        <div style={{ textAlign: "center" }}>
          <h5>
            Total Selected pages :{" "}
            {state.pages.filter((page) => page.pageStatus).length}
          </h5>
          {state.pages.filter((page) => page.pageStatus).length > 0 && (
            <span>Selected pages are </span>
          )}
        </div>
        <ul>
          {state.pages
            .filter((page) => page.pageStatus)
            .map((page) => {
              return <li key={page.pageId}>{page.pageName}</li>;
            })}
        </ul>
      </div>
      {/* Vertical line */}
      <hr
        style={{
          marginTop: 5,
          marginBottom: 5,
          border: "0.7px solid rgba(205, 205, 205, 1)",
        }}
      />
      <div>
        <div style={{ textAlign: "center" }}>
          <h5>
            Total Unselected pages :{" "}
            {state.pages.filter((page) => !page.pageStatus).length}
          </h5>
          {state.pages.filter((page) => !page.pageStatus).length > 0 && (
            <span>Unselected pages are </span>
          )}
        </div>
        <ul>
          {state.pages
            .filter((page) => !page.pageStatus)
            .map((page) => {
              return <li key={page.pageId}>{page.pageName}</li>;
            })}
        </ul>
      </div>
    </div>
  );
}

export default DisplayResult;
