import { Home } from "./pages/home";
import { User } from "./pages/user";
import { Error404 } from "./routes/error404";
import { Error403 } from "./routes/error403";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./assets/stylesheets/App.sass";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/user" element={<User/>}/>

          <Route path="*" element={<Error404/>} />

        </Routes>
      </Router>
  );
}

export default App;