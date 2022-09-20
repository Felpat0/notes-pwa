import { Input } from "../../components/Common/Input";
import { strings } from "../../localization/strings";
import {
    GreetingText,
    HomeContainer,
    NameText,
    NoteElementsContainer,
} from "./style";
import { ReactComponent as SearchIcon } from "./../../assets/icons/SearchIcon.svg";
import { ReactComponent as AddIcon } from "./../../assets/icons/AddIcon.svg";
import { Section } from "../../components/Home/Section";
import { ProjectsElement } from "../../components/Common/ProjectsElement";
import { getNotes } from "../../utils/storage";
import { useCallback, useMemo } from "react";
import { Note } from "../../types";
import { NoteElement } from "../../components/Common/NoteElement";
import { useNavigate } from "react-router-dom";
import { getNoteRoute } from "../../utils/routing";

export const Home: React.FC = () => {
    const navigate = useNavigate();
    const notes = useMemo(() => getNotes(), []);

    const handleNoteClick = useCallback(
        (note: Note) => {
            navigate(getNoteRoute(note.id));
        },
        [navigate]
    );

    const handleNewNoteClick = useCallback(() => {
        navigate(getNoteRoute("new"));
    }, [navigate]);

    return (
        <HomeContainer>
            <div>
                <GreetingText>{strings.home.greeting}</GreetingText>
            </div>
            <NameText>Federico</NameText>
            <div style={{ marginTop: "calc(0.5rem + 1vh)" }}>
                <Input
                    placeholder={"Cerca..."}
                    Icon={SearchIcon}
                    style={{ height: "35px" }}
                />
            </div>
            <Section
                title={"Today's Notes"}
                scrollerStyle={{
                    maxHeight: "calc(7vw + 5rem)",
                    overflowY: "hidden",
                    marginRight: "calc(-1rem - 2vw)",
                    paddingBottom: "calc(3rem - 3vh)",
                    gap: "1.5rem",
                }}
            ></Section>
            <ProjectsElement style={{ marginTop: "1.5rem" }} />
            <Section
                title={"Notes"}
                rightIcon={
                    <AddIcon
                        style={{ cursor: "pointer" }}
                        onClick={handleNewNoteClick}
                    />
                }
            >
                <NoteElementsContainer>
                    {notes.map((note) => (
                        <NoteElement
                            note={note}
                            key={note.id}
                            onClick={handleNoteClick}
                        />
                    ))}
                </NoteElementsContainer>
            </Section>
        </HomeContainer>
    );
};
