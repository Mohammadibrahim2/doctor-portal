
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router, Routes } from './Routes/Routes/Routes';

function App() {
  return (
    <div className="App">
   <RouterProvider router={router}/>
    </div>
  );
}

export default App;
