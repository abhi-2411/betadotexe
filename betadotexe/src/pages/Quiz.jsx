import React from 'react';
import '../pages-css/Quiz.css';

function Quiz() {
  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <h2 className="subject-title">DATA STRUCTURES AND ALGORITHMS</h2>
        <h3 className="unit-title">Unit 1: Linked Lists</h3>

        <div className="question-box">
          <p className="question-text">
            1. What is the time complexity of inserting a node at the beginning of a singly linked list?
          </p>
          <div className="options">
            <label className="option">
              <input type="radio" name="question1" value="A" />
              <span className="option-label">A. O(1)</span>
            </label>
            <label className="option">
              <input type="radio" name="question1" value="B" />
              <span className="option-label">B. O(n)</span>
            </label>
            <label className="option">
              <input type="radio" name="question1" value="C" />
              <span className="option-label">C. O(log n)</span>
            </label>
            <label className="option">
              <input type="radio" name="question1" value="D" />
              <span className="option-label">D. O(n²)</span>
            </label>
          </div>
        </div>

        <div className="answer-explanation">
          <p className="correct-answer">Correct Answer: A. O(1)</p>
          <p className="explanation">
            Explanation: Inserting at the beginning only requires updating the head pointer to the new node, which is a constant-time operation O(1).
          </p>
        </div>
      </div>
    </div>
  );
}

export default Quiz;