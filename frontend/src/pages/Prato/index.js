import React, { useEffect, useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import LogoSrc from '../../assets/images/logo.svg';
import SaveButton from '../../components/addButtonYellowRetangular';
import api from '../../services/api';

import {
  MainContainer,
  Header,
  Title,
  InputGroup,
  NomeGroup,
  DescricaoGroup,
  CurrencyGroup,
  CurrencyInput,
  ButtonDiv,
} from './styles';

export default function Prato(props) {
  const { register, handleSubmit, errors, reset } = useForm();
  const { idPlace } = props.match.params;

  const [place, setPlace] = useState([]);

  useEffect(() => {
    async function loadPlace() {
      const response = await api.get(`place/${idPlace}`);
      setPlace(response.data.place);
    }
    loadPlace();
  }, [idPlace]);

  const onSubmit = data => {
    api
      .post(`/dishes/${idPlace}/add`, {
        data,
      })
      .then(res => {
        alert(res.data);
      })
      .catch(error => {
        alert(error.response.data);
      });
    reset();
  };

  return (
    <MainContainer>
      <Header>
        <Link to={`/restaurante/${idPlace}`}>
          <FaChevronLeft size={20} color="#FFFFFF" />
        </Link>
        <img src={LogoSrc} alt="share eat" />
      </Header>
      <Title>
        <h1>{place.name}</h1>
      </Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <strong>Nome do prato</strong>
          <NomeGroup>
            <input
              type="text"
              name="name"
              placeholder="Prato"
              maxLength="34"
              ref={register({ required: true })}
            />
            {errors.name && <span>O campo Nome é obrigatório</span>}
          </NomeGroup>

          <strong>Valor</strong>
          <CurrencyGroup>
            <CurrencyInput>
              <div>
                <p>R$</p>
              </div>
              <input
                name="price"
                placeholder="0,00"
                maxLength="6"
                ref={register({ required: true })}
              />
            </CurrencyInput>
            {errors.price && <span>O campo Valor é obrigatório</span>}
          </CurrencyGroup>

          <strong>Descrição do prato</strong>
          <DescricaoGroup>
            <textarea
              type="text"
              name="desc"
              placeholder="Insira uma descrição"
              maxLength="200"
              ref={register({ required: true })}
            />
            {errors.desc && <span>O campo Descrição é obrigatório</span>}
            <p>*A descrição deve conter até 200 caracteres.</p>
          </DescricaoGroup>
        </InputGroup>
        <ButtonDiv>
          <SaveButton />
        </ButtonDiv>
      </form>
    </MainContainer>
  );
}
