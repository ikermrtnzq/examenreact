import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Jugadores from './ModificarPersonaje';
import ServiceSeries from '../Services/ServiceSeries';
import ModificarPersonaje from './ModificarPersonaje';
import DetallePersonaje from './DetallePersonaje';

export default class Buscador extends Component {
    service = new ServiceSeries()
    selectPersonaje= React.createRef();
    selectSerie = React.createRef()
        state ={
            series : [],
            personajes: [],
            serie: "",
            status: false,
            personaje : "",
            statusPersonaje: false
        }
    
        obtenerSeries = async() =>{
            let datos = await this.service.obtenerSeries();
            let datos2 = await this.service.obtenerTodosPersonajes();

            //console.log(datos)
            this.setState({
                series : datos,
                personajes: datos2
            })
        }

        buscar = async (event) => {
            event.preventDefault();
            let opcionSerie = this.selectSerie.current.options;
            let auxSerie = ""
            for(let option of opcionSerie){
                if (option.selected) {
                    auxSerie = option.value
                }
            }
            let opcionPersonaje = this.selectPersonaje.current.options;
            let auxPersonaje = ""
            for(let option of opcionPersonaje){
                if (option.selected) {
                    auxPersonaje = option.value
                }
            }
            this.setState({
                serie : auxSerie ,
                status: true,
                personaje : auxPersonaje
            })

            console.log(auxPersonaje)
            console.log(auxSerie)
        }

    
        componentDidMount = async () =>{
            await this.obtenerSeries();
        }
    render() {
        return (
            <div className="m-[30px] text-[20px]">                    
                <form className="mx-auto mt-[40px] flex w-fit flex-col items-center justify-center rounded-lg border-[10px] border-blue-600 p-5">
                    <h1 className="text-blue-600">Modificar Personajes</h1>
                    <label>Nombre:</label>
                    <select className="rounded border border-gray-300 px-2 py-1" ref={this.selectPersonaje} name="" id="">
                    {
                        this.state.personajes.map((personaje, index)=>{
                            return(
                                <option key={index} value={personaje.idPersonaje}>{personaje.nombre}</option>
                            )
                        })
                    }
                    </select><br/>
                    <label>Serie:</label>
                    <select className="rounded border border-gray-300 px-2 py-1" ref={this.selectSerie} name="" id="">
                    {
                        this.state.series.map((serie, index)=>{
                            return(
                                <option key={index} value={serie.idSerie}>{serie.nombre}</option>
                            )
                        })
                    }
                    </select><br/>
                    <p className="font-bold text-red-600">{this.state.mensaje}</p>
                    <button className="rounded-[5px] border border-blue-600 bg-blue-600 px-[25px] py-2 text-white transition-colors hover:bg-blue-700" onClick={this.buscar}>Buscar</button>
                </form>
                {
                    this.state.status == true &&
                    (<ModificarPersonaje serie={this.state.serie} personaje={this.state.personaje}/>)
                }
                {
                    this.state.statusPersonaje == true &&
                    (<DetallePersonaje personaje={this.state.personaje}/>)
                }
            </div>
        )
    }
}
