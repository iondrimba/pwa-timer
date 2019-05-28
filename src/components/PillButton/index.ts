import styled from 'styled-components';

export default styled.button`
  background-color: white;
  color: #3549b3;
  border-radius: 20px;
  width: 110px;
  cursor: pointer;
  border: none;
  padding: 10px 5px;
  width: 110px;
  margin: 5px 5px;
  position: relative;
  transition: background-color .3s, color .3s;

  ::before {
    content: '';
    position: absolute;
    background-color: rgba(255, 255, 255, 0);
    opacity: .01;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: opacity .3s;
    box-shadow: 0px 0px 0px 3px rgba(255, 255, 255, 1);
    top: 0;
    left: 0;
  }

  :hover, :focus {
    background-color: #3549b3;
    color: #fff;
  }

  :focus {
    outline: 0;
  }

  :focus::before {
    opacity: .5;
  }

  :active::before {
    opacity: .01;
  }
`
