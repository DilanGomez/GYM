import * as react from 'react';
import {Link} from 'react-router-dom';
import React, { useState } from 'react';

export default function RegistroU(){
    const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const handleMostrarMensaje = () => {
    setMostrarMensaje(true);
  };
    
    return(
    
        <div className="flex w-full h-screen">
    <div className="w-full flex items-center justify-center lg:w-1/2">
    <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-100'>


            <h1 className='text-5xl font-semibold'>Registrate para continuar </h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>El registro ayudara a que tengas una mejor experiencia</p>
            <div className='mt-6'>
            <div>
                    <label className='tet-lg font-medium'>Nombre</label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Ingresa tu nombre completo'
                    />
                </div>
                <div>
                    <label className='tet-lg font-medium'>Cedula</label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='solo numeros'
                    />
                </div>
                <div>
                    <label className='tet-lg font-medium'>Usuario</label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Ingresa tu usuario preferido '
                    />
                </div>
                <div>
                    <label className='tet-lg font-medium'>Correo</label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Ingresa tu correo'
                    />
                </div>
                <div>
                <label className='tet-lg font-medium'>Contraseña</label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Ingresa tu correo'
                        type='password'
                    />
                </div>
                    <div className='mt-8 flex flex-col gap-y-4'>
                        <button onClick={handleMostrarMensaje} className='active:scale-[.99] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-violet-500 text-white text-lg font-bold'>Registrarse</button>
                        {mostrarMensaje && (
                        <div className="mt-4 p-2 bg-green-500 text-white rounded-md">
                            ¡Registro exitoso!
                            </div>
                                )}
                        
                        <Link to="/">
                        <button className='active:scale-[.99] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-violet-500 text-white text-lg font-bold'>Devolverse</button>                      
                        </Link>
                    </div>
            </div>
        </div>
    
    </div>
    
    <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
      <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce"/>
      <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"/>
    </div>
</div>


        
    )
}