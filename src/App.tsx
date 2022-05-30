import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import Users from './Components/Users';

let name: string = 'sunny'
let roll: number = 787
let isStudent: boolean = true;

let students: string[] = ['tamim', 'sakib', 'rahim'];
let rolls: number[] = [3, 45, 322];

const person: { name: string, roll: number, isStudent: boolean } = {
  name: 'sunny',
  roll: 45,
  isStudent: true
}

interface User {
  name: string,
  roll: any,
  isStudent?: boolean,
  location?: string | number
}

const user: User = {
  name: 'sunny',
  roll: 'fourty',
  location: 56
}

const add = (first: number, last: number, address: string): string => {
  const total: number = first + last;
  console.log(total);
  return address
}

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Users></Users>
    </div>
  );
}

export default App;
