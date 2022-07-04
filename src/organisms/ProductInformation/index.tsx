import React from 'react';
import ButtonContact from '../../atoms/ButtonContact';

import * as S from './styles';

const ProductInformation: React.FC = () => {
  return (
    <S.Container>
      <h1>Design driven development of your web product</h1>
      <h6>
        We are a full servie digital agency that builds immersive user experience.
      </h6>

      <ButtonContact />
    </S.Container>
  )
}

export default ProductInformation;