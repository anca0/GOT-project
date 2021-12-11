import "./App.css";
import { Routes, Route } from "react-router-dom";
import CharactersList from "../CharactersList/CharactersList";
import CharacterDetail from "../CharacterDetail/CharacterDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CharactersList />} />
      <Route exact path="/characters/:id" element={<CharacterDetail />} />
    </Routes>
  );
}

export default App;
