import "./App.css";
import Transaction from "./Components/Transaction";
import FormComponent from "./Components/FormComponent";
import { useState, useEffect, useReducer } from "react";
import DataContext from "./Data/DataContext";
import ReportComponent from "./Components/ReportComponent";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const design = { color: "red", fontSize: 30, textAlign: "center" };
function App(props) {
  const initState = [
    { id: 1, title: "Salary", amount: 30000 },
    { id: 2, title: "Omakase", amount: -5000 },
  ];
  const [items, setItems] = useState(initState);

  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpend, setReportExpend] = useState(0);

  const onAddNewItem = (newItem) => {
    setItems((previousItem) => {
      return [newItem, ...previousItem];
    });
  };

  useEffect(() => {
    const amounts = items.map((item) => item.amount);
    const income = amounts
      .filter((item) => item > 0)
      .reduce((total, element) => (total += element), 0);
    const expend =
      amounts
        .filter((item) => item < 0)
        .reduce((total, element) => (total += element), 0) * -1;
    setReportIncome(income.toFixed(2));
    setReportExpend(expend.toFixed(2));
  }, [items, reportIncome, reportExpend]);

  //reduce state
  const [showReport, setShowReport] = useState(false);

  const reducer = (state, action) => {
    switch (action.type) {
      case "SHOW":
        return setShowReport(true);
      case "HIDE":
        return setShowReport(false);
    }
  };

  const [result, dispatch] = useReducer(reducer, showReport);

  return (
    <DataContext.Provider
      value={{
        income: reportIncome,
        expend: reportExpend,
      }}
    >
      <div className="container">
        <h1 style={design}>เเอพบัญชีรายรับ - รายจ่าย</h1>
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">ข้อมูลบัญชี</Link>
              </li>
              <li>
                <Link to="/insert">บันทึกข้อมูล</Link>
              </li>
            </ul>
            <Routes>
              <Route>
                <Route path="/" element={<ReportComponent />} exact></Route>
              </Route>
              <Route>
                <Route path="/insert" element={<><FormComponent onAddItem={onAddNewItem} /> <Transaction item={items} /></>}></Route>
              </Route>
            </Routes>
          </div>
        </Router>
        {/* {showReport && <ReportComponent />}
        <FormComponent onAddItem={onAddNewItem} />
        <Transaction item={items} />

        <h1>{result}</h1>
        <button onClick={() => dispatch({ type: "SHOW" })}>เเสดง</button>
        <button
          onClick={() => {
            dispatch({ type: "HIDE" });
          }}
        >
          ซ่อน
        </button> */}
      </div>
    </DataContext.Provider>
  );
}

// const styles = {
//   title: {
//     color: 'red'
//   }
// }
export default App;
