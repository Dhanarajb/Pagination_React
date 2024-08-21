import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import PaginatedImageList from './components/PaginationList';
import PaginatedTable from './components/PaginationList';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PaginatedTable />
    </>
  );
}

export default App;
