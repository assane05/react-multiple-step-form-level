import React, { useState } from "react";
import SingUp from "./SingUp";
import Personal from "./Personal";
import Infos from "./Infos";

function Form() {
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    age: "",
    nationality: "",
    profession: "",
  });

  const FormTitles = ["sign up", "Personnal info", "other"];

  const displayPage = () => {
    if (page === 0) {
      return <SingUp formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Personal formData={formData} setFormData={setFormData} />;
    } else {
      return <Infos formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <div className="form">
      <div className="progessbar"></div>
      <div></div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{displayPage()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currentPage) => currentPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("formulaire soumis avec succes");
                console.log(formData);
              } else {
                setPage((currentPage) => currentPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
export default Form;
