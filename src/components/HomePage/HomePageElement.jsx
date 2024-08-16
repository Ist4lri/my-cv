import styled from '@emotion/styled';

export const PictureContainer = styled.img`
    flex: 1; /* Prend 1 part sur 2 dans le Container */
    max-width: 60%; /* Limite la taille de l'image */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-right: 1.5rem; /* Espace entre l'image et le texte */
`;

export const MainInfoContainer = styled.div`
    flex: 2; /* Prend 2 parts sur 3 dans le Container */
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
`;

export const PersonalContainer = styled.h1`
    font-size: 2.5rem; 
    font-weight: 700;
    letter-spacing: 1.5px; /* Espacement des lettres pour un effet moderne */
    text-transform: uppercase; /* Met le texte en majuscules */
    margin-bottom: 1rem; /* Espacement en bas */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); /* Ajoute une légère ombre au texte */
`;

export const MailContainer = styled.a`
    color: #F97316;
    text-transform: lowercase;
`;