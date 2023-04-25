import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Navigation} from "./components/Navigation.tsx";
import {HomePage} from "./components/pages/HomePage.tsx";
import {ListPage} from "./components/pages/List.page.tsx";
import {FlatDetailPage} from "./components/pages/FlatDetail.page.tsx";

export const App = () => {
    return (
        <Router>
            <Navigation/>
            <div className="p-24">
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/list'} element={<ListPage/>}/>
                    <Route path={'/history'} element={<HomePage/>}/>
                    <Route path={'/flat-detail/:id'} element={<FlatDetailPage/>}/>
                </Routes>
            </div>
        </Router>
    )
}
