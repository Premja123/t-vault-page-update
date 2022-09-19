import Head from './components/Headpart/Head';
import './App.css';
// import CreateNewSafe from './components/Bodypart/CreateNewSafe';
// import ListingInput from './components/Bodypart/ListingInput';
// import CreateNewSafe from './components/Bodypart/CreateNewSafe';

// import { Route, Routes } from "react-router-dom";
// import AddUser from "./components/Demo/AddUser";
// import EditUser from './components/Demo/EditUser';
// import UserList from "./components/Demo/UserList";


function App() {
  return (
    <div className="App">
    <Head/>
   
    {/* <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-center font-bold text-2xl text-gray-700">CRUD with redux toolkit</h1>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
    </div> */}
{/* <CreateNewSafe/> */}
    </div>
  );
}

export default App;
