import React, { useEffect, useState } from 'react';
import { getCurrentUser } from '../auth';
import { getUserProgress } from '../firestore';
import { Outlet } from 'react-router-dom';
const Home = () => {
  const [progress, setProgress] = useState({});
console.log("in home")
  useEffect(() => {
    const fetchProgress = async () => {
      const user = getCurrentUser();
      if (user) {
        const progressDoc = await getUserProgress(user.uid);
        console.log(progressDoc)
        if(progressDoc!==null)
        {
          setProgress(progressDoc);
        }
        if (progressDoc.exists) {
          setProgress(progressDoc.data());
          console.log("prg",progress)
        }
      }
    };
    fetchProgress();
  }, []);
  console.log("proog",progress)
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <h2>Progress</h2>
        <p>OOPS: {progress.oops || 0}/30</p>
        <p>DBMS: {progress.dbms || 0}/30</p>
        <p>DSA: {progress.dsa || 0}/30</p>
        <p>SQL: {progress.sql || 0}/30</p>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
