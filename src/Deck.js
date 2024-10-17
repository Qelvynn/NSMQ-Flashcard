import React from "react";
import Flashcard from "./component/Flashcard";

function Deck({ flashcards, onEdit, onDelete }) {
  return (
    <div id="card-con">
      <div className="card-list-container">
        {flashcards.map((flashcard, index) => (
          <Flashcard
            key={index}
            flashcard={flashcard}
            onDelete={() => onDelete(index)}
            onEdit={(newQuestion, newAnswer) =>
              onEdit(index, newQuestion, newAnswer)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Deck;
