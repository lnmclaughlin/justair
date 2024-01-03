import "./App.css";
import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Form />}></Route>
    </Routes>
  );
};

export default App;
