import React, { useEffect,useContext } from "react";

import {Context} from "../../store/appContext.js";

import AccordionItem from "./Components/AccordionItem/AccordionItem.jsx";

import liga from "../../../img/laliga-santander-v-removebg-preview_4.png";
import premier from "../../../img/1200px-Logotip_Premier_League.svg-removebg-preview.png";
import bundesliga from "../../../img/Bundesliga-Logo-2010-removebg-preview.png";

import "./Accordion.scss";

const Accordion = () => {
	const {store,actions} = useContext(Context);
	useEffect(() => {
		actions.loadSomeData();
	},[]) 

	return (
		<>
			{store.imgData.length > 0 ? (
				<div
					className="accordion w-75 m-auto my-5 sizeAccordion"
					id="accordionPanelsStayOpenExample">
					<AccordionItem
						data="#panelsStayOpen-collapseOne"
						ariaE="true"
						ariaC="panelsStayOpen-collapseOne"
						button="La Liga"
						src={liga}
						alt="La liga"
						heading="panelsStayOpen-headingOne"
						id1="panelsStayOpen-collapseOne"
						imgLig={store.imgData.filter(
							val => val.lig === "liga"
						)}></AccordionItem>
					<AccordionItem
						data="#panelsStayOpen-collapseTwo"
						ariaE="false"
						ariaC="panelsStayOpen-collapseTwo"
						button="Premier League"
						src={premier}
						alt="Premier League"
						heading="panelsStayOpen-headingTwo"
						id1="panelsStayOpen-collapseTwo"
						imgLig={store.imgData.filter(
							val => val.lig === "premier"
						)}></AccordionItem>
					<AccordionItem
						data="#panelsStayOpen-collapseThree"
						ariaE="false"
						ariaC="panelsStayOpen-collapseThree"
						button="Bundesliga"
						src={bundesliga}
						alt="Bundesliga"
						heading="panelsStayOpen-headingThree"
						id1="panelsStayOpen-collapseThree"
						imgLig={store.imgData.filter(
							val => val.lig === "bundesliga"
						)}></AccordionItem>
				</div>
			) : (
				<h1 className="text-center">Loading...</h1>
			)}
		</>
	);
};

export default Accordion;
