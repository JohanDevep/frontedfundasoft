import React, { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import RegistroImg from "./Image/Registro.png"

function Registro() {
    const [error, setError] = useState(false);
    const [user, setUser] = useState({
        nombre: "",
        apellido: "",
        telefono: "",
        correo: "",
        password: "",
    })

    const resetUser = () => {
        setUser({
            nombre: "",
            apellido: "",
            telefono: "",
            correo: "",
            password: "",
        });
    };
    const { nombre, apellido, telefono, correo, password } = user

    const [isLoading, setIsLoading] = useState(false);

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const displayLoginNotification = () => {
        toast.success("Registro Exitoso");
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!nombre || !apellido || !telefono || !correo || !password) {
            setError(true)
            return;
        }
        setIsLoading(true)
        try {
            await axios.post("http://localhost:8080/api/auth/register", user)
                .then(data => {
                    resetUser()
                    setError(false)
                    displayLoginNotification()
                })
                .catch(data => {
                    console.log(data);
                    alert('Error al Insertar.')
                })
            setIsLoading(false)
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
                theme="colored"
            />
            <div className="bg-gradient-to-r">
                <div className="flex justify-center p-10">
                    <img src={RegistroImg} className="h-[603px] w-full rounded-l-lg hidden lg:inline-block" />
                    <div className="w-full max-w-md max-h-15">
                        <form onSubmit={handleSubmit} className="bg-white shadow-md border-2 rounded-r-lg px-8 pt-6 pb-8 mb-4">
                            <div className="flex flex-row items-center justify-center lg:justify-center">
                                <p className="block text-[#9A1B76] text-lg font-bold mb-2">
                                    Registrate
                                </p>
                            </div>
                            <div className="mb-4">
                                <label className="block text-[#9A1B76] text-sm font-bold mb-2" >
                                    Nombre
                                </label>
                                <input
                                    value={nombre}
                                    onChange={(e) => onInputChange(e)}
                                    placeholder="Nombre" type={"text"} name="nombre"
                                    className="focus:border-[#9A1B76] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-[#9A1B76] text-sm font-bold mb-2">
                                    Apellido
                                </label>
                                <input
                                    placeholder="Apellido" type={"text"} name="apellido"
                                    value={apellido}
                                    onChange={(e) => onInputChange(e)}
                                    className="focus:border-[#9A1B76] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-[#9A1B76] text-sm font-bold mb-2">
                                    Telefono
                                </label>
                                <input placeholder="Telefono" type={"text"} name="telefono"
                                    value={telefono}
                                    onChange={(e) => onInputChange(e)}
                                    className="focus:border-[#9A1B76] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-[#9A1B76] text-sm font-bold mb-2">
                                    Correo
                                </label>
                                <input
                                    placeholder="Correo" type={"text"} name="correo"
                                    value={correo}
                                    onChange={(e) => onInputChange(e)}
                                    className="focus:border-[#9A1B76] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-[#9A1B76] text-sm font-bold mb-2">
                                    Password
                                </label>
                                <input
                                    placeholder="Passdword"
                                    type={"password"} name="password"
                                    value={password}
                                    onChange={(e) => onInputChange(e)}
                                    className="focus:border-[#9A1B76] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <button
                                    disabled={isLoading} type="submit"
                                    className="px-3 py-2 text-sm bg-[#9A1B76] hover:bg-[#db43b0] text-white font-bold rounded-full focus:outline-none focus:shadow-outline"
                                >
                                    {isLoading ? "Creando..." : "Registrarme"}
                                </button>
                            </div>
                            <div className="py-2 text-lg text-center">
                                {error && <p>Todos los campos son obligatorios</p>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Registro;