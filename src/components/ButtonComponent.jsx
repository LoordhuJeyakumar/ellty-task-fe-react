function ButtonComponent({ handleClick }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button className="custom-btn" onClick={handleClick}>
        Done
      </button>
    </div>
  );
}

export default ButtonComponent;
