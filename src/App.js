import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRouter";
import { AuthContextProvider } from "./context/AuthContext";
import { RestaurantsContextProvider } from "./context/RestaurantsContext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Reviews from "./pages/Reviews";
import Signup from "./pages/Signup";
import Subscription from "./pages/Subscription";
import MovieReview from "./pages/MovieReview"

function App() {
  return (
    <>
    <RestaurantsContextProvider>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          /> 
          <Route path="/reviews" element= { <ProtectedRoute><Reviews/></ProtectedRoute>}/>
          <Route
              
              path="/reviews/:id"
              element={ <ProtectedRoute><MovieReview/></ProtectedRoute>}
            />
          <Route path="/subscribe" element={ <Subscription/>}/>
        </Routes>
      </AuthContextProvider>
      </RestaurantsContextProvider>
    </>
  );
}

export default App;
