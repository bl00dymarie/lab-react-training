import React from 'react';
import IdCard from './IdCard';

const App = () => {
  const users = [{
    firstName: "Alice",
    lastName: "Fritze",
    gender: "female",
    superpower: 100,
    birth: "1988-01-01",
    picture: "https://bit.ly/2zVs57p",
  },
  {
    firstName: "Bella",
    lastName: "Sassy",
    gender: "non-binary",
    superpower: 120,
    birth: "1978-01-01",
    picture: "https://bit.ly/2zVs57p",

  }]
  return (
    <div>
      <IdCard data={users[0]}/>
      <IdCard data={users[1]}/>
    </div>
    
  );
}

export default App;
