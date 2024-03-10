import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        //console.log('Datos del formulario:', credentials);
    
        axios.post('http://localhost:8000/api/login', credentials)
            .then(response => {
                const { token, rol } = response.data;
    
                // Almacena el token y el rol en localStorage
                localStorage.setItem('token', token);
                localStorage.setItem('rol', rol);
    
                // Redirige al usuario según su rol
                switch (rol) {
                    case 'Admin':
                       navigate('/company/products');
                        break;
                    case 'User':
                       navigate('/products');
                        break;
                    case 'Company':
                       navigate('/products');
                        break;
                    default:
                        console.log('Rol no reconocido');
                }
            })
            .catch(error => {
                if (error.response && error.response.status === 422) {
                    // Manejar errores de validación específicos del servidor
                    console.log('Errores de validación:', error.response.data.errors);
                } else if (error.response && error.response.status === 500) {
                    // Manejar errores internos del servidor de manera más amigable
                    setErrorMessage('Error interno del servidor. Por favor, inténtalo de nuevo más tarde.');
                } else if (error.response && error.response.status === 401) {
                    // Manejar el caso de credenciales incorrectas
                    setErrorMessage('Correo electrónico o contraseña incorrectos. Por favor, verifica tus credenciales.');
                } else {
                    // Otros errores
                    console.error(error);
                }
            });
    };
    

    return (
        <div>
             {errorMessage && (
                <div className="text-red-700 bg-red-300 p-3 rounded">{errorMessage}</div>
            )}
        
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto rounded-lg p-6 bg-white shadow-2xl sm:rounded-3xl dark:border-gray-600 my-7">
            <h1 className="block mb-2 text-center text-2xl font-medium text-gray-900">Inicia Sesión</h1>
            <div className="mb-5 ">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#cacac9" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                    </div>
                    <input type="email" id="email" name="email"  value={credentials.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="femcoders@factoria.org"  />
                </div>
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Contraseña</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#cacac9" d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" /></svg>
                    </div>
                    <input type="password" id="password" name="password" value={credentials.password} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Contraseña"  />
                </div>
            </div>
            <div className="flex justify-center">
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Iniciar sesión
                </button>
            </div>
        </form>
        </div>
    )
}

export default FormLogin