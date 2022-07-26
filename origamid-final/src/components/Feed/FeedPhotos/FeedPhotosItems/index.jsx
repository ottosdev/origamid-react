import React from "react";
import styles from "./FeedPhotosItems.module.css";
export default function FeedPhotosItems({ photo, setModalPhoto }) {
  function handleClick() {
    setModalPhoto(photo);
  }
  return (
    <li className={styles.photo} onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acesso}</span>
    </li>
  );
}
