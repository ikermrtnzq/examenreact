import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Menu from './Menu'
import Home from './Home'
import DetalleSerie from './DetalleSerie';
import Personajes from './Personajes';
import NuevoPersonaje from './NuevoPersonaje';
import Buscador from './Buscador';


export default class Router extends Component {

    render() {
        function SerieElement(){
            let {id} =useParams();
            return(<DetalleSerie id={id}/>)
        }
        function PersonajesElement(){
            let {id} =useParams();
            return(<Personajes id={id}/>)
        }
        return (
        <div>
            <BrowserRouter>
                <Menu/>
                <Routes>
                    <Route path='/' element ={<Home/>}></Route>
                    <Route path='/serie/:id' element ={<SerieElement/>}></Route>
                    <Route path='/personajes/:id' element ={<PersonajesElement/>}></Route>
                    <Route path='/insert' element ={<NuevoPersonaje/>}></Route>
                    <Route path='/update' element ={<Buscador/>}></Route>

                </Routes>
            </BrowserRouter>
        </div>
        )
    }
}
