import styled from 'styled-components';

export const SignUpContainer = styled.div`
  z-index: 1;
  ${props => props.signIn !== true ? ` transform: translateX(100%); opacity: 1; z-index: 5;` : null}`;


export const SignInContainer = styled.div`
 z-index: 2;
 ${props => (props.signIn !== true ? `transform: translateX(100%);` : null)}`;

export const OverlayContainer = styled.div`
z-index: 100;
${props =>
        props.signIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
background-position: 0 0;
${props => (props.signIn !== true ? `transform: translateX(50%);` : null)}
`;

export const OverlayPanel = styled.div`
     position: absolute;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     padding: 0 40px;
     text-align: center;
     top: 0;
     height: 100%;
     width: 50%;
     transform: translateX(0);
     transition: transform 0.6s ease-in-out;
 `;

export const LeftOverlayPanel = styled(OverlayPanel)`
   transform: translateX(-20%);
   ${props => props.signIn !== true ? `transform: translateX(0);` : null}
 `;

export const RightOverlayPanel = styled(OverlayPanel)`
     transform: translateX(0);
     ${props => props.signIn !== true ? `transform: translateX(20%);` : null}
 `;