import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export function Home() {
  let navigate = useNavigate();

  return (
    <div className="basic-page-template">
      <div className='home-container'>
        hola munding
        </div>
    </div>
  );
}
