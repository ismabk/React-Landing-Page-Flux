import React from "react";

import "../../Card/Components/CardItem.scss";

const PremierNew = () => {
	return (
		<>
			<div id="container">
				<h3 className="center-content">Liverpool vs Man United</h3>
				<img
					className="img-fluid"
					src="https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/default/0001/14/thumb_13735_default_news_size_5.jpeg"
				/>
			</div>

			<div className="row mx-4 center-content">
				<p className="p-2 col-xs-12 col-sm-8">
					<span className="text-uppercase fs-1">E</span>l partido más
					vital de la temporada para los dos mejores equipos de la
					premier, los cuales están en el top-3, pelenado por el
					campeonato. Las figuras decisivas, tanto Cristiano como
					Salah vienen abos con una gran racha goleadora teniendo
					entre ambos más de 40 goles hasta ahora. Un gran partido que
					decantará el campeón de la Premier League este año.
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry
					standard dummy text ever since the 1500s, when an unknown
					printer took a galley of type and scrambled it to make a
					type specimen book. It has survived not only five centuries,
					but also the leap into electronic typesetting, remaining
					essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum
					passages, and more recently with desktop publishing software
					like Aldus PageMaker including versions of Lorem Ipsum.
				</p>
				<img
					src="https://w2-noticierovenevision-net.s3.amazonaws.com/public/media/images/cristiano-ronaldo-manchester-united-1.jpg"
					alt="CR7 Training"
					className="col-xs-12 col-sm-12 col-xl-4 center-content"
				/>
			</div>
		</>
	);
};

export default PremierNew;
