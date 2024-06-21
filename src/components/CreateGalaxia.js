import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const CREATE_GALAXIA_MUTATION = gql`
  mutation CreateGalaxia(
    $nombre: String!
    $descripcion: String!
    $ubicacion: String!
  ) {
    createGalaxia(nombre: $nombre, descripcion: $descripcion, ubicacion: $ubicacion) {
      id
      nombre
      descripcion
      ubicacion
    }
  }
`;

const CreateGalaxia = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    nombre: '',
    descripcion: '',
    ubicacion: ''
  });

  const [createGalaxia] = useMutation(CREATE_GALAXIA_MUTATION, {
    variables: {
      nombre: formState.nombre,
      descripcion: formState.descripcion,
      ubicacion: formState.ubicacion,
    },
    onCompleted: () => navigate('/')
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createGalaxia();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.nombre}
            onChange={(e) =>
              setFormState({
                ...formState,
                nombre: e.target.value
              })
            }
            type="text"
            placeholder="Nombre de la galaxia"
          />
          <input
            className="mb2"
            value={formState.descripcion}
            onChange={(e) =>
              setFormState({
                ...formState,
                descripcion: e.target.value
              })
            }
            type="text"
            placeholder="Descripción de la galaxia"
          />
          <input
            className="mb2"
            value={formState.ubicacion}
            onChange={(e) =>
              setFormState({
                ...formState,
                ubicacion: e.target.value
              })
            }
            type="text"
            placeholder="Ubicación de la galaxia"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateGalaxia;
