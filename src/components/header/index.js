import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from "react-bootstrap/Dropdown";

const imagenes = require.context('/src/assets/images',true);

function Header() {
  return (
    <header>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 col-md-12 logo my-auto">
            <a href="#">
              <img src={imagenes('./logo.svg')} />
            </a>
          </div>
          {/* <div class="col-lg-6 col-md-12 user">
            <Button variant="login">Iniciar sesión</Button>
            <Button variant="register">Registrarse</Button>
          </div> */}
          <div class="col-lg-6 user">
            <Dropdown>
              <Dropdown.Toggle variant="custom">
                <img src={imagenes('./userDefault.png')} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Trayectoria</Dropdown.Item>
                <Dropdown.Divider/>
                <Dropdown.Item href="#">Cerrar sesión</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
