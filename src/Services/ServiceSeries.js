import error  from 'jquery';
import Global from '../Global';
import axios from 'axios';

export default class ServiceSeries {
    async obtenerSeries(){
        let url = Global.url;
        let endpoint= "api/series";

        try {
            let response= await axios.get(url+endpoint);
            return response.data;
        } catch (error) {
            throw error;
            
        }
    }
    async obtenerSerie(id){
        let url = Global.url;
        let endpoint= "api/series/"+id;

        try {
            let response= await axios.get(url+endpoint);
            return response.data;
        } catch (error) {
            throw error;
            
        }
    }

    async obtenerPersonajes(id){
        let url = Global.url;
        let endpoint= "api/series/personajesserie/"+id;

        try {
            let response= await axios.get(url+endpoint);
            return response.data;
        } catch (error) {
            throw error;
            
        }
    }
    async obtenerTodosPersonajes(){
        let url = Global.url;
        let endpoint= "api/personajes";

        try {
            let response= await axios.get(url+endpoint);
            return response.data;
        } catch (error) {
            throw error;
            
        }
    }

    async insertarPersonaje(personaje) {
            let url = Global.url;
            let endpoint = "api/personajes";

            try {
                let response= await axios.post(url+endpoint, personaje);
            } catch (error) {
                throw error;
            }
        
    }
    async modificarPersonaje(idSerie, idPersonaje){
        let url = Global.url;
        let endpoint= "api/personajes/"+idPersonaje+"/"+idSerie;

        try {
            let response= await axios.put(url+endpoint);
            return response.data;
        } catch (error) {
            throw error;
            
        }
    }

    

    
}