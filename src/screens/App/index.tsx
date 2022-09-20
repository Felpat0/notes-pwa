import { AppLayout } from "../AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { NoteScreen } from "../Note";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<AppLayout />}>
                        <Route path={"/"} element={<Home />} />
                        <Route
                            path={"/note/:noteId"}
                            element={<NoteScreen />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
