import React, {useState} from 'react';
import style from "./style.module.css"
import EditModal from '../EditModal/EdtiModal';

const SeminarCard = ({ seminar, onDelete, onEdit }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = (updatedSeminar) => {
    onEdit(updatedSeminar); // Передаем обновленные данные родителю
    setIsModalOpen(false);
  };

  return (
    <div className={style.SeminarCard}>
      <img src={seminar.photo} alt={seminar.title} className={style.SeminarCard__img} />
      <h3 className={style.SeminarCard__h3}>{seminar.title}</h3>
      <p className={style.SeminarCard__p}>{seminar.description}</p>
      <div className={style.SeminarCard__data}>
        <span className={style.SeminarCard__data_date}>Дата: {seminar.date}</span><br />
        <span className={style.SeminarCard__data_time}>Время: {seminar.time}</span>
      </div>
      <div className={style.SeminarCard__actions}>
        <button className={style.SeminarCard__btn} onClick={handleEditClick}>
          Редактировать
        </button>
        <button className={style.SeminarCard__btn} onClick={() => onDelete(seminar.id)}>
          Удалить
        </button>
      </div>
      {isModalOpen && (
        <EditModal
          seminar={seminar}
          onClose={handleCloseModal}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default SeminarCard;