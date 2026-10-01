import { Routes, Route } from "react-router-dom";
import { Wrap } from "./style/layout_styled";
import Mainlayout from "./layout/Main_layout";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import Introlayout from "./layout/Intro_layout";
import Intro from "./page/intro/Intro";
import Main from "./page/main/Main";
import Order from "./page/main/Order";
import "./App.css";
import { useState, useEffect } from "react";
import OrderConfirm from "./page/main/OrderConfirm";

function App() {
  const [faction, setFaction] = useState([]);
  const [buybooData, setBuybooData] = useState(() => {
    const savedData = sessionStorage.getItem("buybooData");

    return savedData ? JSON.parse(savedData) : null;
  });
  const [finalOrder, setFinalOrder] = useState({});
  useEffect(() => {
    if (buybooData) {
      sessionStorage.setItem("buybooData", JSON.stringify(buybooData));
    } else {
      sessionStorage.removeItem("buybooData");
    }
  }, [buybooData]);
  return (
    <Wrap>
      <Routes>
        <Route element={<Introlayout />}>
          <Route path="/" element={<Intro setFaction={setFaction} />}></Route>
        </Route>
        <Route element={<Mainlayout faction={faction} />}>
          <Route
            path="/main"
            element={<Main faction={faction} setBuybooData={setBuybooData} />}
          ></Route>
          <Route
            path="/order"
            element={
              <Order
                buybooData={buybooData}
                setBuybooData={setBuybooData}
                setFinalOrder={setFinalOrder}
                finalOrder={finalOrder}
              />
            }
          ></Route>
          <Route
            path="/orderconfirm"
            element={
              <OrderConfirm
                faction={faction}
                finalOrder={finalOrder}
                buybooData={buybooData}
              />
            }
          ></Route>
        </Route>
      </Routes>
    </Wrap>
  );
}

export default App;
