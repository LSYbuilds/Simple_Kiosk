import { Routes, Route } from "react-router-dom";
import { Wrap } from "./style/layout_styled";
import Mainlayout from "./layout/Main_layout";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import Introlayout from "./layout/Intro_layout";
import Intro from "./page/intro/Intro";
import Main from "./page/main/Main";
import "./App.css";
import { useState } from "react";

function App() {
  const [faction, setFaction] = useState([]);
  return (
    <Wrap>
      <Routes>
        <Route element={<Introlayout />}>
          <Route path="/" element={<Intro setFaction={setFaction} />}></Route>
        </Route>
        <Route element={<Mainlayout faction={faction} />}>
          <Route path="/main" element={<Main faction={faction} />}></Route>
        </Route>
      </Routes>
    </Wrap>
  );
}

export default App;
