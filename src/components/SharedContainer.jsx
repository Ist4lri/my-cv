import styled from '@emotion/styled';

export const PageWrapper = styled.div`
    display: flex;
    justify-content: center; /* Centre horizontalement */
    align-items: center; /* Centre verticalement */
    height: 80vh; /* Prend toute la hauteur de la page */
    background-color: #696969; /* Couleur de fond de la page */
    
`;

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Inconsolata:wght@200..900&family=Lora:ital,wght@0,400..700;1,400..700&display=swap');
    font-family: "Barlow Semi Condensed", sans-serif;
    display: flex;
    flex-direction: ${props => props.flexDirection || 'row'};
    justify-content: space-between; /* Place les éléments à gauche et à droite */
    width: 80%;
    height: 80%;
    padding: 2rem;
    margin: auto; /* Centre horizontalement */
    background: linear-gradient(135deg, black, #696969);
    box-shadow: 1.5px 1.5px 5px rgba(0, 0, 0, 1);
`;