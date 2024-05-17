import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Barra.css';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'bootstrap';

function Barra() {
    return (
        /*<Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Logo"
              />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="flex-column sidebar">
                <div className="navbar-item">
                  <Nav.Link href="#home">Home</Nav.Link>
                </div>
                <div className="navbar-item">
                  <Nav.Link href="#link">Link</Nav.Link>
                </div>
                <div className="navbar-item">
                  <Nav.Link href="#about">About</Nav.Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>*/

        <div class="container-fluid">
            <div class="row flex-nowrap">
                <div class="bg-dark col-auto col-md-4 col-lg-3 min-vh-100 d-flex flex-column justify-content-between">
                    <div class="bg-dark p-2">
                        <a class="d-flex text-decoration-none mt-1 align-items-center text-white">
                            <span class="fs-4 d-none d-sm-inline">Sidemenu</span>
                        </a>
                        <ul class="nav nav-pills flex-column mt-4">
                            <li class="nav-item">
                                <a href="#" class="nav-link text-white">
                                    <i class="fs-5 fa fa-gauge"></i><span class="fs-4 ms-1 d-none d-sm-inline">Dashboard</span>
                                </a>
                            </li>
                            <li class="nav-item py-2 py-sm-0">
                                <a href="#" class="nav-link text-white">
                                    <i class="fs-5 fa fa-house"></i><span class="fs-4 ms-1 d-none d-sm-inline">Home</span>
                                </a>
                            </li>
                            <li class="nav-item py-2 py-sm-0">
                                <a href="#" class="nav-link text-white">
                                    <i class="fs-5 fa fa-table-list"></i><span class="fs-4 ms-1 d-none d-sm-inline">Articles</span>
                                </a>
                            </li>
                            <li class="nav-item py-2 py-sm-0">
                                <a href="#" class="nav-link text-white">
                                    <i class="fs-5 fa fa-grid2"></i><span class="fs-4 ms-1 d-none d-sm-inline">Products</span>
                                </a>
                            </li>
                            <li class="nav-item py-2 py-sm-0">
                                <a href="#" class="nav-link text-white">
                                    <i class="fs-5 fa fa-clipboard"></i><span class="fs-4 ms-1 d-none d-sm-inline">Orders</span>
                                </a>
                            </li>
                            <li class="nav-item py-2 py-sm-0">
                                <a href="#" class="nav-link text-white">
                                    <i class="fs-5 fa fa-users"></i><span class="fs-4 ms-1 d-none d-sm-inline">Customers</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="dropdown open p-3">
                        <button class="btn border-none dropdown-toggle text-white" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-user"></i><span class="ms-2">xd</span>
                        </button>
                        <div class="dropdown-menu" aria-labelledby="triggerId">
                            <a class="dropdown-item" href="#">Setting</a>
                            <a class="dropdown-item" href="#">Profile</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </div>
                <div class="p-3">
                    <h2> Content Area</h2>
                </div>
            </div>
        </div>

    );
}

export default Barra;