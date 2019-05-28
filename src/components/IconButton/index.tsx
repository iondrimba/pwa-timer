import styled from 'styled-components';

const IconButton = styled.button`
  width: 50px;
  border: none;
  height: 50px;
  background-color: rgba(255, 255, 255, 0);
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 90px;
  transition: background-color .2s;
  position: relative;

  svg {
    fill: #fff;
    width: 24px;
  }

  ::before {
    content: '';
    position: absolute;
    background-color: rgba(255, 255, 255, .46);
    opacity: .01;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: opacity .3s;
    box-shadow: 0px 0px 0px 5px rgba(0, 0, 0, 0.25);
    top: 0;
  }

  :hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  :focus {
    outline: 0;
  }

  :focus::before {
    opacity: .57;
  }

  :active::before {
    opacity: .01;
  }
`
export default IconButton;
