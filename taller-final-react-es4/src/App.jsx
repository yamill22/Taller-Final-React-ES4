import { useState, useEffect } from 'react';
import Tarjeta from './components/Tarjeta';

export default function App() {
  const [elementos, setElementos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerPokemons = async () => {
      try {
        setCargando(true);
        const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
        
        if (!respuesta.ok) {
          throw new Error('Hubo un problema al conectar con la PokeAPI');
        }

        const datos = await respuesta.json();

        const listaTransformada = datos.results.map((pokemon) => {
          const urlPartes = pokemon.url.split('/');
          const id = urlPartes[urlPartes.length - 2];
          return {
            id: id,
            name: pokemon.name,
            imagen: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
          };
        });

        setElementos(listaTransformada);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    obtenerPokemons();
  }, []);

  if (cargando) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-[#e6f7ef] gap-4">
        <div className="w-16 h-16 border-4 border-slate-700 rounded-full relative animate-spin before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[26px] before:bg-[#107b80] before:border-b-4 before:border-slate-700 before:rounded-t-full after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-4 after:h-4 after:bg-white after:border-4 after:border-slate-700 after:rounded-full"></div>
        <h2 className="text-xl font-semibold text-[#0d5e61] tracking-wide animate-pulse">
          Cargando Pokédex...
        </h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#e6f7ef]">
        <h2 className="text-xl font-bold text-red-600 bg-white px-6 py-3 rounded-2xl shadow-sm border border-red-200">Error: {error}</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#e6f7ef] p-6 md:p-10 font-sans text-slate-700">
      <div className="max-w-6xl mx-auto">
        
        <header className="text-center mb-10">
          <h1 className="text-3xl font-black text-[#0f6c70] tracking-widest uppercase mb-1">
            Pokédex <span className="text-slate-400 font-light text-xl font-mono lowercase tracking-normal"></span>
          </h1>
          <p className="text-lg font-medium text-[#107b80] tracking-wide">
            Conoce a los Pokémon
          </p>
        </header>

        <main className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {elementos.map((pokemon) => (
            <Tarjeta key={pokemon.id} elemento={pokemon} />
          ))}
        </main>

      </div>
    </div>
  );
}