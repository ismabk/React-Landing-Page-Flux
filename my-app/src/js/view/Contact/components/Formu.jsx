import React from "react";

import "./Formu.scss";

const Formu = () => {
	return (
		<>
			<div id="container">
				<h1> Formulario de contacto </h1>

				<div className=" mt-4 d-flex justify-content-center">
					<i className="fas fa-laptop-code fs-2"></i>
				</div>
				<form action="#" method="post" id="contact_form">
					<div className="name">
						<label htmlFor="name"></label>
						<input
							type="text"
							placeholder="Nombre"
							name="name"
							id="name_input"
							required
						/>
					</div>
					<div className="email">
						<label htmlFor="email"></label>
						<input
							type="email"
							placeholder="E-mail"
							name="email"
							id="email_input"
						/>
					</div>
					<div className="telephone">
						<label htmlFor="name"></label>
						<input
							type="text"
							placeholder="Teléfono"
							name="telephone"
							id="telephone_input"
							required
						/>
					</div>
					<div className="subject">
						<label htmlFor="subject"></label>
						<select
							placeholder="Tipo de incidencia"
							name="subject"
							id="subject_input"
							required>
							<option disabled hidden>
								Tipo de incidencia
							</option>
							<option>No puedo ver las noticias</option>
							<option>No cargan las imágenes</option>
							<option>Sugerencias</option>
							<option>Otro tipo</option>
						</select>
					</div>
					<div className="message">
						<label htmlFor="message"></label>
						<textarea
							name="message"
							placeholder="Comentarios"
							id="message_input"
							cols="30"
							rows="5"
							required></textarea>
					</div>
					<div className="submit">
						<input type="submit" value="Enviar" id="form_button" />
					</div>
				</form>
			</div>
		</>
	);
};

export default Formu;
