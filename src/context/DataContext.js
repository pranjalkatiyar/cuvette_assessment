import React, { useState, createContext, useContext } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [rank, setRank] = useState(1280);
  const [percentile, setPercentile] = useState(37);
  const [correct, setCorrect] = useState(7);
  const [totalQuestion, setTotalQuestion] = useState(15);

  return (
    <DataContext.Provider
      value={{
        rank,
        setCorrect,
        setPercentile,
        setRank,
        correct,
        percentile,
        setTotalQuestion,
        totalQuestion
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
