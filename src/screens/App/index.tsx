import { AppLayout } from "../AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<AppLayout />}>
                    <Route path={"/"} element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
