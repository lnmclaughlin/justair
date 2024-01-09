import "./App.css";
import { Routes, Route } from "react-router-dom";
import SupportForm from "./components/SupportForm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SupportForm />}></Route>
    </Routes>
  );
};

export default App;
