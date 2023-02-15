import { Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import "./style.scss";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="form">      
      <TextField
        id="outlined-basic"
        label="Digite seu nome completo"
        variant="outlined"
        sx={{ bgcolor: "white", borderRadius: "10px", marginBottom: "20px" }}
      />
      <div className="email-button">
        <TextField
          id="outlined-basic"
          className="email"
          label="Digite seu email"
          variant="outlined"
          sx={{ bgcolor: "white", borderRadius: "10px", marginRight: "20px", width: "100%" }}
        />
        <Button variant="contained" sx={{ width: "200px",  borderRadius: "10px", bgcolor: "lightcoral" }}>Inscreva-se</Button>
      </div>      
    </div>
  );
};

export default UserForm;
