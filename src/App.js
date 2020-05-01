import * as React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import styled from 'styled-components';
import * as Constants from './Constants';
import Header from './components/common/Header';
import { Bounds } from './components/common/Bounds';
import * as Pages from './components/pages';
import Footer from './components/common/Footer';

const AppContainer = styled.div`
    background: var(--tsa-gray-color);
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const MainContent = styled.main`
    width: 100%;
    flex: 1 0 auto;
    padding: 20px 0;
`;

export default function App() {
    return (
        <React.Fragment>
            <span style={{display: "none"}}>Created by Bryan Ramos</span>
            <AppContainer>
                <Router>
                    <Header 
                        title={Constants.Sitename}
                        rootPath={Constants.RootPath} 
                    />
                    <MainContent>
                        <Bounds>
                            <Switch>
                                <Route exact={true} path={Constants.RootPath} component={Pages.LandingPage}/>
                                <Route exact={true} path={Constants.BODElections} component={Pages.BODElections} />
                                <Route exact={true} path={Constants.OfficerElections} component={Pages.OfficerElections} />
                                <Route exact={true} path={Constants.OfficerElectionsInstructions} component={Pages.OfficerElectionsInstructions} />
                                <Route exact={true} path={Constants.OfficerCandidates} component={Pages.OfficerCandidates} />
                                <Route component={Pages.NoMatch} />
                            </Switch>
                        </Bounds>
                    </MainContent>
                    <Footer 
                        title={Constants.Sitename}
                        rootPath={Constants.RootPath}
                    />

                </Router>
            </AppContainer>
        </React.Fragment>
    );
}