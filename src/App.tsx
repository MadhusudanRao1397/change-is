import React from 'react';
import './App.css';
import UserList from './components/UserList';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Madhusudan's Changeis challenge</h1>
      <UserList />
    </div>
  );
};

export default App;