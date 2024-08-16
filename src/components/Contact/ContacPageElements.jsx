import styled from '@emotion/styled';

export const ContactContainer = styled.ul`
    flex-basis: 100%;
    justify-content: center;
    text-align: left;
    display: flex;
    flex-direction: column;
    list-style-type: none;
`;

export const OneElementContainer = styled.li`
    font-size: 2.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
`;

export const PictureContainer = styled.img`
    max-width: 7%; /* Limite la taille de l'image */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-right: 1.5rem; /* Espace entre l'image et le texte */
`;

export const LinkContainer = styled.a`
    color: #F97316;
    text-transform: lowercase;
`;