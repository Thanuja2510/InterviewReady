// firestore.js
import { db } from './firebaseConfig';
import { collection, getDocs, addDoc, doc, getDoc, setDoc } from 'firebase/firestore';

// Add a new question
export const addQuestions = async (subject, questions) => {
  const questionsRef = collection(db, subject);
  
  for (let question of questions) {
    try {
      await addDoc(questionsRef, question);
      console.log('Question added:', question);
    } catch (error) {
      console.error('Error adding question:', error);
    }
  }
};

// Example usage
const questions = [
  { question: 'What is OOP?', answer: 'Object-Oriented Programming (OOP) is a programming paradigm...', explanation: 'Explanation goes here...' },
  { question: 'What is a database?', answer: 'A database is...', explanation: 'Explanation goes here...' },
  // Add more questions as needed
];

// Uncomment the following line to add questions
// addQuestions('oops', questions);

// Function to get questions for a subject
export const getQuestions = async (subject) => {
  const questionsRef = collection(db, subject);
  const querySnapshot = await getDocs(questionsRef);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Get user progress
export const getUserProgress = async (userId) => {
  const userProgressRef = doc(db, 'progress', userId);
  const docSnapshot = await getDoc(userProgressRef);
  if (docSnapshot.exists()) {
    return docSnapshot.data();
  } else {
    console.log('No such document!');
    return null;
  }
};

// Update user progress
export const updateUserProgress = async (userId, progress) => {
  const userProgressRef = doc(db, 'progress', userId);
  try {
    await setDoc(userProgressRef, progress);
    console.log('User progress updated');
  } catch (error) {
    console.error('Error updating user progress:', error);
  }
};
// Add sample progress data
export const addSampleProgressData = async (userId, progressData) => {
  const userProgressRef = doc(db, 'progress', userId);
  try {
    await setDoc(userProgressRef, progressData);
    console.log('Sample progress data added:', progressData);
  } catch (error) {
    console.error('Error adding sample progress data:', error);
  }
};

// Example usage
const sampleProgressData = {
  subject: 'oops',
  completedQuestions: 2,
  score: 10,
  lastUpdated: new Date(),
};

// Uncomment the following line to add sample progress data
 addSampleProgressData('IVOFEjt6OCTEnslZI72uLwBI4qc2', sampleProgressData);
