import styled from 'styled-components';

import theme from './theme';

const { color } = theme;

export const Padder = styled.section`
  padding: 2em;
`;

export const Inline = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  > * {
    flex: 1
  }
`;

export const Column = styled(Inline)`
  flex-direction: column;
  justify-content: initial;

  h3 {
    flex-grow: 0;
  }
`;

export const Center = styled.div`
  text-align: center;
  margin: 0 auto;
`;

export const Relative = styled.div`
  position: relative;
`;

export const HighlightBorders = styled.div`
  border: 3px solid ${color.alert};
`;
