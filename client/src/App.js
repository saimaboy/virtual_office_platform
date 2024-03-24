import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signup1 from "./pages/Signup/Signup1";
import Signup2 from "./pages/Signup/Signup2";
import Signup3 from "./pages/Signup/Signup3";
import Signup4 from "./pages/Signup/Signup4";
import Start from "./pages/Start/Start";
import Members from "./pages/Members/Members";
import Meetings from "./pages/Meetings/Meetings";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/signup1", element: <Signup1 /> },
  { path: "/signup2", element: <Signup2 /> },
  { path: "/signup3", element: <Signup3 /> },
  { path: "/signup4", element: <Signup4 /> },
  {path:"/Start", element: <Start />},
  {path:"/Members", element: <Members />},
  {path:"/Meetings", element: <Meetings />},
];

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

