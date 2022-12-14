import { AppLayout } from "../AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { NoteScreen } from "../Note";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { Toaster } from "react-hot-toast";
import { useServiceWorker } from "../../hooks/useServiceWorker";
import { useEffect } from "react";
import { strings } from "../../localization/strings";
import { inputModal } from "../../components/Common/InputModal";
import { getUsername, setUsername } from "../../storage/user";
import { requestNotificationPermission } from "../../utils/notifications";
import { TestScreen } from "../Test";

function App() {
    const { reloadPage } = useServiceWorker();

    useEffect(() => {
        if (!getUsername()) {
            inputModal({
                message: (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <h1 style={{ margin: 0 }}>
                            {strings.common.insertNameHeading}
                        </h1>
                        <p>{strings.common.insertNameDescription}</p>
                    </div>
                ),
                onConfirm: (name: string) => {
                    setUsername(name);
                    reloadPage();
                },
                style: { padding: "calc(1rem + 1vw)" },
            });
        }
        requestNotificationPermission();
    }, [reloadPage]);

    /* useEffect(() => {
        if (showReload && waitingWorker) {
            toast.success(
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "0rem 1rem",
                    }}
                >
                    <p>{strings.common.newVersion}</p>
                    <Button onClick={() => reloadPage()}>
                        {strings.common.update}
                    </Button>
                </div>,
                {
                    duration: 999999999,
                }
            );
        }
    }, [waitingWorker, showReload, reloadPage]); */

    return (
        <Provider store={store}>
            <Toaster position={"bottom-center"} />
            <BrowserRouter basename={"/notes-pwa"}>
                <Routes>
                    <Route path={"/"} element={<AppLayout />}>
                        <Route path={"/"} element={<Home />} />
                        <Route
                            path={"/note/:noteId"}
                            element={<NoteScreen />}
                        />
                        <Route path={"/test"} element={<TestScreen />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
