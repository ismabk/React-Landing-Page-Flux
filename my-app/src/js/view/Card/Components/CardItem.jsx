import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


import "./CardItem.scss";

const CardItem = props => {
	return (
		<>
			<div className=" col-sm-12 col-md-6 bg-second center-content p-3">
				<div className="card">
					<img src={props.imgCard} alt={props.altImg} />
					<div className="card-body">
					<Link to={`${props.linky}`} className="newsLink" >
							<h5 className="card-title">{props.titleCard}</h5>
							<p className="card-text">{props.bodyCard}</p>
					</Link>
					</div>
				</div>
			</div>
		</>
	);
};

CardItem.propTypes = {
	imgCard: PropTypes.string,
	altImg: PropTypes.string,
	titleCard: PropTypes.string,
	bodyCard: PropTypes.string,
	linky: PropTypes.string
};

export default CardItem;
