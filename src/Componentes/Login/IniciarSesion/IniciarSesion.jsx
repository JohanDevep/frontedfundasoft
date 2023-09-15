import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import imageninicio from '../../images/Iniciarses-imagen/InicioImagen.png';
import axios from "axios";

function IniciarSesion() {
    const [nombre, setUser] = useState('');
    const [password, setPwd] = useState('');
    const [error, setError] = useState(false);
    //toast tipo alerta
    const displayLoginError = () => {
        toast.error("!Error al Iniciar Sesión verifica tu usuario o contraseña.!");
    };
    const navigate = useNavigate();
    //constante para validar si hay algun elemento que coincida con la llave principal 
    const token = window.localStorage.getItem("token")
    //Parte del boton 
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!nombre || !password) {
            setError(true)
            return;
        }
        try {
            await axios.post("http://localhost:8080/api/auth/ingresar", { nombre, password })
                .then(response => {
                    window.localStorage.setItem("token", response.data.accessToken)
                    setUser('');
                    setPwd('');
                    setError(false)
                    navigate('/')

                })
                .catch(err => {
                    console.log(err);
                    displayLoginError()
                })
        }
        catch (error) {
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
            <div className="container">
                {token ? (
                    <section>
                        <button onClick={() => navigate("/")} type="button" className="text-white bg-[#9A1B76] hover:bg-[#db43b0] py-1.5 px-5 text-lg font-semibold rounded-full">
                            Ya has iniciado sesion
                        </button>
                    </section>
                ) : (
                    <section>
                        <div className="flex justify-center p-10 gap-24 ">
                        <img className="rounded-lg ml-28 w-[200px] sm:w-[250px] lg:w-[400px] md-show" alt="login it's time" src={imageninicio} />
                            <div className="w-full max-w-md max-h-15">
                                <form className="bg-white shadow-md rounded border-2 px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label
                                            className="block text-[#9A1B76] text-sm font-bold mb-2"
                                            htmlFor="username">
                                            Nombre
                                        </label>
                                        <input placeholder="Nombre"
                                            type={"text"}
                                            name="nombre"
                                            value={nombre}
                                            onChange={(e) => setUser(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-[#9A1B76] text-sm font-bold mb-2" htmlFor="password">
                                            Password
                                        </label>
                                        <input placeholder="Contraseña"
                                            type={"password"}
                                            name="password"
                                            value={password}
                                            onChange={(e) => setPwd(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" />

                                    </div>
                                    <div className="flex items-center justify-between">
                                        <button className="px-3 py-2 text-sm bg-[#9A1B76] hover:bg-[#db43b0] text-white font-bold rounded-full focus:outline-none focus:shadow-outline">
                                            Iniciar Sesion
                                        </button>
                                        <a className="inline-block align-baseline font-bold text-sm text-[#9A1B76] hover:text-[#db43b0]" href="#">
                                            Forgot Password?
                                        </a>
                                    </div>
                                    <div className="py-2 text-lg text-center">
                                        {error && <p>Todos los campos son obligatorios</p>}
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