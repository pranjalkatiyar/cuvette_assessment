import "./middlecontainer.css";
const QuickStats = ({ item }) => {
  return (
    <>
      <div className="middleContainer_middlecolumn">
        <div style={{ marginRight: "1rem" }}>
          <div className="ellipseDiv">
            <img src={`${item.src1}`} alt={`${item.alt1}`} />
          </div>
          <img className="images" src={`${item.src2}`} alt={`${item.alt2}`} />
        </div>
        <div className="headingValue">
          <div>
            <span style={{ fontWeight: "bold", fontSize: "20px" }}>
              {item.numbers}
            </span>
          </div>
          <div>
            <span style={{ fontSize: "12px", textTransform: "uppercase" }}>
              {item.heading}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickStats;
