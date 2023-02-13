import Auth from "./components/auth/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Home from "./components/home/index";
import Add from "./components/add/index";
import User from "./components/user/index";
import ProtectedRoute from "./components/utils/Protectedroute";
import Historic from "./components/home/historic/Historic";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [matchups, setMatchups] = useState([])
  const [reload, setReload] = useState(false);

  useEffect(() => {
      const userId = localStorage.getItem('userId')
      axios.get(`http://localhost:3000/api/matchup/${userId}`)
          .then(response => {
              setMatchups(response.data.reverse())
              setReload(false)
          })
          .catch(error => {
              console.error(error)
          });
  }, [reload]);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home matchups={matchups} setReload={setReload} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/historic"
          element={
            <ProtectedRoute>
              <Historic matchups={matchups} setReload={setReload} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add"
          element={
            <ProtectedRoute>
              <Add />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;