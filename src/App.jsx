
import Header from './Components/Header.jsx';
import './App.css'
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
     
      <Header></Header>
      <Outlet></Outlet>
      

    </>
  )
}

export default App;
