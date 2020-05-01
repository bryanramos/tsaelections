import * as React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import styled from 'styled-components';
import * as Constants from './Constants';
import Header from './components/common/Header';
import { Bounds } from './components/common/Bounds';
import Footer from './components/common/Footer';

const AppContainer = styled.div`
    background: rgb(213, 213, 213);
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const MainContent = styled.main`
    width: 100%;
    flex: 1 0 auto;
`;

export default function App() {
    return (
        <React.Fragment>
            <span style={{display: "none"}}>Created by Bryan Ramos</span>
            <AppContainer>
                <Router>
                    <Header />
                    <MainContent>
                        <Bounds>
                            <Switch>
                                <Route exact={true} path={Constants.RootPath} component={Pages.LandingPage}/>
                            </Switch>
                        </Bounds>
                    </MainContent>
                    <Footer />
                </Router>
            </AppContainer>
        </React.Fragment>
    );
}