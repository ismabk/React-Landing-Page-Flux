import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../img/logo-removebg-sin bordes.png";
import laliga from "../../../img/laliga-santander-v-removebg-preview.png";
import laLigaSmart from "../../../img/laliga-smartbank-logo-vector-removebg-preview.png";
import premier from "../../../img/1200px-Logotip_Premier_League.svg-removebg-preview.png";
import serieA from "../../../img/i-removebg-preview.png";
import ligue1 from "../../../img/Ligue1_Uber_Eats_logo-removebg-preview.png";
import bundesliga from "../../../img/Bundesliga-Logo-2010-removebg-preview.png";

import "./Header.scss";

const HeaderT = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-first">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand d-md-flex" >
						<div className="ms-2 ">
							<img
								width="100px"
								height="75px"
								src={logo}
								alt=""
							/>
						</div>
				</Link>
				<button
					className="navbar-toggler navbar-dark:"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse justify-content-end"
					id="navbarNavDropdown">
					<ul className="navbar-nav d-flex align-items-center">
						<li className="nav-item mx-1">
							<Link to="/santander"
								className="nav-link active c-blanco ahover"
								aria-current="page"
								>
								
									<div className=" ">
										<img
											width="75px"
											height="75px"
											src={laliga}
											alt=""
										/>
									</div>
								
							</Link>
						</li>
						<li className="nav-item mx-1">
							<Link to="" className="nav-link c-blanco ahover" >
								<div className=" ">
									<img
										width="108px"
										height="60px"
										src={laLigaSmart}
										alt=""
									/>
								</div>
							</Link>
						</li>
						<li className="nav-item mx-1">
							<Link to="" className="nav-link c-blanco ahover" >
								<div className=" ">
									<img
										width="84px"
										height="35px"
										src={premier}
										alt=""
									/>
								</div>
							</Link>
						</li>
						<li className="nav-item mx-1">
							<Link to="" className="nav-link c-blanco ahover" >
								<div className=" ">
									<img src={serieA} alt="" />
								</div>
							</Link>
						</li>
						<li className="nav-item mx-1">
							<Link to="" className="nav-link c-blanco ahover" >
								<div className=" ">
									<img src={ligue1} alt="" />
								</div>
							</Link>
						</li>
						<li className="nav-item mx-1">
							<Link to="" className="nav-link c-blanco ahover" >
								<div className=" ">
									<img src={bundesliga} alt="" />
								</div>
							</Link>
						</li>
						<li className="nav-item mx-4">
							<Link to="" className="nav-link c-blanco  aahover" >
								<i className="me-2 fas fa-globe-europe"></i>ESP
							</Link>
						</li>
						<li className="nav-item mx-4 dropdown">
							<Link to=""
								className="nav-link dropdown-toggle c-blanco aahover"
								id="navbarDropdownMenuLink"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								Acceso
							</Link>
							<ul
								className="dropdown-menu"
								aria-labelledby="navbarDropdownMenuLink">
								<li>
									<Link to="" className="dropdown-item" >
										Log in
									</Link>
								</li>
								<li>
									<Link to="" className="dropdown-item" >
										Registrarse
									</Link>
								</li>
								<li>
									<Link to="" className="dropdown-item" >
										Opciones
									</Link>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default HeaderT;
