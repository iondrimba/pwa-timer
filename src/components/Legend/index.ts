import styled from 'styled-components';

interface LegendProps {
  readonly big?: boolean;
};

export default styled.div<LegendProps>`
  justify-content: space-between;
  display: flex;

  label {
    width:${props => props.big ? 140 : 90}px;
    text-align: center;
  }
`
