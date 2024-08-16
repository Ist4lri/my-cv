import styled from '@emotion/styled';

export const ProgramingSkillsContainer = styled.ul`
    flex: 1; /* Prend 1 part sur 2 dans le Container */
    flex-basis: 33%;
    justify-content: start;
    text-align: left;
    display: flex;
    flex-direction: column;
`;

export const ExplanationContainer = styled.p`
    flex: 2;
    flex-basis: 33%;
    justify-content: center;
    text-align: left;
    display: flex;
    flex-direction: column;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    font-size: 35px;
`;

export const BiologicalSkillContainer = styled.ul`
    flex: 3; /* Prend 2 parts  */
    flex-basis: 33%;
    text-align: left;
    display: flex;
    flex-direction: column;
`;

export const BulletProgrammingElementContainer = styled.li`
    font-size: 2.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    width: 20%;
`;

export const BulletBiologicalElementContainer = styled.li`
    font-size: 2.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    width: 50%;
`;

export const TextContainer = styled.p`
    font-size: 2.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;