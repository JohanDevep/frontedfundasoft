import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function IniciarSesion() {
    const [nombre, setUser] = useState('');
    const [password, setPwd] = useState('');
    const [success, setSuccess] = useState(false);

    //toast tipo alerta
    const displayLoginNotification = () => {
        alert('jajajajaaja perdio')
        toast.success("!Bienvenido!");
    };

    //Limpiar el token cerrar sesion
    const LimpiarToken = () => {
        window.localStorage.removeItem("token")
        window.location.reload(true);
    }

    //constante para validar si hay algun elemento que coincida con la llave principal 
    const token = window.localStorage.getItem("token")

    //Parte del boton 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/api/auth/ingresar", { nombre, password })
            window.localStorage.setItem("token", response.data.accessToken)
            setUser('');
            setPwd('');
            setSuccess(true);
            displayLoginNotification()
            //reloguear la web automaticamente
            window.location.reload(true);

        }
        catch (err) {
            console.log(err);
            alert('Error al Insertar.')
        }
    }
  return (
    <>
    <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
    />
    <div Class="container">
        {token ? (
            <section>
                <button onClick={LimpiarToken} className="btn-modal">
                    Cerrar sesión
                </button>
            </section>
        ) : (
            <section>
                <div className="flex justify-end p-10">
                    <div class="w-full max-w-md max-h-15">
                        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div class="mb-4">
                                <label
                                    class="block text-[#9A1B76] text-sm font-bold mb-2"
                                    for="username">
                                    Nombre
                                </label>
                                <input placeholder="Nombre"
                                    type={"text"}
                                    name="nombre"
                                    value={nombre}
                                    onChange={(e) => setUser(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" />
                            </div>
                            <div class="mb-6">
                                <label class="block text-[#9A1B76] text-sm font-bold mb-2" for="password">
                                    Password
                                </label>
                                <input placeholder="Contraseña"
                                    type={"password"}
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPwd(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" />
                              
                            </div>
                            <div class="flex items-center justify-between">
                                <button class="px-3 py-2 text-sm bg-[#9A1B76] hover:bg-[#db43b0] text-white font-bold rounded-full focus:outline-none focus:shadow-outline" type="button">
                                    Iniciar Sesion
                                </button>
                                <a class="inline-block align-baseline font-bold text-sm text-[#9A1B76] hover:text-[#db43b0]" href="#">
                                    Forgot Password?
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )}
    </div>
</>
  )
}

export default IniciarSesion