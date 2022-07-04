import React from 'react';
import { CardActivity } from '../../molecules/CardActivity';
import Woman from '../../assets/Woman.svg';

import * as S from './styles';
import CardChart from '../../molecules/CardChart';

const ProductStats: React.FC = () => {
  return (
    <S.Container>
      <CardActivity />
      <img src={Woman} alt="Woman" />

      <CardChart />
    </S.Container>
  )
}

export default ProductStats;