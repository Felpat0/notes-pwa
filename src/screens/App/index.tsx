import { AppLayout } from "../AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { NoteScreen } from "../Note";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { Toaster } from "react-hot-toast";

function App() {
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
