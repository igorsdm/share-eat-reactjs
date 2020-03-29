import styled from 'styled-components';
import background from '../../assets/images/background.svg';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;

  background: url(${background}) no-repeat center top;
  -webkit-font-smoothing: antialiased !important;
`;

export const Header = styled.div`
  margin-top: 18px;
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    margin: 24px 0 6px 24px;
  }

  span {
    margin: 0 0 16px 24px;
  }
`;

export const ListaRestaurantes = styled.ul`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  list-style: none;
  width: 100%;
  height: 100%;

  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
`;

export const DadosRestaurante = styled.div`
  display: flex;
  flex-direction: column;

  top: 159px;
  left: 24px;
  width: 254px;
  min-height: 75px;
  height: auto;

  background: #333333 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 16px #00000029;
  border-radius: 8px;
  opacity: 1;
  margin-left: 24px;
  padding: 12px 47px 17px 17px;

  &:hover {
    cursor: pointer;
  }
`;
