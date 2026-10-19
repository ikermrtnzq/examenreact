import React, { Component } from 'react'
import ServiceSeries from '../Services/ServiceSeries';
import { Navigate } from 'react-router-dom';

export default class ModificarPersonaje extends Component {
    serie = this.props.serie;
    personaje=this.props.personaje;
    state = {
        status: false
    }

    service = new ServiceSeries();
    modificarPersonaje = async (serie, personaje) => {
        this.service.modificarPersonaje(serie,personaje).then((result) =>{
            this.setState({
                status: true
            })
        }).catch((error)=> {
            this.setState({
                mensaje : error.message
            })
        })

    }
    componentDidMount = async() => {
        await this.modificarPersonaje(this.serie, this.personaje)
    }
    render() {
        if(this.state.status){
            return(<Navigate to = {'/personajes/'+this.serie}/>)
        }else{
        }
        
    }
}
