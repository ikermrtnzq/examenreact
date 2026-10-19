import React, { Component } from 'react'
import ServiceSeries from '../Services/ServiceSeries';

export default class DetallePersonaje extends Component {

    personaje = this.props.personaje;
    service = new ServiceSeries()
    state={
        personaje : []
    }
    obtenerPersonaje = async() =>{
        let datos = await this.service.obtenerPersonaje(this.personaje);
        console.log(datos)
        this.setState({
            personaje : datos
        })
    }
    componentDidMount = async() => {
        await this.obtenerPersonaje(this.personaje)
    }

    render() {
        return (
            <div className="mt-5 text-center font-bold">
                <table className="mx-auto mt-[30px] rounded-[10px] border-collapse">
                    <tbody>
                                    <tr >
                                        <td className="border border-[#D3D3D3] p-[10px]"> {this.state.personaje.nombre}  </td>
                                        <td className="border border-[#D3D3D3] p-[10px]"><img className="w-[130px]" src={this.state.personaje.imagen}></img> </td>
                                    </tr>
                    </tbody>
                </table>
            </div> 
        )
    }
}
