import Auth from "./components/auth/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Home from "./components/home/index";
import Add from "./components/add/index";
import User from "./components/user/index";
import ProtectedRoute from "./components/utils/Protectedroute";
import Historic from "./components/home/historic/Historic";
import Champions from "./components/champions";
import ChampionsForm from "./components/champions/form";
import NavBar from "./components/navbar/Navbar";
import ChampionSheet from "./components/champions/championsheet/ChampionSheet";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            backgroundColor: "#E6AC71",
            borderRadius: '5px',
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            color: "white",
            border: "2px solid white"
          }
        }
      }
    },
    palette: {
      primary: {
        main: "#E6AC71",
      },
      secondary: {
        main: "#21333C",
      },
      third: {
        main: "#FFFFFF",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
                <NavBar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/historic"
            element={
              <ProtectedRoute>
                <Historic />
                <NavBar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/champions"
            element={
              <ProtectedRoute>
                <Champions />
                <NavBar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/champions/add"
            element={
              <ProtectedRoute>
                <ChampionsForm />
                <NavBar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/champions/:id"
            element={
              <ProtectedRoute>
                <ChampionSheet />
                <NavBar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add"
            element={
              <ProtectedRoute>
                <Add />
                <NavBar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user"
            element={
              <ProtectedRoute>
                <User />
                <NavBar />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
