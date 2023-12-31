import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase'; 


const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      
    } catch (error) {
      console.error(error);
      
    }
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-100'>
          <h1 className='text-5xl font-semibold'>Bienvenido</h1>
          <p className='font-medium text-lg text-gray-500 mt-4'>En esta app podrás ver datos del gimnasio</p>
          <div className='mt-6'>
            <div>
              <label className='text-lg font-medium'>Correo</label>
              <input
                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                placeholder='Ingresa tu correo'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className='text-lg font-medium'>Contraseña</label>
              <input
                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                placeholder='Ingresa tu contraseña'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-8 flex justify between items-center">
              <div>
                <input
                  type='checkbox'
                  id="remember"
                />
                <label className='ml-2 font-medium text-base' htmlFor="remember">Recordarme</label>
              </div>
              <Link to="/Olvidaste">
                <button className='font-medium text-base text-blue-500'>¿Olvidaste tu contraseña?</button>
              </Link>
            </div>
            <div className='mt-8 flex flex-col gap-y-4'>
              <div className='mt-8 flex flex-col gap-y-4'>
                <button
                  onClick={handleLogin}
                  className='active:scale-[.99] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-blue-500 text-white text-lg font-bold'
                >
                  Iniciar
                </button>
              </div>
              <Link to="/registro">
                <div className='mt-8 flex flex-col gap-y-4'>
                  <button className='active:scale-[.99] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-violet-500 text-white text-lg font-bold'>Registrarse</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce" />
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
      </div>
    </div>
  );
};

export default Form;
