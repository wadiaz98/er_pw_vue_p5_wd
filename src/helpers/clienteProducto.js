import axios from 'axios';

const guardar = async (body) => {
    const data = axios.post(`http://localhost:8083/API/V1.0/Inventario/productos`, body).then(r => r.data);
    console.log(data)
}

export const guardarFachada = async (body) => {
    return await guardar(body);
}

const consultar = async (url) => {
    const data = axios.get(url).then(r => r.data)
    console.log(data);
    return data;
}

export const consultarFachada = async (url) => {
    return await consultar(url);
}

const todos = async () => {
    const data = axios.get(`http://localhost:8083/API/V1.0/Inventario/productos`).then(r => r.data);
    console.log(data);
    return data;
}
export const todosFachada = async () => {
    return await todos();
}

const actualizar = async (body) => {
    const data = axios.put(`http://localhost:8083/API/V1.0/Inventario/productos`, body).then(r => r.data);
    console.log(data);
}

export const actualizarFachada = async (body) => {
    return await actualizar(body);
}

const eliminar = async (url) => {
    const data = axios.delete(url).then(r => r.data);
    console.log(data);
}

export const eliminarFachada = async (url) => {
    return await eliminar(url);
}