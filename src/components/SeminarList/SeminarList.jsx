import React, { useEffect, useState } from 'react';
import SeminarCard from '../SeminarCard/SeminarCard';
import style from "./style.module.css"

const SeminarList = () => {
  const [seminars, setSeminars] = useState([]);

  // Запрос при первой отрисовке
  useEffect(() => {
    const fetching = async () => {
      try {
        const response = await fetch("http://localhost:3001/seminars")
        if(!response.ok){
          throw new Error()
        }
        const data = await response.json()
        setSeminars(data)
      } catch(error) {
        console.error('Ошибка при удалении семинара:', error.message);
      }
    }

    fetching()
  }, []);

  //Запрос для удаления элемента при нажатии на соответсвующую кнопку
  const handleDelete = async (seminarId) => {
    try {
      await fetch(`http://localhost:3001/seminars/${seminarId}`, {
        method: 'DELETE',
      });

      setSeminars((prevSeminars) =>
        prevSeminars.filter((seminar) => seminar.id !== seminarId)
      );
    } catch (error) {
      console.error('Ошибка при удалении семинара:', error.message);
    }
  }

  //Запрос для редактирования при нажатии на соответсвующую кнопку
  const handleEdit = async (updatedSeminar) => {
    await fetch(`http://localhost:3001/seminars/${updatedSeminar.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedSeminar),
    });
    setSeminars((prevSeminars) =>
      prevSeminars.map((s) => (s.id === updatedSeminar.id ? updatedSeminar : s))
    );
  };

  return (
    <div className={style.SeminarList}>
      {seminars.map((seminar) => (
        <SeminarCard key={seminar.id} seminar={seminar} onDelete={handleDelete} onEdit={handleEdit} />
      ))}
    </div>
  );
};

export default SeminarList;