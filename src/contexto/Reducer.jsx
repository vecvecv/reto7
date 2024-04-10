//TYPES

const USUARIO_LOGUEADO = "USUARIO_LOGUEADO"
const TRAER_USUARIO = "TRAER_USUARIO"
const TRAER_PRODUCTOS = "TRAER_PRODUCTOS"

export default function Reducer(state, action){
    const {payload, type} = action
    switch(type){
        case USUARIO_LOGUEADO:
            return{...state, usuarios:payload}
    }
}
