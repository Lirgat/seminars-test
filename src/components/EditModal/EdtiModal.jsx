import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import style from "./style.module.css"

const EditModal = ({ seminar, onClose, onSave }) => {
  //заголов и описание семинара в инпут устанавливаются для отображения текущего в placeholder
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //Функции отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...seminar, title, description });
    onClose();
  };

  //Создание портала
  return ReactDOM.createPortal(
    <div className={style.EditModal__overlay}>
      <div className={style.EditModal__content}>
        <h2>Редактирование семинара</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Название:
            <input
              type="text"
              value={title}
              placeholder={seminar.title}
              onChange={(e) => setTitle(e.target.value)}
              className={style.EditModal__input}
            />
          </label>
          <label>
            Описание:
            <textarea
              value={description}
              placeholder={seminar.description}
              onChange={(e) => setDescription(e.target.value)}
              className={style.EditModal__textarea}
            />
          </label>
          <div className={style.EditModal__buttons}>
            <button type="submit" className={style.EditModal__btn_save}>
              Сохранить
            </button>
            <button onClick={onClose} className={style.EditModal__btn_cancel}>
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default EditModal;