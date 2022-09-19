import { Input } from "../../components/Common/Input";
import { strings } from "../../localization/strings";
import { GreetingText, HomeContainer, NameText } from "./style";
import { ReactComponent as SearchIcon } from "./../../assets/icons/SearchIcon.svg";
import { Section } from "../../components/Home/Section";
import { Square } from "../../components/Common/Square";

export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <GreetingText>{strings.home.greeting}</GreetingText>
            <NameText>Federico</NameText>
            <div style={{ marginTop: "calc(0.5rem + 1vh)" }}>
                <Input
                    placeholder={"Cerca..."}
                    Icon={SearchIcon}
                    style={{ height: "35px" }}
                />
            </div>
            <Section
                title={"Federico"}
                scrollerStyle={{
                    maxHeight: "calc(10vw + 5rem)",
                    overflowY: "hidden",
                    marginRight: "calc(-1rem - 2vw)",
                    paddingBottom: "calc(3rem - 3vh)",
                    gap: "1.5rem",
                }}
            >
                <Square text="Federico" subText="Cattini" />
                <Square text="Federico" subText="Cattini" />
                <Square text="Federico" subText="Cattini" />
                <Square text="Federico" subText="Cattini" />
                <Square text="Federico" subText="Cattini" />
                <Square text="Federico" subText="Cattini" />
            </Section>
        </HomeContainer>
    );
};
