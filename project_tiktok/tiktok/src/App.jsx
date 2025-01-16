import{Fragment} from'react';
// import './components/GlobalStyles/';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes/index';
import { DefaultLayout } from '~/components/Layout';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    
                    {publicRoutes.map((route, index) => {
                        // const Layout = route.layout === null ? Fragment : DefaultLayout;
                        // const Page = route.Component;


                        // sử lý logic
                        const Page = route.Component;

                        let Layout = DefaultLayout;

                        if(route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment
                        }

                        console.log(route);
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
