import { Facebook, Instagram, Pinterest } from "@mui/icons-material";
import React from "react";
import "./style.scss";
import Form from "../Form/Form"

const Home = () => {
  return (
    <div className="content-wrapper">
      <div className="left-side">
        <h2>ítalo simões</h2>
        <div>
          <h1>em abril de 2023</h1>
          <p>
            Meu blog está quase pronto. Seja um dos primeiros a conhecê-lo
            inserindo seu email abaixo. Eu lhe notificarei assim que estiver
            disponível. Vamos lá!
          </p>
          <Form />
          <div className="social-media-wrapper">
            <a
              href="https://instagram.com/itsimoes"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram sx={{ fontSize: 40, marginRight: 1 }} />
            </a>
            <a
              href="https://facebook.com/itsimoes"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook sx={{ fontSize: 40, marginRight: 1 }} />
            </a>
            <a
              href="https://pinterest.com/itsimoes"
              target="_blank"
              rel="noreferrer"
            >
              <Pinterest sx={{ fontSize: 40, marginRight: 1 }} />
            </a>
          </div>
        </div>
        <span>&copy; 2023 Ítalo Simões. All Rights Reserved.</span>
      </div>
    </div>
  );
};

export default Home;
