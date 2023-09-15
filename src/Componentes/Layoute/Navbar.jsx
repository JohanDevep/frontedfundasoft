import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import logonav from '../images/logo-nav/logo.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  return (

    <nav className="bg-white dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <a className="flex items-center">
          <img src={logonav} className="h-16 sm:h-16 md:h-16 lg:h-20 xl:h-24" />
        </a>
        <div className="block lg:hidden ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400 bg-gray-200 hover:bg-gray-300">
            <svg
              className={`fill-current h-8 w-8 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-8 w-8 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div className={`items-center block justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 p-5">            
            <li className='py-2 lg:py-0 text-lg text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex  lg:pt-0'>
              <a href="/" className="md:bg-transparent md:text-[#9A1B76] text-[#9A1B76] hover:text-[#db43b0] md:p-0 md:hover:text-[#db43b0]">
                Inicio
              </a>
            </li>
            <li className='py-2 lg:py-0 text-lg text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex lg:pt-0'>
              <a href="/cursos" className="md:bg-transparent md:text-[#9A1B76] text-[#9A1B76] hover:text-[#db43b0] md:p-0 md:hover:text-[#db43b0]">
                Cursos
              </a>
            </li>
            <li className='py-2 lg:py-0 text-lg text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex  lg:pt-0'>
              <a href="/instructores" className="md:bg-transparent md:text-[#9A1B76] text-[#9A1B76] hover:text-[#db43b0] md:p-0 md:hover:text-[#db43b0]">
                Instructores
              </a>
            </li>
            <li className='py-2 lg:py-0 text-lg text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex  lg:pt-0'>
              <a href="/contactos" className="md:bg-transparent md:text-[#9A1B76] text-[#9A1B76] hover:text-[#db43b0] md:p-0 md:hover:text-[#db43b0]">
                Contactos
              </a>
            </li>
            <li className='py-2 lg:py-0 text-center'>
              <button onClick={() => navigate("/login")} type="button" className="text-white bg-[#9A1B76] hover:bg-[#db43b0] py-1.5 px-5 text-lg font-semibold rounded-full">Iniciar Sesion</button>
            </li>
            <li className='py-2 lg:py-0 text-center'>
              <button onClick={() => navigate("/registrarme")} type="button" className="text-white bg-[#9A1B76] hover:bg-[#db43b0] py-1.5 px-5 text-lg font-semibold rounded-full">Registrarme</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar