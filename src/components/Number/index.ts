import styled from 'styled-components';

interface NumberProps {
  readonly big?: boolean;
};

const Number = styled.div<NumberProps>`
  font-size: ${props => props.big ? 120 : 70}px;
  margin: 0 10px;
  font-family: bebas_neueregular;
`

export default Number;
