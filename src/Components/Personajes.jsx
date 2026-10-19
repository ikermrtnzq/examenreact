import React, { Component } from 'react'
import ServiceSeries from '../Services/ServiceSeries';
import { NavLink } from 'react-router-dom'

export default class Personajes extends Component {
        state ={
            personajes: []
        }
        service = new ServiceSeries();
        
        obtenerPersonajes = async(id) => {
            let datos = await this.service.obtenerPersonajes(id);
                console.log(datos);
            this.setState({
                personajes : datos
            })
        }
        componentDidMount = async() => {
            await this.obtenerPersonajes(this.props.id)
        }
        componentDidUpdate = async(oldProps) =>{
        if(this.props.id != oldProps.id){
            await this.obtenerPersonajes(this.props.id)
        }
    }
    render() {
        return (
            <div className="mt-5 text-center font-bold">
                <NavLink to={"/serie/"+this.props.id} className="mb-[10px] inline-block rounded-[5px] border border-blue-600 bg-blue-600 px-[25px] py-2 text-white transition-colors hover:bg-blue-700">Volver</NavLink>
                <table className="mx-auto mt-[30px] rounded-[10px] border-collapse">
                    <thead>
                        <tr>
                            <th className="border border-blue-600 border-b-[#D3D3D3] bg-blue-600 p-[10px] text-white">Nombre</th>
                            <th className="border border-blue-600 border-b-[#D3D3D3] bg-blue-600 p-[10px] text-white">Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.personajes.map((personaje, index) => {
                                return(
                                    <tr >
                                        <td className="border border-[#D3D3D3] p-[10px]"> {personaje.nombre}  </td>
                                        <td className="border border-[#D3D3D3] p-[10px]"><img className="w-[130px]" src={personaje.imagen}></img> </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>    
        )
    }
}
