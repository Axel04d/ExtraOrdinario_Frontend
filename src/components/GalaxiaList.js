import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_GALAXIAS = gql`
  query {
    galaxias {
      id
      nombre
      descripcion
      ubicacion
    }
  }
`;

const GalaxiaList = () => {
  const { loading, error, data } = useQuery(GET_GALAXIAS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Galaxias</h2>
      <ul>
        {data.galaxias.map(galaxia => (
          <li key={galaxia.id}>
            <h3>{galaxia.nombre}</h3>
            <p>{galaxia.descripcion}</p>
            <p>{galaxia.ubicacion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GalaxiaList;
