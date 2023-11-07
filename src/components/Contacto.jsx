import React from 'react';

function Contacto() {
    return (
        <div className="contacto-section">
            <h2>Contacto</h2>
            <p>Si tienes alguna pregunta o inquietud, no dudes en contactarnos a través del siguiente formulario:</p>

            <form className="contacto-form">
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
                </div>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Contacto;