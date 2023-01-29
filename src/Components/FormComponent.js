import React, { useEffect } from 'react'
import './FormComponent.css'
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
export default function FormComponent(props) {

  console.log("Render Form Component");

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [formValid, setFormValid] = useState(false);


  const inputTitle = (event) => {
    setTitle(event.target.value);
  }
  const inputAmount = (event) => {
    setAmount(event.target.value);
  }
  const saveItem = (event) => {
    event.preventDefault();
    const itemData = {
      id: uuidv4(),
      title: title,
      amount: Number(amount)
    }
    console.log('บันทึกข้อมูลเรียบร้อย');
    props.onAddItem(itemData);
    setTitle("");
    setAmount(0);
  }

  useEffect(() => {
    const checkData = title.trim().length > 0 && amount != 0;
    if(checkData){
      setFormValid(checkData);
    }
  }, [title, amount]) 

  return (
    <div>
      <form onSubmit={(saveItem)}>
        <div className="form-control">
          <label>ชื่อรายการ</label>
          <input type="text" placeholder='ระบุชื่อรายการของคุณ' onChange={(inputTitle)} value={title}></input>
        </div>
        <div className="form-control">
          <label>จํานวนเงิน</label>
          <input type="number" placeholder='(+ รายรับ, -รายจ่าย)' onChange={(inputAmount)} value={amount}></input>
        </div>
        <div>
          <button className="btn" type="submit" disabled={!formValid}>เพิ่มข้อมูล</button>
        </div>
      </form>
    </div>
  )
}
