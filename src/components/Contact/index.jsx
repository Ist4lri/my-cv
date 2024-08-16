import { Container, PageWrapper } from "../SharedContainer";
import { ContactContainer, OneElementContainer, PictureContainer, LinkContainer } from "./ContacPageElements";
import LinkedinLogo from "../../assets/LI-In-Bug.png"
import GmailLogo from "../../assets/Gmail.png"
import GithubLogo from "../../assets/github-mark-white.png"
import PhoneLogo from "../../assets/icons8-téléphone-apple.png"


const Contact = () => {
    return (
        <PageWrapper>
            <Container>
                <ContactContainer>
                    <OneElementContainer>
                        <a href="https://www.linkedin.com/in/pierre-loïc-gouttebel-97b889204/" target="_blank" rel="noopener noreferrer">
                        <PictureContainer src={LinkedinLogo}/>
                        </a>
                        <LinkContainer href="https://www.linkedin.com/in/pierre-loïc-gouttebel-97b889204/" target="_blank" rel="noopener noreferrer">
                            https://www.linkedin.com/in/pierre-loïc-gouttebel-97b889204/
                        </LinkContainer>
                    </OneElementContainer>
                    <OneElementContainer>
                        <a href="mailto:pierreloic.gouttebel@gmail.com">
                        <PictureContainer src={GmailLogo}/>
                        </a>
                        <LinkContainer href="mailto:pierreloic.gouttebel@gmail.com">
                        pierreloic.gouttebel@gmail.com
                        </LinkContainer>
                    </OneElementContainer>
                    <OneElementContainer>
                        <a href="tel:+33772244037">
                        <PictureContainer src={PhoneLogo}/>
                        </a>
                        <LinkContainer href="tel:+33772244037">
                        07.72.24.40.37
                        </LinkContainer>
                    </OneElementContainer>
                    <OneElementContainer>
                        <a href="https://github.com/Ist4lri">
                        <PictureContainer src={GithubLogo}/>
                        </a>
                        <LinkContainer href="https://github.com/Ist4lri">
                        https://github.com/Ist4lri
                        </LinkContainer>
                    </OneElementContainer>
                </ContactContainer>
            </Container>
        </PageWrapper>
    )
};

export default Contact;

