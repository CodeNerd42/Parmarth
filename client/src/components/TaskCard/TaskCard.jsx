import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TaskCard.module.css";

const TaskCard = (props) => {
  const navigate = useNavigate();
  return (
    <div className={styles.card} onClick={() => navigate(props.url)}>
      <div className={styles.imageContainer}>
        <img src={props.imgUrl} alt="task-img" className={styles.cardImage} />
      </div>
      <div className={styles["task-name"]}>{props.task}</div>
    </div>
  );
};

export default TaskCard;