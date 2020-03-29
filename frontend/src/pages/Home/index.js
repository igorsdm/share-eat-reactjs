import React, { useState, useEffect } from 'react';

import LogoSrc from '../../assets/images/logo.svg';
import ButtonAdd from '../../components/addButton/index';
import history from '../../services/history';
import api from '../../services/api';

import {
  MainContainer,
  Header,
  Title,
  ListaRestaurantes,
  DadosRestaurante,
} from './styles';

export default function Home() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    async function loadPratos() {
      const response = await api.get('places');
      setPlaces(response.data.newPlaces);
    }
    loadPratos();
  }, []);
  return (
    <MainContainer>
      <Header>
        <img src={LogoSrc} alt="share eat" />
      </Header>
      <Title>
        <h1>Lugares</h1>
        <span>{places.length} lugares cadastrados</span>
      </Title>
      <ListaRestaurantes>
        {places.map(place => (
          <li key={place.idPlace}>
            <DadosRestaurante
              onClick={() => history.push(`/restaurante/${place.idPlace}`)}
            >
              <strong>{place.name}</strong>
              <span>
                {place.pratos ? place.pratos : 0}{' '}
                {place.pratos === 1 ? 'Prato' : 'Pratos'}
              </span>
            </DadosRestaurante>
            <ButtonAdd size="36px" hist={`/prato/${place.idPlace}`} />
          </li>
        ))}
      </ListaRestaurantes>
    </MainContainer>
  );
}
