import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 105px;
  left: 80px;
  background-color: #daaaff;
  color: #fff;
  width: 154px;
  height: 77px;
  border-radius: 12px;
  text-align: left;
  padding: 11px;
  overflow: hidden;

  small {
    font-size: 15px;
  }

  div {

    display: flex;
    align-items: center;

    span {
      font-size: 22px;
      font-weight: 400;
      margin-right: 5px;
    }
  }

  i {
    width: 154px;
    height: 77px;
    position: absolute;
    border-radius: 50px;

    &.circle1{
      left: 54px;
      top: -50px;
      background-color: transparent;
      border: 1px solid rgba(255, 255, 255, 0.3);;
      transform: rotate(-72.7deg);
    }

    &.circle2{
      left: 110px;
      top: -10px;
      background: rgba(255, 255, 255, 0.3);
      transform: rotate(-10deg);
    }

    &.circle3{
      left: 55px;
      top: 70px;
      background: rgba(255, 255, 255, 0.3);
      transform: rotate(72deg);
    }
  }
`;
