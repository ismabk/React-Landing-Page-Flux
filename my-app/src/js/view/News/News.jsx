import React from "react";
import HeaderT from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import CardItem from "../Card/Components/CardItem.jsx";
import PremierNew from "./components/Premier-news.jsx";

// import Formu from "../Contact/components/Formu.jsx";

const News = () => {
	return (
		<>
			<HeaderT></HeaderT>
			<PremierNew></PremierNew>
			<hr></hr>
			<div className="row">
				<h5 className="center-content">NOTICIAS RELACIONADAS</h5>
				<CardItem
					imgCard={
						"https://www.futbolred.com/files/article_main/files/crop/uploads/2019/12/21/5dfe881a412bb.r_1621972120750.0-90-796-488.jpeg"
					}
					altImg={"Happy Salah"}
					titleCard={"Salah pichichi"}
					bodyCard={
						"Salah se ha cambiado el peinado y además se sitúa como colíder en racha goleadora tras ganar al WestHam 4-0."
					}></CardItem>

				<CardItem
					imgCard={
						"https://www.miaminews24.com/wp-content/uploads/2020/05/Premier-Ligue.jpg"
					}
					altImg={"Premier throphy"}
					titleCard={"La premier en juego"}
					bodyCard={
						"El grandioso y deseado trofeo de la Premier League está en juego tras quedar sólo 10 puntos para finalizar el campeonato."
					}></CardItem>
			</div>
			<Footer></Footer>
		</>
	);
};

export default News;
