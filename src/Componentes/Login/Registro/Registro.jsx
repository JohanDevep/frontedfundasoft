import React from "react";

function Registro() {
  return (
    <div class="bg-gradient-to-r from-violet-100 to-violet-200"> 
      <div className="flex justify-center p-10">
        <div class="w-full max-w-md max-h-15">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            
            <div class="flex flex-row items-center justify-center lg:justify-center">
              <p class="block text-[#9A1B76] text-lg font-bold mb-2">
                Registrate
              </p>
            </div>
            <div class="mb-4">
              <label
                class="block text-[#9A1B76] text-sm font-bold mb-2"
                for="username"
              >
                Nombre
              </label>
              <input
                placeholder="Nombre"
                type="text"
                class="focus:border-[#9A1B76] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-[#9A1B76] text-sm font-bold mb-2"
                for="Apellido"
              >
                Apellido
              </label>
              <input
                placeholder="Apellido"
                type="text"
                class="focus:border-[#9A1B76] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-[#9A1B76] text-sm font-bold mb-2"
                for="Correo"
              >
                Correo
              </label>
              <input
                placeholder="Correo"
                type="email"
                class="focus:border-[#9A1B76] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-[#9A1B76] text-sm font-bold mb-2"
                for="Telefono"
              >
                Telefono
              </label>
              <input
                placeholder="Telefono"
                type="tel"
                class="focus:border-[#9A1B76] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-[#9A1B76] text-sm font-bold mb-2"
                for="Passdword"
              >
                Passdword
              </label>
              <input
                placeholder="Passdword"
                type="password"
                class="focus:border-[#9A1B76] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div class="flex items-center justify-center">
              <button
                class="px-3 py-2 text-sm bg-[#9A1B76] hover:bg-[#db43b0] text-white font-bold rounded-full focus:outline-none focus:shadow-outline"
                type="button"
              >
                Confirmar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registro;
