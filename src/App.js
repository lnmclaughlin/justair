import "./App.css";
import { Routes, Route } from "react-router-dom";
import SupportForm from "./components/SupportForm";
import UserProfile from "./components/UserProfile";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SupportForm />}></Route>
      <Route path="/" element={<UserProfile />}></Route>
    </Routes>
  );
};

export default App;
