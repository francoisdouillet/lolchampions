import Auth from "./components/auth/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Home from "./components/home/index";
import Add from "./components/add/index";
import User from "./components/user/User";
import ProtectedRoute from "./components/utils/Protectedroute";
import Historic from "./components/home/historic/Historic";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const meta = document.createElement('meta');
  meta.name = 'viewport';
  meta.content = 'width=device-width, initial-scale=1';
  document.head.appendChild(meta);

  const [matchups, setMatchups] = useState([])
  useEffect(() => {
      const userId = localStorage.getItem('userId')
      axios.get(`http://localhost:3000/api/matchup/${userId}`)
          .then(response => {
              setMatchups(response.data)
          })
          .catch(error => {
              console.error(error)
          });
  }, []);


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
              <Home matchups={matchups} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/historic"
          element={
            <ProtectedRoute>
              <Historic matchups={matchups}/>
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