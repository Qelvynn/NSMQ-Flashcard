import React, { useState } from 'react';
import Flashcard from './Flashcard';
import './App.css';

const App = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [showAddFlashcard, setShowAddFlashcard] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [error, setError] = useState(''); // State to manage error message

  const handleAddFlashcard = () => {
    // Clear previous error message
    setError('');

    // Validate inputs
    if (!question || !answer) {
      setError('Input fields cannot be empty!'); // Set error message if inputs are empty
      return; // Stop execution if validation fails
    }

    if (editIndex !== null) {
      const updatedFlashcards = flashcards.map((card, index) => {
        if (index === editIndex) {
          return { question, answer, showAnswer: false }; // Reset showAnswer on edit
        }
        return card;
      });
      setFlashcards(updatedFlashcards);
      setEditIndex(null);
    } else {
      setFlashcards([...flashcards, { question, answer, showAnswer: false }]);
    }
    setQuestion('');
    setAnswer('');
    setShowAddFlashcard(false);
  };

  const handleEditFlashcard = (index) => {
    setQuestion(flashcards[index].question);
    setAnswer(flashcards[index].answer);
    setEditIndex(index);
    setShowAddFlashcard(true);
  };

  const handleDeleteFlashcard = (index) => {
    const updatedFlashcards = flashcards.filter((_, i) => i !== index);
    setFlashcards(updatedFlashcards);
  };

  const toggleShowAnswer = (index) => {
    const newCards = [...flashcards];
    newCards[index].showAnswer = !newCards[index].showAnswer;
    setFlashcards(newCards);
  };

  return (
    <div className="container">
      <div className="center-content">
        <h1>NSMQ Flashcard Trainer</h1>
        <h2>The Leading Best Tool for NSMQ Prep</h2>
      </div>

      <div className="add-flashcard-card">
        <h3>“Education is the passport to the future, it belongs to those who prepare for it today.” —Malcolm X.</h3>
        <div className="add-flashcard-con">
          <button onClick={() => setShowAddFlashcard(true)}>Add Flashcard</button>
        </div>
      </div>

      <div className="extended-background"></div>

      <div id="card-con">
        <div className="card-list-container">
          {flashcards.map((card, index) => (
            <Flashcard
              key={index}
              question={card.question}
              answer={card.answer}
              onToggle={() => toggleShowAnswer(index)}
              onEdit={() => handleEditFlashcard(index)}
              onDelete={() => handleDeleteFlashcard(index)}
              showAnswer={card.showAnswer} // Pass showAnswer to Flashcard
            />
          ))}
        </div>
      </div>

      {showAddFlashcard && (
        <div className="question-container">
          <h2>{editIndex !== null ? 'Edit Flashcard' : 'Add Flashcard'}</h2>
          <div className="wrapper">
            <div className="error-con">
              {error && <span className="error">{error}</span>} {/* Display error message */}
            </div>
            <i className="fa-solid fa-xmark" onClick={() => setShowAddFlashcard(false)}></i>
          </div>

          <label htmlFor="question">Question:</label>
          <textarea
            className="input"
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type the question here..."
            rows="2"
          ></textarea>
          <label htmlFor="answer">Answer:</label>
          <textarea
            className="input"
            id="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            rows="4"
            placeholder="Type the answer here..."
          ></textarea>
          <button id="save-btn" onClick={handleAddFlashcard}>Save</button>
        </div>
      )}
    </div>
  );
};

export default App;
