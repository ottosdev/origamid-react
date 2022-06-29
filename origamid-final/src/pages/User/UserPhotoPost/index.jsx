import React, { useEffect, useState } from "react";
import styles from "./UserPhoto.module.css";
import Input from "../../../components/Forms/Input";
import Button from "../../../components/Forms/Button";
import useForm from "../../../hooks/useForm";
import useFetch from "../../../hooks/useFetch";
import { PHOTO_POST } from "../../../api";
import { useNavigate } from "react-router-dom";
export default function UserPhotoPost() {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();
    data.append("img", img.raw);
    data.append("nome", nome.value);
    data.append("peso", peso.value);
    data.append("idade", idade.value);

    console.log(data);
    const token = localStorage.getItem("token");
    const { url, options } = PHOTO_POST(data, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      raw: target.files[0],
      preview: URL.createObjectURL(target.files[0]),
    });
  }

  console.log(img.preview);
  return (
    <section className={styles.photoPost}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="text" name="peso" {...peso} />
        <Input label="Idade" type="text" name="Idade" {...idade} />
        <input type="file" name="img" id="img" onChange={handleImgChange} />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url("${img.preview} ")` }}
          ></div>
        )}
      </div>
    </section>
  );
}
