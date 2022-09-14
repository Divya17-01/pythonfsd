import './App.css';
import { Routes, Route } from "react-router-dom";
import { Mainscreen } from './screen';

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Mainscreen />} />
    </Routes>

  );
}

export default App;