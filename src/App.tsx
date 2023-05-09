import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Navigation} from "./components/Navigation.tsx";
import {Homepage} from "./components/pages/Homepage.tsx";
import {FlatDetailPage} from "./components/pages/FlatDetail.page.tsx";
import {FlatsOverview} from "./components/pages/FlatsOverview.tsx";

export const App = () => {
    return (
        <Router>
            <Navigation/>
            <div className="py-24">
                <Routes>
                    <Route path={'/'} element={<Homepage/>}/>
                    <Route path={'/flats-overview/active-flats'} element={<FlatsOverview/>}/>
                    <Route path={'/flats-overview/history'} element={<FlatsOverview/>}/>
                    <Route path={'/flat-detail/:id'} element={<FlatDetailPage/>}/>
                </Routes>
            </div>
        </Router>
    )
}
