import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{ backgroundColor: "#17539E" }}
        >
          <a className="navbar-brand" href="#">
            Coisas de Lab
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link active dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Categorias
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Anticoagulantes
                  </a>
                  <div className="dropdown-divider" />

                  <a className="dropdown-item" href="#">
                    Bioquímica
                  </a>
                  <div className="dropdown-divider" />

                  <a className="dropdown-item" href="#">
                    Biotergentes
                  </a>
                  <div className="dropdown-divider" />

                  <a className="dropdown-item" href="#">
                    Coagulação
                  </a>
                  <div className="dropdown-divider" />

                  <a className="dropdown-item" href="#">
                    Diversos
                  </a>
                  <div className="dropdown-divider" />

                  <a className="dropdown-item" href="#">
                    Hermatologia
                  </a>
                  <div className="dropdown-divider" />

                  <a className="dropdown-item" href="#">
                    Imunologia
                  </a>
                  <div className="dropdown-divider" />

                  <a className="dropdown-item" href="#">
                    Turbidimetria
                  </a>
                </div>
              </li>

              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Institucional
                </a>
              </li>

              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Contato
                </a>
              </li>

              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Programações
                </a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn my-2 my-sm-0" type="submit">
                <a>
                  <i class="fas fa-search" />
                </a>
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
