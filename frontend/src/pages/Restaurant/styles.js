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
  display: flex;
  width: 100%;
  align-items: baseline;
  margin-left: 45px;
  margin-top: 19px;

  img {
    margin-left: 82px;
  }
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

export const ListaPratos = styled.ul`
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
  }
`;

export const DadosPratos = styled.div`
  display: flex;
  flex-direction: column;

  top: 159px;
  left: 24px;
  width: 312px;
  height: auto;

  border-left: 6px solid #f3aa00;
  background: #333333 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 16px #00000029;
  border-radius: 8px;
  opacity: 1;
  margin: 0 0 16px 24px;
  padding: 12px 17px 17px 17px;
`;

export const HeaderDadosPratos = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 9px;
  strong {
    max-width: 150px;
  }
`;
