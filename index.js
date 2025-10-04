const args = process.argv.slice(2)
const [method, resource, title, price, category] = args


async function obtenerTodosLosProductos(){
    try{
        const response = await fetch('https://fakestoreapi.com/products',{
            method: "GET"
        })
        const data = await response.json()
        console.log('Se encontro:')
        console.log(JSON.stringify(data, null, 2))
    }catch(error){
        console.log(error)
    }
}

async function consultarProducto(id){
    try{
        const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
            method: "GET"
        })
        const data = await response.json()
        console.log(`Para el ID: ${id}, se encontro:`)
        console.log(data);
    }catch(error){
        console.log(error)
    }
}

async function agregarProducto(title, price, category){
    try{
        const baseProducto = {
            description: '-',
            image: '-'
        }
        const response = await fetch(`https://fakestoreapi.com/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...baseProducto,
                title: title,
                price: parseFloat(price),
                category: category
            })
        })
        const data = await response.json()
        console.log("Agregaste el producto:")
        console.log(data)
    }catch(error){
        console.log(error)
    }
}

async function eliminarProducto(id){
    try{
        const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
            method: "DELETE"
        })
        const data = await response.json()
        console.log(`Se elimino el producto con el ID: ${id}`)
        console.log(data);
    }catch(error){
        console.log(error)
    }
}

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