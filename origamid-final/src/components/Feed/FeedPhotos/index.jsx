import React, { useEffect } from "react";
import FeedPhotosItems from "./FeedPhotosItems";
import useFetch from "../../../hooks/useFetch";
import { PHOTOS_GET } from "../../../api";
import Error from "../../Error";
import styles from "./FeedPhotos.module.css";

export default function FeedPhotos({ setModalPhoto }) {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
      console.log(json);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <p>...carregando</p>;
  if (data)
    return (
      <ul className={styles.feed}>
        {data.map((item) => (
          <FeedPhotosItems
            photo={item}
            key={item.id}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
}
