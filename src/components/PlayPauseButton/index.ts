import styled from 'styled-components';

export default styled.button`
  width: 70px;
  border: none;
  border-radius: 80px;
  height: 70px;
  background-color: #fff;
  cursor: pointer;
  box-shadow: 1px 8px 24px -6px rgba(0,0,0,.2);
  display: flex;
  justify-content: center;
  position: relative;

  svg {
    fill: #6288f7;
    width: 30px;
    margin-left: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
