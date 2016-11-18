import styled from 'styled-components';
import theme from './theme';
import {topbar} from "./topbar";
import {borderProps} from './helpers';

const { color, font } = theme;

export const Panel = styled.article`
  background: white;
  color: ${color.black};
  font-size: ${font.base};
  font-weight: 300;
  ${props => !props.noborder && `border: 1px solid ${color.border}` };
  width: ${props => props.width ? props.width : '100%'};
  ${props => borderProps(props)}
  ${props => props.dark && `
    color: ${color.white};
    background-color: ${color.black};
  `}
`;

export const ScrollView = styled.section`
  overflow: hidden;
  font-family: ${font.family};
  -webkit-overflow-scrolling: touch;
  height: ${props => props.height ? props.height : 'auto'};
  width: ${props => props.width ? props.width : '100%'};
  overflow-y: auto;
  ${props => props.horizontal && `
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    `
  }
`;

export const View = styled(ScrollView)`
  position: absolute;
  top: ${props => props.nobar ? 0 : topbar.height};
  right: 0;
  left: 0;
  bottom: 0;
  font-size: ${font.base};
  ${props => props.bg && `
    background-color: ${props.bg};
  `}
`;

export const Viewport = styled.section`
  font-weight: 400;
  flex: 1;
  height: ${props => props.height ? props.height : '100%'};
  width: ${props => props.width ? props.width : '100%'};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  display: flex;
  font-size: 3em;
  background-color: ${props => props.bg ? props.bg : color.black};
  color: ${color.white};
`;

export const App = styled.div`
  *, & {
    box-sizing: border-box;
  }
`;