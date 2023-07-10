import styled from 'styled-components';

export const SignUpComponent = styled.div`
  z-index: 1;
  ${props => (props.signIn !== true ? ` transform: translateX(100%); opacity: 1; z-index: 5;` : null)}`;

export const SignInComponent = styled.div`
  z-index: 2;
  ${props => (props.signIn !== true ? `transform: translateX(100%);` : null)}`;

export const OverlayProperty = styled.div`
  z-index: 100;
  ${props => (props.signIn !== true ? `transform: translateX(-100%);` : null)}`;

export const Overlay = styled.div`
  background-position: 0 0;
  ${props => (props.signIn !== true ? `transform: translateX(50%);` : null)}`;

export const OverlayPanelProperty = styled.div`
  padding: 0 40px;`;

export const LeftPanel = styled(OverlayPanelProperty)`
  transform: translateX(-20%);
  ${props => (props.signIn !== true ? `transform: translateX(0);` : null)}`;

export const RightPanel = styled(OverlayPanelProperty)`
  transform: translateX(0);
  ${props => (props.signIn !== true ? `transform: translateX(20%);` : null)}`;