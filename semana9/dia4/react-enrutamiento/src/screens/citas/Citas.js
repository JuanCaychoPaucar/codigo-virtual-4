import React, { useEffect } from 'react'
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./citas.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { Modal, Button } from "react-bootstrap";
import moment from 'moment';
import { useState } from 'react';
import { getMascotas } from '../../services/mascotas';
import { postCita } from '../../services/citas';

// npm install react-big-calendar
// npm install moment

const localizer = momentLocalizer(moment);

const eventos = [
    {
        id: 1,
        title: "Cita con gato Felix",
        start: new Date(2020, 9, 30, 10, 0, 0), // mes : 0-11      año, mes, dia, hora, minuto, segundo
        end: new Date(2020, 9, 30, 10, 30, 0),
        desc: "Corte de uñas del gatito",
    },

    {
        id: 1,
        title: "Cita con perro Chancho",
        start: new Date(2020, 9, 30, 16, 0, 0), // mes : 0-11      año, mes, dia, hora, minuto, segundo
        end: new Date(2020, 9, 30, 16, 30, 0),
        desc: "Vacuna 3 -Quintuple",
    }
];

const formularioVacio = {
    mascota_id: 0,
    cita_detalles: "",
    cita_fecha: "",
    cita_hora: "",
    cita_fecha_unix: "",
};


//INICIO COMPONENTE

const Citas = (props) => {
    // console.log(props);

    // MODAL
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const [formulario, setFormulario] = useState(formularioVacio);
    const [mascotas, setMascotas] = useState([]);

    const eventoSeleccionado = (e) => {
        console.log(e);
    }

    const slotSeleccionado = (e) => {
        console.log(e);

        let horaString = moment(e.start).format("LT");
        let fechaString = moment(e.start).format("YYYY-MM-DD");

        setFormulario({
            ...formulario,
            cita_fecha: fechaString,
            cita_hora: horaString,
            cita_fecha_unix: moment(e.start).unix(),
        });

        setShow(true);
    }

    const handleChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value,
        });
    };

    const obtenermascotas = async () => {
        getMascotas().then(data => {
            setMascotas(data);
            console.log(data);
        });
    };

    const crearCita = (e) => {
        e.preventDefault();

        const cita = {
            cita_fecha: formulario.cita_fecha_unix,
            cita_estado: true,
            cita_detalles: formulario.cita_detalles,
            mascota_id: formulario.mascota_id,
        }

        postCita(cita).then(data => {
            console.log(data);
            if (data.cita_id) {
                setShow(false);
                setFormulario(formularioVacio);
            }
        });
    };

    useEffect(() => {
        obtenermascotas();
    }, []);

    return (
        <main className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card calendario">
                        <div className="card-body">
                            <Calendar
                                selectable
                                localizer={localizer}
                                events={eventos}
                                startAccessor="start"
                                endAccessor="end"
                                onSelectEvent={eventoSeleccionado}
                                onSelectSlot={slotSeleccionado}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* VENTANA MODAL */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form onSubmit={crearCita}>
                        <div className="form-group">
                            <label htmlFor="">Fecha de Cita:</label>
                            <input className="form-control"
                                type="date"
                                name="cita_fecha"
                                value={formulario.cita_fecha}
                                onChange={handleChange}
                                disabled
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Hora de Cita:</label>
                            <input className="form-control"
                                type="text"
                                name="cita_hora"
                                value={formulario.cita_hora}
                                onChange={handleChange}
                                disabled
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Seleccione Mascota:</label>
                            <select className="form-control"
                                name="mascota_id"
                                value={formulario.mascota_id}
                                onChange={handleChange}
                            >
                                {
                                    mascotas.map(m => (
                                        <option key={m.mascota_id} value={m.mascota_id}>{m.mascota_nombre}</option>
                                    ))
                                }

                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Detalles de Cita:</label>
                            <textarea cols="30" rows="3"
                                className="form-control"
                                placeholder="Ingrese mas detalles"
                                name="cita_detalles"
                                value={formulario.cita_detalles}
                                onChange={handleChange}></textarea>
                        </div>

                        <div className="form-group">
                            <button className="btn btn-danger"
                                type="submit"
                                onClick={() => {
                                    handleClose();
                                }}>
                                Cancelar
                            </button>

                            <button className="btn btn-primary ml-4" type="submit">
                                Crear Cita
                            </button>
                        </div>
                    </form>
                </Modal.Body>

            </Modal>
        </main>
    )
}

export default Citas;

// IMPORTANTE: Para que el calendariose pueda visualizar, se debe de definir una altura.
// en este caso tenemos un archivo citas.css, con la clase calendario

// utilizamos la lbreria momentjs para el formato de fecha y hora
// tambien la fecha en formato unix
