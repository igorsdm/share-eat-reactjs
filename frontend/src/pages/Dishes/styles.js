import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;

  background: #464646;
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
    max-height: 70px;
  }

  span {
    margin: 0 0 16px 24px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  margin-top: 22px;
  strong {
    font-size: 14px;
  }
  span {
    display: flex;
    flex-direction: column;
    font-family: 'NunitoSans';
    font-weight: normal;
    font-size: 12px;
    color: #ff0000;
  }
`;

export const NomeGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 16px;

  span {
    margin-bottom: -10px;
  }

  input {
    padding-left: 17px;
    font-family: 'NunitoSans';
    font-weight: normal;
    font-size: 16px;
    border: 1px solid #dededf;
    border-radius: 4px;
    opacity: 1;
    width: 311px;
    height: 38px;
  }
`;

export const CurrencyGroup = styled.div`
  margin-bottom: 16px;
  span {
    margin-bottom: -10px;
  }
`;

export const CurrencyInput = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  width: 111px;
  height: 38px;
  background-color: #ffffff;
  border: 1px solid #dededf;
  border-radius: 4px;
  opacity: 1;

  p,
  input {
    font-family: 'NunitoSans';
    font-weight: normal;
    font-size: 16px;
  }

  p {
    margin-left: 17px;
    margin-right: 3px;
  }

  input {
    border: none;
    background-color: transparent;
    width: 63px;
  }
`;

export const DescricaoGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  span {
    margin-bottom: -5px;
  }

  textarea {
    padding-left: 17px;
    padding-top: 8px;
    font-family: 'NunitoSans';
    font-weight: normal;
    font-size: 16px;
    border: 1px solid #dededf;
    border-radius: 4px;
    opacity: 1;
    width: 311px;
    height: 136px;
    resize: none;
  }

  p {
    font-family: 'NunitoSans';
    font-weight: normal;
    font-size: 14px;
    color: #ffffffde;
    margin-top: 5px;
    margin-bottom: 30px;
  }
`;

export const ButtonDiv = styled.div`
  position: fixed;
  top: 570px;
`;
