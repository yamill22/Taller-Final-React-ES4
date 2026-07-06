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

  if (cargando) return <h2 style={{ textAlign: 'center', fontFamily: 'sans-serif', marginTop: '50px' }}>Cargando Pokémon...</h2>;
  if (error) return <h2 style={{ color: 'red', textAlign: 'center', fontFamily: 'sans-serif', marginTop: '50px' }}>Error: {error}</h2>;

  return (
    <div style={{ padding: '30px', backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#0f172a', marginBottom: '30px' }}>Pokédex Taller API</h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
        gap: '24px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {elementos.map((pokemon) => (
          <Tarjeta key={pokemon.id} elemento={pokemon} />
        ))}
      </div>
    </div>
  );
}