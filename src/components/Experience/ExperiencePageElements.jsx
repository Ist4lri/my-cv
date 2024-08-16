import styled from '@emotion/styled';

export const StageContainer = styled.img`
    display: flex;
    flex-basis: 50%;
    height: 27%;
    max-width: 50%;
    cursor: pointer;
`;


export const SelectedStageContainer = styled.img`
    top: 20%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -5%);
    width: 40%;
    cursor: pointer;
`;

export const SelectedStageExplanationsContainer = styled.p`
    position: absolute;
    top: 60%; 
    top: 60%; 
    transform: translate(7%,-50%);
    display: flex;
    font-size: 2.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 70%;
    text-align: justify;
    align-items: center;
`;