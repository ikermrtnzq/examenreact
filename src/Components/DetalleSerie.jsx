import React, { Component } from 'react'
import ServiceSeries from '../Services/ServiceSeries';
import { NavLink } from 'react-router-dom'


export default class DetalleSerie extends Component {
    state ={
        serie: []
    }
    service = new ServiceSeries();

    obtenerSerie = async(id) => {
        let datos = await this.service.obtenerSerie(id);
        console.log(datos);
        this.setState({
            serie : datos
        })
    }
    componentDidMount = async() => {
        await this.obtenerSerie(this.props.id)
    }
    componentDidUpdate = async(oldProps) =>{
        if(this.props.id != oldProps.id){
            await this.obtenerSerie(this.props.id)
        }
    }
    render() {
        return (
            <div className="flex w-fit flex-col items-center justify-center gap-[10px] border border-gray-300 bg-white p-0 text-center rounded-md">
                <table className="rounded-[10px]">
                    <thead>
                        
                    </thead>
                    <tbody>
                            <th className="border border-gray-200 p-[10px]">
                                <img className="w-[230px] rounded-t-md" src={this.state.serie.imagen} alt="" />
                                <p className="my-3 text-left text-lg font-semibold text-gray-900">{this.state.serie.nombre}</p>
                                <p className="my-2 text-left text-sm text-gray-700">IMDB: {this.state.serie.puntuacion}</p>
                                <NavLink to={"/personajes/"+this.state.serie.idSerie} className='btn block rounded-[5px] border border-blue-600 bg-blue-600 px-[25px] py-2 text-center text-white transition-colors hover:border-blue-700 hover:bg-blue-700' >Personajes</NavLink>
                            </th>
                    </tbody>
                </table>
            </div>
        )
    }
}
