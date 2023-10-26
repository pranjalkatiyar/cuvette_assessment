import React, { useContext, useState } from "react";
import styles from "./ThreePartLayout.module.css";
import Navigation from "../components/Navigation/Navigation";
import Syllabus from "../components/Syllabus/Syllabus";
import Modal from "../components/Modal/Modal";
import LineChart from "../charts/LineChart";
import DoughnutChart from "../charts/DoughNutChart";
import LeftContainer from "./LeftContainer";
import MiddleContainer from "./MiddleContainer/MiddleContainer";
import syllabus_details from "../constants/syllabus";
import QuickStats from "./MiddleContainer/MiddleContainer";
import { DataContext } from "../context/DataContext";
const ThreePartLayout = () => {
  const [modal, setModal] = useState(false);

  const {
    rank,
    setRank,
    setCorrect,
    setPercentile,
    correct,
    percentile,
    totalQuestion
  } = useContext(DataContext);

  const quickStats = [
    {
      src1: "./Ellipse 125.png",
      alt1: "ellipse",
      src2: "./cup.png",
      alt2: "cup",
      heading: "your rank",
      numbers: rank
    },
    {
      src1: "./Ellipse 125.png",
      alt1: "ellipse",
      src2: "./notes.png",
      alt2: "percentile",
      heading: "percentile",
      numbers: `${percentile}`
    },
    {
      src1: "./Ellipse 125.png",
      alt1: "ellipse",
      src2: "./correct.png",
      alt2: "correct",
      heading: "correct answer",
      numbers: `${correct}/${totalQuestion}`
    }
  ];

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className={styles.container}>
      <LeftContainer />
      {/* middle */}
      <div className={styles.middle}>
        <div className={styles.toprow}>
          <div
            className={styles.topcolumn}
            style={{ textAlign: "left", margin: "0.75rem" }}
          >
            <span>Skill Test</span>
          </div>
        </div>
        <div
          className={`${styles.middleSection} ${styles.item} ${styles.itemTop}`}
        >
          {/* top */}
          <div className={styles.middle_section}>
            <div className={styles.two_rows}>
              <div className={styles.toprow}>
                <div className={styles.topcolumn}>
                  <div>
                    <img
                      src="./html5.svg"
                      style={{ width: "50px", height: "60px" }}
                      alt="images"
                    />
                  </div>
                  <div>
                    {/* heading */}
                    <div style={{ fontWeight: "bold" }}>
                      Hypertext Markup Language
                    </div>
                    {/* subheading */}
                    <div
                      style={{
                        display: "flex",
                        fontSize: "12px",
                        color: "#566474"
                      }}
                    >
                      <div>
                        <p>Questions:08 |</p>{" "}
                      </div>
                      <div>
                        <p>Duration:15min | </p>
                      </div>
                      <div>
                        <p>Submitted on 5 June 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.topcolumn}>
                  <button
                    className={styles.updatebutton}
                    onClick={openModal}
                    name="myButton"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* middle */}
        <div
          className={`${styles.middleSection} ${styles.item} ${styles.itemMiddle}`}
        >
          <div className={styles.middle_container} style={{ padding: "1rem" }}>
            <div className={styles.middlerow}>
              <div className={styles.middleHeading}>
                <span style={{ fontweight: "bold" }}>Quick Statistics</span>
              </div>
            </div>
            <div className={styles.middlerow}>
              {quickStats.map((item) => (
                <QuickStats item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* bottom */}
        <div
          className={`${styles.middleSection} ${styles.item} ${styles.itemLast}`}
          style={{ padding: "1rem" }}
        >
          {/* comparison graph */}
          {/* first section */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "2rem",
              textAlign: "left"
            }}
          >
            <div style={{ width: "60%" }}>
              <strong>Comparison graph</strong>
              <p>
                <strong style={{ color: "#566474" }}>
                  {" "}
                  You scored 37% percentile{" "}
                </strong>
                which is lower than the average percentile 72% of all the
                engineers who took this assessment
              </p>
            </div>

            <div>
              <div style={{ position: "relative" }}>
                <img src="./Ellipse 125.png" alt="ellipse" />
              </div>
              <img
                style={{
                  position: "relative",
                  top: "-2.50rem",
                  left: "0.92rem"
                }}
                src="./trending.png"
                alt="cup"
              />
            </div>
          </div>

          {/* graph section  */}
          {/* second section */}
          <div>
            <LineChart />
          </div>
        </div>
      </div>
      {/* right */}
      <div className={styles.right}>
        <div
          className={styles.rightSection}
          style={{ padding: "          4rem 0 2rem 2rem" }}
        >
          <div style={{ fontWeight: "bold", textAlign: "left" }}>
            <span>Syllabus wise Analysis</span>
          </div>
          <div>
            {syllabus_details.map((item) => {
              return (
                <Syllabus title={item.name} percentage={item.percentage} />
              );
            })}
          </div>
        </div>

        {/* right */}
        <div
          className={styles.rightSectionGraph}
          style={{ display: "flex", flexDirection: "column", padding: "1rem" }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>Question analysis</strong>
            <span style={{ fontWeight: "bold", color: "#438AF6" }}>
              {correct}/{totalQuestion}
            </span>
          </div>
          <div>
            <p>
              <strong style={{ color: "#566474" }}>
                You scored {correct} question correct out of {totalQuestion}.
              </strong>{" "}
              However it still needs some improvements
            </p>
          </div>
          <div
            style={{
              padding: "2rem",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <DoughnutChart />
          </div>
        </div>
      </div>
      <Modal modal={modal} closeModal={closeModal} />
    </div>
  );
};

export default ThreePartLayout;
