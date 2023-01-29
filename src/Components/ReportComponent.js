import React, { useContext } from "react";
import DataContext from "../Data/DataContext";
import './ReportComponent.css'
export default function ReportComponent() {
  const { income, expend } = useContext(DataContext);
  const formatNumber=(num)=> {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  return (
    <div>
      <h4>ยอดคงเหลื่อ (บาท)</h4>
      <h1>${formatNumber((income - expend).toFixed(2))}</h1>
      <div className="report-container">
        <div>
          <h4>รายได้ทั้งหมด</h4>
          <p className="report plus">{formatNumber(income)}</p>
        </div>
        <div>
          <h4>รายจ่ายทั้งหมด</h4>
          <p className="report minus">{formatNumber(expend)}</p>
        </div>
      </div>

    </div>
  );
}
