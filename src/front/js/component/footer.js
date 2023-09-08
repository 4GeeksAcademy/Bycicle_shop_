import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

export const Footer = () => (
	<div className="container-fluid p-2 fixed-bottom d-flex">
		<div className="col-sm-8 col-md-8 col-lg-9">
			<div className="d-flex">
				<div className="m-3">
					<i className="fa-regular fa-copyright"></i>
				</div>
				<div className="mt-2">
					<p>Develop by Aleksander Klenin/ Mariana Plácito</p>
					<p>4Geeks 2023</p>
				</div>
			</div>	
		</div>
		<Link className="link mt-2" to="/">
			<div className="terms col-sm-4 col-md-4 col-lg-3 d-flex flex-row-reverse">
				<p>terms & conditions</p>
			</div>
		</Link>
    </div>
);