import React, { useState, useEffect } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import LogoSrc from '../../assets/images/logo.svg';
import ButtonAdd from '../../components/addButtonYellow/index';
import api from '../../services/api';

import {
  MainContainer,
  Header,
  Title,
  ListaPratos,
  DadosPratos,
  HeaderDadosPratos,
} from './styles';

export default function Restaurant(props) {
  const [pratos, setPratos] = useState([]);
  const [place, setPlace] = useState([]);
  const { idPlace } = props.match.params;

  useEffect(() => {
    async function loadPratos() {
      const response = await api.get(`dishes/${idPlace}`);
      setPratos(response.data.pratos);
    }
    loadPratos();
  }, [idPlace]);

  useEffect(() => {
    async function loadPlace() {
      const response = await api.get(`place/${idPlace}`);
      setPlace(response.data.place);
    }
    loadPlace();
  }, [idPlace]);

  return (
    <MainContainer>
      <Header>
        <Link to="/">
          <FaChevronLeft size={20} color="#FFFFFF" />
        </Link>
        <img src={LogoSrc} alt="share eat" />
      </Header>
      <Title>
        <h1>{place.name}</h1>
        <span>
          {pratos ? pratos.length : 0}{' '}
          {pratos && pratos.length === 1 ? 'Prato' : 'Pratos'}
        </span>
      </Title>
      <ListaPratos>
        {pratos ? (
          pratos.map((prato) => (
            <li key={prato.id_prato}>
              <DadosPratos>
                <HeaderDadosPratos>
                  <strong>{prato.nome}</strong>
                  <strong>R$ {prato.preco}</strong>
                </HeaderDadosPratos>
                <span>{prato.descricao}</span>
              </DadosPratos>
            </li>
          ))
        ) : (
          <DadosPratos>
            <span>Não há pratos cadastrados para este restaurante</span>
          </DadosPratos>
        )}
      </ListaPratos>
      <ButtonAdd size="64px" hist={`/prato/${place.id_place}/add`} />
    </MainContainer>
  );
}
