import { Divider } from "antd";
import React from "react";

function FooterCustom() {
  return (
    <div>
      <Divider />
      <footer
        style={{
          fontSize: 12,
          bottom: 0,
          width: "100%",
        }}
      >
        <p>
          Desarrollado con React.js, almacenamiento de datos en Firebase. Creado
          por{" "}
          <a
            href="https://www.linkedin.com/in/sebastian-ramirez-64906b168/"
            target="_blank"
            className="underline"
            rel="noopener noreferrer"
          >
            Sebastian Ramirez
          </a>
          .
        </p>

        <div />
      </footer>
    </div>
  );
}

export default FooterCustom;
