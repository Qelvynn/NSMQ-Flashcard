# NSMQ Flashcard Trainer

**nsmq-flashcard-trainer** is a web-based flashcard application built using React to help students prepare for the National Science and Math Quiz (NSMQ). The application allows users to create, view, and manage flashcards, enhancing learning through active recall and spaced repetition.

## Table of Contents

1. [Description]
2. [Features]
3. [Installation]
4. [Usage]
5. [Project Structure]
6. [Contributing]
7. [License]

---

## Description

The NSMQ Flashcard Trainer is designed to assist students in their preparation for the National Science and Math Quiz by providing an easy-to-use platform to create and study flashcards. Users can input questions and answers related to various topics and practice them to reinforce their knowledge. The app supports categorization and allows for a focused study on specific subjects or difficulty levels.

## Features

- **Add Flashcards**: Create flashcards by entering a question, answer, and category.
- **View Flashcards**: Browse through created flashcards, with the ability to reveal answers.
- **Edit Flashcards**: Modify existing flashcards to update the content.
- **Delete Flashcards**: Remove flashcards that are no longer needed.


---

## Installation

To run the NSMQ Flashcard Trainer on your local machine, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (Comes with Node.js)

### Steps

1. **Clone the Repository**:
    
    ```
    git clone https://github.com/yourusername/nsmq-flashcard-trainer.git
    
    ```
    
2. **Navigate to the Project Directory**:

    
    ```jsx
    cd nsmq-flashcard-trainer
    ```
    
3. **Install Dependencies**:
Use npm to install the required dependencies:

    
    ```jsx
    npm install
    ```
    

1. **Run the Development Server**:
Start the React development server:

    
    ```jsx
    npm start
    ```
    

1. **Open the Application**:
Once the server is running, open your browser and navigate to:

```jsx
http://localhost:3000
```

## Usage

Once the application is running, you can begin creating and managing flashcards:

1. **Add a Flashcard**:
    - Click on the "Add Flashcard" button located below the main headings.
    - Input the question, answer, and optional category (e.g., Math, Chemistry).
    - Save the flashcard to add it to your collection.
2. **View Flashcards**:
    - Browse through the list of flashcards.
    - Click on a flashcard to reveal the answer and review the information.
3. **Edit Flashcards**:
    - Select a flashcard to edit its question or answer.
    - Save changes to update the flashcard.
4. **Delete Flashcards**:
    - Click the delete button on a flashcard to remove it from the collection.

### Example Workflow

- Start by adding a flashcard with a question like "What is the formula for acceleration?" and an answer like "Acceleration = Change in Velocity / Time."
- Review the card by revealing the answer, then edit it if necessary.

---

## Project Structure

Here's a brief overview of the project structure for better understanding:

```

nsmq-flashcard-trainer/
│
├── public/                # Public files for the app (HTML, icons)
│   └── index.html         # Main HTML file
│
├── src/                   # Source code for the app
│   ├── styles/            # CSS and styling files
│   ├── App.js             # Main application component
│   └── index.js           # Entry point for React
│
├── package.json           # Project metadata and dependencies
└── README.md              # This README file
```

## Contributing

Contributions to **NSMQ Flashcard Trainer** are welcome! Whether it's bug reports, feature suggestions, or improvements to code or documentation, your help is greatly appreciated.

### Steps for Contributing

1. Fork the repository by clicking the "Fork" button on GitHub.
2. Clone the forked repository to your local machine:
    
    ```jsx
    git clone https://github.com/yourusername/nsmq-flashcard-trainer.git
    ```
    
3. Create a new branch for your feature or bug fix:

```jsx
git checkout -b feature-or-bugfix-name
```

1. Make your changes and commit them:

```jsx
git commit -m "Description of changes"
```

1. Push the changes to your fork:

```jsx
git push origin feature-or-bugfix-name
```

1. Open a Pull Request on the original repository.

Please make sure to follow the code style and include relevant tests where applicable.

---

## License

This project is licensed under the **MIT License**. You are free to use, modify, and distribute this project under the conditions of the MIT License. See the LICENSE file for details.

---

## Acknowledgements

This project was inspired by the need to provide a useful tool for students preparing for the NSMQ. Special thanks to contributors and the React community for their excellent resources and support.
