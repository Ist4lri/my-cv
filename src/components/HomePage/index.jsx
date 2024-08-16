import {  
    PictureContainer, 
    MainInfoContainer, 
    PersonalContainer, 
    MailContainer } from "./HomePageElement";
import {
    Container,
    PageWrapper } from "../SharedContainer";
import mainPicture from "../../assets/Photosjpg.jpg";


const HomePage = () => {
    return (
        <PageWrapper>
            <Container>
                <PictureContainer src={mainPicture} />
                <MainInfoContainer>
                    <PersonalContainer>
                        Pierre-Loïc Gouttebel<br/><br/>Bio-Informaticien<br/><br/>
                            <MailContainer href="mailto:pierreloic.gouttebel@gmail.com">
                                pierreloic.gouttebel@gmail.com
                            </MailContainer>
                            <br/><br/>07.72.24.40.37
                    </PersonalContainer>
                </MainInfoContainer>
            </Container>
        </PageWrapper>
    );
}

export default HomePage