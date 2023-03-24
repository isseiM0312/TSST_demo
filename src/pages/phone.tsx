import React, { useEffect, useState } from "react";
import { Camera } from "../components/camera";
import { SecondsToMinutes } from "@/components/timer";
import { Progress } from "@/components/progress";
import { CenterStack } from "@/components/centerStack";
import { NextQuestionButton } from "@/components/nextQuestion";

import { Rectangle } from "@/components/rectangle";
import styles from "../styles/style.module.css";
import { questions } from "../data/question";

const Phone = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  var qIndex = Math.min(Math.floor(count / 2000), 19);

  var isStopping = false;

  return (
    <div className={styles.entire}>
      <div className={styles.container}>
        <Rectangle>
          <h3>{"Q." + questions[qIndex].index}</h3>
          <div style={{ width: 10 }}></div>
          <h3>{questions[qIndex].question}</h3>
        </Rectangle>
        <Progress lefttimes={(count / 100) % 20}></Progress>
            <Camera></Camera>
        <div
          style={{
            position: "relative",
            top: "-50%",
            left: "-50%"
          }}
        >
          <div className={styles.background}>
          </div>
          <div className={styles.foreground}>
            <NextQuestionButton></NextQuestionButton>
          </div>
        </div>

        <SecondsToMinutes totalSeconds={count / 100}></SecondsToMinutes>
      </div>
    </div>
  );
};

export default Phone;
