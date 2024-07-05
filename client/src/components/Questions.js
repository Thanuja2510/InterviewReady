import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getQuestions, updateUserProgress } from '../firestore';
import { getCurrentUser } from '../auth';

const Questions = () => {
  const { subject } = useParams();
  const [questions, setQuestions] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const questionsData = await getQuestions(subject);
        setQuestions(questionsData);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
    fetchQuestions();
  }, [subject]);   

  const handleShowExplanation = (index) => {
    const explanationElement = document.getElementById(`explanation-${index}`);
    explanationElement.style.display = explanationElement.style.display === 'none' ? 'block' : 'none';
  };

  const handleMarkComplete = async (index) => {
    const user = getCurrentUser();
    if (user) {
      const newProgress = progress + 1;
      setProgress(newProgress);
      await updateUserProgress(user.uid, { [subject]: newProgress });
    }
  };

  return (
    <div>
      <h1>{subject.toUpperCase()}</h1>
      {questions.map((q, index) => (
        <div key={index}>
          <h3>{q.question}</h3>
          <p>{q.answer}</p>
          <button onClick={() => handleShowExplanation(index)}>Explanation</button>
          <div id={`explanation-${index}`} style={{ display: 'none' }}>{q.explanation}</div>
          <button onClick={() => handleMarkComplete(index)}>Mark as Complete</button>
        </div>
      ))}
    </div>
  );
};

export default Questions;
