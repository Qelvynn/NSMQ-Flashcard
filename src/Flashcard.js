import React from 'react';

const Flashcard = ({ question, answer, onToggle, onEdit, onDelete, showAnswer }) => {
  return (
    <div className="card">
      <p className="question-div">{question}</p>
      {showAnswer && <p className="answer-div">{answer}</p>}
      <button className="show-hide-btn" onClick={onToggle}>
        {showAnswer ? 'Hide' : 'Show'}
      </button>
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
