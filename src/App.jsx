import { Routes, Route } from "react-router-dom";
import { Wrap } from "./style/layout_styled";
import Mainlayout from "./layout/Main_layout";
import Main from "./page/Main";
import "./App.css";

function App() {
  return (
    <Wrap>
      <Routes>
        <Route element={<Mainlayout />}>
          <Route path="/" element={<Main />}></Route>
        </Route>
      </Routes>
    </Wrap>
  );
}

export default App;
