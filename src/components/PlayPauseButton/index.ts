import styled from 'styled-components';

export default styled.button`
  width: 70px;
  border: none;
  border-radius: 80px;
  height: 70px;
  background-color: ${props => props.theme.primaryColor};
  cursor: pointer;
  box-shadow: 1px 8px 24px -6px rgba(0,0,0,.2);
  display: flex;
  justify-content: center;
  position: relative;

  svg {
    fill: #6288f7;
    width: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ::before {
    content: '';
    position: absolute;
    opacity: .01;
    width: 100%;
    height: 100%;
    border: solid 2px ${props => props.theme.primaryColor};
    border-radius: 50px;
    transition: opacity ${props => props.theme.animationTiming};
    box-shadow: 0px 0px 0px 8px rgba(0,0,0,.2);
    top: 0;
  }

  :disabled {
    opacity: .4;
    cursor: not-allowed;
  }

  :focus {
    outline: 0;
  }

  :focus::before {
    opacity: .57;
  }

  :active {
    box-shadow: 1px 8px 24px -6px rgba(0,0,0,0);
  }

  :hover::before {
    opacity: .17;
  }

  :active::before {
    opacity: .01;
  }
`
