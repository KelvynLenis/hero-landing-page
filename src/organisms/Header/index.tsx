import Button from '../../atoms/Button';
import Logo from '../../molecules/Logo';
import Menu from '../Menu';
import * as S from './styles';

const Header = () => {
  return (
    <S.box>
      <Logo />
      <Menu />
      <Button />
    </S.box>
  )
}

export default Header;