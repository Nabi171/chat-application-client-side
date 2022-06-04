import './App.css';
import DashBoard from './Components/Dashboard/DashBoard';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
function App() {
  return (
    <div className="App container mx-auto">
      <Header></Header>
      <Home></Home>
      {/* <Routes>
        <Route path="dashbord" element={<DashBoard />} />

      </Routes> */}

    </div>
  );
}

export default App;
