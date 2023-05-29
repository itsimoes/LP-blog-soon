import { Button, TextField } from "@mui/material";
import React from "react";
import "./style.scss";
import { inputLabelClasses } from "@mui/material/InputLabel";

const UserForm = () => {

  return (
    <div className="form">
      <TextField
        id="outlined-basic"
        label="Digite seu nome completo"
        variant="outlined"
        sx={{ bgcolor: "white", borderRadius: "10px", marginBottom: "20px" }}
        InputProps={{
          sx: {
            color: "lightcoral",
            "&:hover fieldset": {
              color: "lightcoral",
              border: "2px solid lightcoral !important",
              borderRadius: "10px",
            },
            "&:focus-within fieldset, &:focus-visible fieldset": {
              border: "2px solid lightcoral !important",
              borderRadius: "10px"
            },
          },
        }}
        InputLabelProps={{
          sx: {
            // set the color of the label when not shrinked
            color: "gray",
            [`&.${inputLabelClasses.shrink}`]: {
              // set the color of the label when shrinked (usually when the TextField is focused)
              color: "lightcoral",
              bgcolor: "white",
                borderRadius: "5px",
                paddingLeft: "5px",
                paddingRight: "5px"
            },
          },
        }}
      />
      <div className="email-button">
        <TextField
          id="outlined-basic"
          className="email"
          label="Digite seu email"
          variant="outlined"
          sx={{
            bgcolor: "white",
            borderRadius: "10px",
            marginRight: "20px",
            width: "100%",
          }}
          InputProps={{
            sx: {
              color: "lightcoral",
              "&:hover fieldset": {
                color: "lightcoral",
                border: "2px solid lightcoral !important",
                borderRadius: "10px",
              },
              "&:focus-within fieldset, &:focus-visible fieldset": {
                border: "2px solid lightcoral !important",
                borderRadius: "10px"
              },
            },
          }}
          InputLabelProps={{
            sx: {
              // set the color of the label when not shrinked
              color: "gray",              
              [`&.${inputLabelClasses.shrink}`]: {
                // set the color of the label when shrinked (usually when the TextField is focused)
                color: "lightcoral",
                bgcolor: "white",
                borderRadius: "5px",
                paddingLeft: "5px",
                paddingRight: "5px"
              },
            },
          }}
        />
        <Button
          variant="contained"
          sx={{ width: "200px", borderRadius: "10px", bgcolor: "lightcoral", 
          "&:hover":{ bgcolor: "white", color: "lightcoral"}}           
          }
        >
          Inscreva-se
        </Button>
      </div>
    </div>
  );
};

export default UserForm;
