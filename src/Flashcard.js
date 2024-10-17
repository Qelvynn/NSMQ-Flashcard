import React from 'react';

const Flashcard = ({ question, answer, onToggle, onEdit, onDelete }) => {
  return (
    <div className="card">
      <p className="question-div">{question}</p>
      <p className="answer-div hide">{answer}</p>
      <a className="show-hide-btn" onClick={onToggle}>
        Show/Hide
      </a>
      <div className="buttons-con">
        <button className="edit" onClick={onEdit}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button className="delete" onClick={onDelete}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
};

export default Flashcard;
