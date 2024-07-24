import React from "react";

function CheckBox({ id, handleCheckBox, checked }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        type="checkbox"
        name="status"
        id={id}
        className="custom-checkbox"
        onChange={handleCheckBox}
        checked={checked}
      />
    </div>
  );
}

export default CheckBox;