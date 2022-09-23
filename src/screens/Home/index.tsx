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
import {
    deleteNote,
    getNotes,
    getTodaysNotes,
    getUsername,
} from "../../utils/storage";
import { useCallback, useMemo, useState } from "react";
import { Note } from "../../types";
import { NoteElement } from "../../components/Common/NoteElement";
import { useNavigate } from "react-router-dom";
import { getNoteRoute } from "../../utils/routing";
import { Square } from "../../components/Common/Square";
import moment from "moment";
import toast from "react-hot-toast";
import { confirmAlert } from "../../components/Common/ConfirmModal";

export const Home: React.FC = () => {
    const navigate = useNavigate();
    const [notes, setNotes] = useState(getNotes());
    const [todayNotes, setTodayNotes] = useState<Note[]>(getTodaysNotes());
    const [searchText, setSearchText] = useState("");

    const filteredNotes = useMemo(
        () =>
            searchText === ""
                ? notes
                : notes.filter((note) => {
                      return note.title
                          .toLowerCase()
                          .includes(searchText.toLowerCase());
                  }),
        [notes, searchText]
    );

    const updateNotes = useCallback(() => {
        setNotes(getNotes());
        setTodayNotes(getTodaysNotes());
    }, []);

    const handleNoteClick = useCallback(
        (note: Note) => {
            navigate(getNoteRoute(note.id));
        },
        [navigate]
    );

    const handleNewNoteClick = useCallback(() => {
        navigate(getNoteRoute("new"));
    }, [navigate]);

    const handleDeleteNote = useCallback(
        (note: Note) => {
            deleteNote(note.id);
            toast.success(strings.toasts.noteDeleted);
            updateNotes();
        },
        [updateNotes]
    );

    const handleNoteTrashClick = useCallback(
        (note: Note) => {
            confirmAlert({
                message: strings.alerts.deleteNote,
                onConfirm: () => handleDeleteNote(note),
                onCancel: () => {},
            });
        },
        [handleDeleteNote]
    );

    return (
        <HomeContainer>
            <GreetingText>{strings.home.greeting}</GreetingText>
            <NameText>{getUsername()}</NameText>
            <div style={{ marginTop: "calc(0.5rem + 1vh)" }}>
                <Input
                    placeholder={strings.common.search}
                    Icon={SearchIcon}
                    style={{ height: "35px" }}
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>
            {searchText === "" && todayNotes.length > 0 && (
                <Section
                    title={"Today's Notes"}
                    scrollerStyle={{
                        maxHeight: "calc(7vw + 5rem)",
                        overflowY: "hidden",
                        marginRight: "calc(-1rem - 2vw)",
                        paddingBottom: "calc(3rem - 3vh)",
                        gap: "1.5rem",
                    }}
                >
                    {todayNotes.map((note) => (
                        <Square
                            text={note.title}
                            subText={
                                note.showDate
                                    ? moment(note.showDate).format("DD/MM/YYYY")
                                    : ""
                            }
                            onClick={() => handleNoteClick(note)}
                            style={{ cursor: "pointer" }}
                            key={note.id}
                        />
                    ))}
                </Section>
            )}
            {/* <ProjectsElement style={{ marginTop: "1.5rem" }} /> */}
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
                    {filteredNotes.map((note) => (
                        <NoteElement
                            note={note}
                            key={note.id}
                            onClick={handleNoteClick}
                            onDelete={handleNoteTrashClick}
                        />
                    ))}
                </NoteElementsContainer>
            </Section>
        </HomeContainer>
    );
};
