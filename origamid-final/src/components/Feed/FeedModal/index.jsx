import React from "react";
import styles from "./FeedModal.module.css";
import useFetch from "../../../hooks/useFetch";
import Error from "../../Error";
import PhotoContent from "../../Photo/PhotoContent";

export default function FeedModal({ photo, setModalPhoto }) {
  const { data, error, loading, request } = useFetch();

  useFetch(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading &&  <p>Carregando...</p> }
      {data && <PhotoContent data={data} />}
    </div>
  );
}
