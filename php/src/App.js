import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ListUser from './components/ListUser.js'
import CreateUser from './components/CreateUser.js'
import EditUser from './components/EditUser.js'

function App() {
  return (
    <div className="App">
      <h5>Yo</h5>
      <BrowserRouter>
        <div className='flex flex-col'>
          <Link to="/">List Users</Link>
          <Link to="user/create">Create Users</Link>
        </div>
        <Routes>
          <Route index element={<ListUser/>}/>
          <Route path='user/create' element={<CreateUser/>}/>
          <Route path='user/:id/edit' element={<EditUser/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
