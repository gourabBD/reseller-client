import logo from './logo.svg';
import './App.css';
import toast, { Toaster } from 'react-hot-toast';

import {RouterProvider} from "react-router-dom";
import router from './Routes/routes';

function App() {
  return (
    <div  data-theme="bumblebee">
      <RouterProvider router={router}>
      
      </RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
