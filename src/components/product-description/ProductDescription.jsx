import React from 'react'
import Tomate from '../../assets/images/Tomate.svg';

const ProductDescription = () => {
    const product = {
        name: 'Tomate',
        category: 'Frutas y Vegetales',
        description: 'El tomate pera orgánico de Asturias ofrece un sabor único, cultivado en tierras fértiles sin pesticidas ni químicos. Con una textura firme y piel suave, es ideal para ensaladas y platos mediterráneos',
        price: 0.30 ,
      };
    
      return (
        <div className="flex space-x-4 p-4">
          <div className="bg-white shadow-md p-4 rounded-md w-1/2">
            <img src={Tomate} alt="Imagen del Producto" className="w-[70%] h-auto object-cover m-auto rounded-md" />
            <h2 className="text-md font-normal mt-4 p-0 w-1/2 bg-slate-700">{product.name}</h2>
          </div>
    
          {/* Card con detalles del producto */}
          <div className="bg-white shadow-md p-4 rounded-md w-1/2">
            <h3 className="text-lg font-bold mb-2">{product.category}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg font-bold text-blue-500">${product.price.toFixed(2)}</p>
    
            {/* Selector de cantidad */}
            <div className="flex items-center space-x-2 mb-4">
              <label className="text-sm">Cantidad:</label>
              <select className="border p-2 rounded-md">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                {/* Agrega más opciones según sea necesario */}
              </select>
            </div>
    
            {/* Botón "Añadir al carrito" */}
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Añadir al carrito</button>
          </div>
        </div>
  )
}

export default ProductDescription