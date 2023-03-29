import React, { useEffect, useRef, useState } from "react";
import { Camera } from "../components/camera";
import { SecondsToMinutes } from "@/components/timer";
import { Progress } from "@/components/progress";
import { NextQuestionButton } from "@/components/nextQuestion";
import { BreakTime } from "@/components/breakTime";

import { Rectangle } from "@/components/rectangle";
import styles from "../styles/style.module.css";
import { questions } from "../data/question";

const Phone = () => {
  const [start, setStart] = useState(false);
  const [count, setCount] = useState(0);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
   if(start) {timerRef.current = setInterval(() => {
      setCount((prevCount) => {
        return prevCount + 1
      } );
    }, 10);

    return () => clearInterval(timerRef.current!);}
  }, [start]);


  var qIndex = Math.min(Math.floor(count / 3000), 19);


  return (
    <div className={styles.entire}>
      <div className={styles.container}>
        {(start && count%3000 <= 2000 ) && <Rectangle>
          <h3>{"Q." + questions[qIndex].index}</h3>
          <div style={{ width: 10 }}></div>
          <h4>{questions[qIndex].question}</h4>
        </Rectangle>}
       {(!start || count%3000 > 2000 ) && <Rectangle>
          <></>
          <h3>{"問題がここに表示されます"}</h3>
        </Rectangle>}
        <Progress lefttimes={Math.min((count / 100) % 30,20)}></Progress>
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
          { !start && <div className={styles.foreground} onClick = {
            () => {
              setStart(true);
            }
          }>
            <NextQuestionButton></NextQuestionButton>
          </div>}
          { count%3000 > 2000  && <div className={styles.foreground} onClick = {
            () => {
            }
          }>
            <BreakTime breaktime={Math.floor(31 - (count%3000)/100)}></BreakTime>
          </div>}

        </div>

        <SecondsToMinutes totalSeconds={count / 100}></SecondsToMinutes>
      </div>
    </div>
  );
};

export default Phone;
