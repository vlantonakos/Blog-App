import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";


function App() {
  const { user } = useContext(Context);

  return (
    <Router>
      <TopBar />
      <Routes>
        {user ?
        <>
        <Route exact path="/" element={<Home />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/write" element={<Write />}/>
        <Route path="/settings" element={<Settings />}/>
        <Route path="/post/:postId" element={<Single />}/>
        </>
        : 
        <>
          <Route exact path="/" element={<Login />}/>
          <Route path="/login" element={<Login />}/> 
          <Route path="/register" element={<Register />}/>
        </>
        }
      </Routes>
    </Router>
  );
}

export default App;
