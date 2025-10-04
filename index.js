import {obtenerTodosLosProductos, consultarProducto, agregarProducto, eliminarProducto} from "./productsFunctions.js"

const args = process.argv.slice(2)
const [method, resource, title, price, category] = args

if (method === "GET"){
    if(resource === 'products'){
        obtenerTodosLosProductos()

    }else if(resource.startsWith('products/')){
        const id = resource.split('/')[1]
        consultarProducto(id)
    }else{
        console.log("Error")
    }
}

if(method === "POST" && resource === "products"){
    if(title && price && category){
        agregarProducto(title, price, category)
    }
}

if (method === "DELETE"){
    if(resource.startsWith('products/')){
        const id = resource.split('/')[1]
        eliminarProducto(id)
    }else{
        console.log("Error")
    }
}