import React, { useState } from "react";
import CheckBox from "./CheckBox";

function PageWithCheckBox({ pageName, checkBoxId, handleCheckBox }) {
 

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

        <CheckBox id={checkBoxId} handleCheckBox={handleCheckBox} />
      </label>
    </div>
  );
}

export default PageWithCheckBox;
