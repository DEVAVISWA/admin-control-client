import React from "react";
import BackButton from "../../components/BackButton";
import Spinner from "../../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/Navbar";

const DeleteClients = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteClient = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:3000/client/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const handleBack = () => {
    navigate("/");
  }
  return (
    <div>
      <BackButton/>
      <h1 
      style= {{
        color: 'black',
        margin: '2rem',
      
      }}
      >Delete client</h1>
      {loading ? <Spinner /> : ""}
      <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "50px",
        borderRadius: "0.75rem",
      }}>
        <h3>Are you sure you want to delete this client?</h3>
        <div>
        <button
        style = {{
            padding: '1rem',
            backgroundColor: '#f07f7f',
            color: '#ffffff',
            margin: '2rem',
            borderRadius: '0.75rem',
            width: '100px',
            border: 'none'
        }}
         onClick={handleDeleteClient}>Yes</button>
        <button
        style = {{
            padding: '1rem',
            backgroundColor: '#00a6ff',
            color: '#ffffff',
            margin: '2rem',
            borderRadius: '0.75rem',
            width: '100px',
            border: 'none'
        }}
         onClick={handleBack}>No</button>
      </div>
        </div>
    </div>
  );
};

export default DeleteClients;