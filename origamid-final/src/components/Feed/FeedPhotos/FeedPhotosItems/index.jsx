import React from 'react'
import styles from "./FeedPhotosItems.module.css"
export default function FeedPhotosItems({photo}) {
  return (
    <li className={styles.photo}>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acesso}</span>
    </li>
  )
}
