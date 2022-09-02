import { useState } from "react";
import Button from "./Button";
import Statistics from "./Statistics";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
    average: 0,
    positive: 0,
  });
  const calculateAverage = () => {
    setFeedback((prev) => {
      return {
        ...prev,
        average: (prev.good - prev.bad) / prev.all,
      };
    });
  };
  const calculatePositive = () => {
    setFeedback((prev) => {
      return {
        ...prev,
        positive: (prev.good / prev.all) * 100,
      };
    });
  };
  const handleGoodFeedback = () => {
    setFeedback((prev) => {
      return {
        ...prev,
        good: prev.good + 1,
        all: prev.all + 1,
      };
    });
  };

  const handleNeutralFeedback = () => {
    setFeedback((prev) => {
      return {
        ...prev,
        neutral: prev.neutral + 1,
        all: prev.all + 1,
      };
    });
  };
  const handleBadFeedback = () => {
    setFeedback((prev) => {
      return {
        ...prev,
        bad: prev.bad + 1,
        all: prev.all + 1,
      };
    });
  };

  return (
    <div>
      <h1>give feedback</h1>

      <Button
        name={"good"}
        onClick={() => {
          handleGoodFeedback();
          calculateAverage();
          calculatePositive();
        }}
      />
      <Button
        name={"neutral"}
        onClick={() => {
          handleNeutralFeedback();
          calculateAverage();
          calculatePositive();
        }}
      />

      <Button
        name={"bad"}
        onClick={() => {
          handleBadFeedback();
          calculateAverage();
          calculatePositive();
        }}
      />

      <Statistics feedback={feedback} />
    </div>
  );
}

export default App;
