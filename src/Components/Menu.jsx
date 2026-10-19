
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import ServiceSeries from '../Services/ServiceSeries'

export default class Menu extends Component {

    service = new ServiceSeries();
    state ={
        series:[]
    }

    obtenerSeries = async() =>{
        let datos = await this.service.obtenerSeries();
        console.log(datos)
        this.setState({
            series : datos
        })
    }

    componentDidMount = async() =>{
        await this.obtenerSeries();
    }
    render() {
        return (
            <div>
                <nav className="bg-blue-600 px-1 py-4 shadow-none">
                    <ul className="flex flex-col items-stretch justify-start gap-4">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `rounded-none px-0 py-0 font-normal transition-colors duration-200 ${
                                        isActive
                                            ? 'bg-transparent text-white'
                                            : 'text-blue-200 hover:bg-blue-700 hover:text-white'
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/insert"
                                className={({ isActive }) =>
                                    `rounded-none px-0 py-0 font-normal transition-colors duration-200 ${
                                        isActive
                                            ? 'bg-transparent text-white'
                                            : 'text-blue-200 hover:bg-blue-700 hover:text-white'
                                    }`
                                }
                            >
                                Nuevo Personaje
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/update"
                                className={({ isActive }) =>
                                    `rounded-none px-0 py-0 font-normal transition-colors duration-200 ${
                                        isActive
                                            ? 'bg-transparent text-white'
                                            : 'text-blue-200 hover:bg-blue-700 hover:text-white'
                                    }`
                                }
                            >
                                Modificar Personaje
                            </NavLink>
                        </li>
                        <li style={{display:"flex", flexDirection:"row",gap:"10px",color:"white" }}>
                            <p>Series </p>
                            <ul name="" id="" className="w-full rounded-md border border-slate-500 bg-[#212529] px-3 py-2 text-white outline-none focus:border-blue-300">
                                {
                                    this.state.series.map((serie, index) => {
                                        return(<li ><NavLink to={"/serie/"+serie.idSerie}>{serie.nombre}</NavLink></li>)
                                    })
                                }
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}