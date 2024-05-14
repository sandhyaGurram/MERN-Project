import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import LoginForm from './admin/LoginForm';
import Routing from './Routing';
import "jquery/dist/jquery";
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import "datatables.net-dt/js/dataTables.dataTables"
import Header from './header/Header';
import { createContext, useState } from 'react';
import Customfunction from './Customfunction';
import Profile from './admin/Profile';

export let store=createContext()

function App() {
  const [token,setToken]=useState("")
  return (
    <div className="App">
      {/* <Profile/> */}
      <store.Provider value={[token,setToken]}>
        <Routing/>
      </store.Provider>
      
    </div>
  );
}

export default App;
