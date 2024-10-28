import React, { useState } from 'react';

const Flashcard = ({ question, answer, onEdit, onDelete }) => {
  // State to track if the answer is visible
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const toggleAnswerVisibility = () => {
    setIsAnswerVisible((prev) => !prev); // Toggle the visibility state
  };

  return (
    <div className="card">
      <p className="question-div">{question}</p>
      {isAnswerVisible && <p className="answer-div">{answer}</p>} {/* Conditionally render the answer */}
      <button className="show-hide-btn" onClick={toggleAnswerVisibility}>
        {isAnswerVisible ? 'Hide' : 'Show'} {/* Toggle button label */}
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
