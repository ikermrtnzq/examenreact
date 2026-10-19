import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
import ServiceSeries from '../Services/ServiceSeries';

export default class NuevoPersonaje extends Component {
    inputNombre= React.createRef();
    inputImagen= React.createRef();
    selectSerie= React.createRef();

    service= new ServiceSeries();

    state = {
        status: false,
        mensaje : null,
        series: []
    }

    mandarPersonaje = (event) => {
        event.preventDefault();
        let opcion = this.selectSerie.current.options;

        let aux = ""
        for(let option of opcion){
            if (option.selected) {
                aux = option.value
                    
            }
        }
        console.log(aux)
        let personaje = {
            nombre :this.inputNombre.current.value,
            imagen: this.inputImagen.current.value,
            idSerie: parseInt(aux)
        }

        console.log(personaje)
        this.service.insertarPersonaje(personaje).then((result) =>{
            this.setState({
                status: true,
                serie: parseInt(aux)
            })
        }).catch((error)=> {
            this.setState({
                mensaje : error.message
            })
        })
    }
    obtenerSeries = async() =>{
        let datos = await this.service.obtenerSeries();
        //console.log(datos)
        this.setState({
            series : datos
        })
    }

    componentDidMount = async() =>{
        await this.obtenerSeries();
    }


    render() {
        if(this.state.status){
            return(<Navigate to = {'/personajes/'+this.state.serie}/>)
        }else{
            return (
                    <div className="m-[30px] text-[20px]">                    
                        <form className="mx-auto mt-[70px] flex w-fit flex-col items-center justify-center rounded-lg border-[10px] border-blue-600 p-5 mt-[40px]">
                            <h1 className="text-blue-600">Insertar Personaje</h1>
                            <label>Nombre:</label>
                            <input className="border border-blue-600" ref={this.inputNombre} type="text" /><br/>
                            <label>Imagen:</label>
                            <input className="border border-blue-600" ref={this.inputImagen} type="text" /><br/>
                            <label>Serie:</label>
                            <select className="rounded border border-gray-300 px-2 py-1" ref={this.selectSerie} name="" id="">
                                {
                                    this.state.series.map((serie, index) => {
                                        return(<option value={serie.idSerie}>{serie.nombre}</option>)
                                    })
                                }
                            </select>
                            <p className="font-bold text-red-600">{this.state.mensaje}</p>
                            <button className="rounded-[5px] border border-blue-600 bg-blue-600 px-[25px] py-2 text-white transition-colors hover:bg-blue-700" onClick={this.mandarPersonaje}>GUARDAR</button>
                        </form>
                    </div>
            )
        }
    }
}
