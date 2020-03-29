import React from 'react';
import PropTypes from 'prop-types';
import add from '../../assets/images/addBlack.svg';
import history from '../../services/history';

import { Button } from './styles';

export default function AddButton({ size, hist }) {
  return (
    <Button type="button" size={size} onClick={() => history.push(hist)}>
      <img src={add} alt="Adicionar" />
    </Button>
  );
}

AddButton.propTypes = {
  size: PropTypes.string,
  hist: PropTypes.string,
};

AddButton.defaultProps = {
  size: '16px',
  hist: '',
};
