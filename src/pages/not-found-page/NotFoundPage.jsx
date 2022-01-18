import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css";

export function NotFoundPage() {
  let navigate = useNavigate();

  return (
    <div className="basic-page-template">
      <h1>{`404 Página no encontrada :(`}</h1>
    </div>
  );
}
