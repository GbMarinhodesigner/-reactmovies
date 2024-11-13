import axios from "axios";

const API_KEY = 'b353b9eb18659e3b132a18f60bddc41e';
const BASE_URL = 'https://api.themoviedb.org/3'; //endpoint

//https://api.themoviedb.org/3/movie/popular
//https://api.themoviedb.org/3/tv/popular



// Função que irá buscar os itens (filmes e series)
export async function getData(categoria, page,ordem) {
    const endpoint = categoria == 'filmes' ? 'movie' : 'tv';

    const response = await axios.get(`${BASE_URL}/${endpoint}/${ordem}`, {
        params: {
            api_key: API_KEY,
            language: 'pt-BR',
            page: page

        }
    });

    return response.data.results;




}


export async function getDataId(categoria,id) {
    const endpoint = categoria == 'filmes' ? 'movie' : 'tv';

    const response = await axios.get(`${BASE_URL}/${endpoint}/${id}`, {
        params: {
            api_key: API_KEY,
            language: 'pt-BR',
            page: '1'

        }
    });

    return response.data;




}