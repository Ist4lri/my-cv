import {
    Container,
    PageWrapper } from "../SharedContainer";
import { StageContainer, SelectedStageContainer, SelectedStageExplanationsContainer } from "./ExperiencePageElements";
import crbmPicture from "../../assets/logo_CRBM.png"
import bricPicture from "../../assets/horizontal-bric-1.png"
import { useState } from "react";

const Experience = () => {

    const [selectedStage, setSelectedStage] = useState(null);

    const handleStageClick = (stage) => {
        setSelectedStage(selectedStage === stage ? null : stage);
    };


    return (
        <PageWrapper>
                {selectedStage === null ? (
                        <Container>
                            <StageContainer onClick={() => handleStageClick('CRBM')} src={crbmPicture}/>
                            <StageContainer onClick={() => handleStageClick('BRIC')} src={bricPicture}/>
                        </Container>
                    ) : (
                        <Container flexDirection='column'>
                            <SelectedStageContainer
                                src={selectedStage === 'CRBM' ? crbmPicture : bricPicture}
                                onClick={() => handleStageClick(null)}
                            />
                            <SelectedStageExplanationsContainer>
                                {selectedStage === 'CRBM'
                                    ? "During this work placement, I developed a gene identifier matching pipeline to facilitate gene identification in future publications. Developed in Python, this tool makes everyday life easier for the worldwide Ascidian community. I've also provided the initial instructions for displaying it on a web page. "
                                    : "During this placement, I analysed transcriptomic and exomic data from liver tumours developed due to Alpha-1-Antytripsin Deficiency. I was able to isolate the specific transcriptomic signature of liver tumours linked to the Deficiency, using tools hosted on the MCIA and the IFB.  I was then able to visualise the results using R-Studios software.I also began an analysis of the SERPINA1 gene, in order to understand its involvement in liver oncogenesis." }
                            </SelectedStageExplanationsContainer>
                        </Container>
                    )}
        </PageWrapper>
    );
}

export default Experience