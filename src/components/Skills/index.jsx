import { useState, useEffect } from 'react';
import {
    Container,
    PageWrapper } from "../SharedContainer";
import {
    ProgramingSkillsContainer,
    BiologicalSkillContainer,
    BulletProgrammingElementContainer,
    BulletBiologicalElementContainer,
    TextContainer,
    ExplanationContainer } from "./SkillsPageElements"


const Skills = () => {

    const [programmingSkills, setProgrammingSkills] = useState([]);
    const [biologicalSkills, setBiologicalSkills] = useState([]);
    const [hoveredSkill, setHoveredSkill] = useState(null);

    useEffect(() => {
        fetch('/skillsData.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setProgrammingSkills(data.languages);
                setBiologicalSkills(data.BiologicalProcess);
            })
            .catch(error => {
                console.error('Il y a eu un problème avec votre requête fetch:', error);
            });
    }, []);

    return (
        <PageWrapper>
            <Container>
                <ProgramingSkillsContainer>
                    <TextContainer>Programming :</TextContainer>
                    {programmingSkills.map(skill => (
                        <BulletProgrammingElementContainer
                            key={skill.name}
                            onMouseEnter={() => setHoveredSkill(skill)}
                            onMouseLeave={() => setHoveredSkill(null)}
                        >
                            {skill.name}
                        </BulletProgrammingElementContainer>
                    ))}
                </ProgramingSkillsContainer>
                <ExplanationContainer>
                    {hoveredSkill?hoveredSkill.description:""} 
                </ExplanationContainer>
                <BiologicalSkillContainer>
                    <TextContainer>Biological :</TextContainer>
                    {biologicalSkills.map(skill => (
                        <BulletBiologicalElementContainer
                            key={skill.name}
                            onMouseEnter={() => setHoveredSkill(skill)}
                            onMouseLeave={() => setHoveredSkill(null)}
                        >
                            {skill.name}
                        </BulletBiologicalElementContainer>
                    ))}
                </BiologicalSkillContainer>
            </Container>
        </PageWrapper>
        );
    };

export default Skills;