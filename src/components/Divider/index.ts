import styled from 'styled-components';

interface DividerProps {
  readonly big?: boolean;
};

export default styled.div<DividerProps>`
  font-size:${props => props.big ? 120 : 70}px
  font-family: bebas_neueregular;
`
