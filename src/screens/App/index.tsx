import { AppLayout } from "../AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { NoteScreen } from "../Note";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import toast, { Toaster } from "react-hot-toast";
import { useServiceWorker } from "../../hooks/useServiceWorker";
import { useEffect } from "react";
import { Button } from "../../components/Common/Button";
import { strings } from "../../localization/strings";

function App() {
    const { waitingWorker, showReload, reloadPage } = useServiceWorker();

    useEffect(() => {
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
    }, [waitingWorker, showReload, reloadPage]);

    return (
        <Provider store={store}>
            <Toaster position={"bottom-center"} />
            <BrowserRouter>
                <Routes>
                    <Route path={"/notes-pwa"} element={<AppLayout />}>
                        <Route path={"/notes-pwa/"} element={<Home />} />
                        <Route
                            path={"/notes-pwa/note/:noteId"}
                            element={<NoteScreen />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
