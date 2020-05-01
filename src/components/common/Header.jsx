import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { Bounds } from './Bounds';
import navigationItems from './navigationItems.json';

const HeaderWrapper = styled.header`
    box-shadow: 5px 0px 10px rgba(0,0,0,0.05);
    background: #fff;
    position: sticky;
    top: 0px;
    z-index: 900;
    @media screen and (min-width: 992px) {
        .navbar {
            padding: 0;
        }
    }
    .navbar-toggler {
        padding: 0;
        width: 48px;
        height: 48px;
        outline: 0px;
        border: none;
    }
    .navbar-toggler:hover {
        border-radius: 50%;
        background: var(--tsa-gray-color);
    }
    .navbar-brand {
        white-space: normal;
    }
    @media (max-width: 600px) {
        .navbar-brand {
            max-width: 200px;
        }
    }
    @media (min-width: 992px) {
        .navbar .navbar-nav .nav-link {
            position: relative;
            padding: 1.5rem .5rem;
        }
        .navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show>.nav-link {
            color: var(--tsa-accent-color-one);
        }
        .navbar .navbar-nav .nav-link::after {
            content: '';
            background: var(--tsa-accent-color-one);
            border-radius: 3px 3px 0 0;
            bottom: 0px;
            height: 2.5px;
            left: 0;
            position: absolute;
            right: 0;
            transform: scale(0);
            transition: transform .3s cubic-bezier(0.165, 0.84, 0.44, 1);
            transition: transform .3s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-transform .3s cubic-bezier(0.165, 0.84, 0.44, 1);
            will-change: transform;
        }
        .navbar-light .navbar-nav .active>.nav-link::after, .navbar-light .navbar-nav .nav-link.active::after, .navbar-light .navbar-nav .nav-link.show::after, .navbar-light .navbar-nav .show>.nav-link::after {
            transform: scale(1);
        }
    }
`;

export default function Header(props) {
    const [expanded, setExpanded] = React.useState(false);
    return (
        <HeaderWrapper role="banner">
            <Bounds>
                <Navbar expand="lg" expanded={expanded}>
                    <Navbar.Brand 
                        as={Link}
                        to={props.rootPath}
                        aria-label={props.title}
                        title={props.title}
                    >
                        {props.title}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="tsa-navigation" onClick={() => setExpanded(expanded ? false : "expanded")}>
                        <Hamburger status={expanded} />
                    </Navbar.Toggle>
                    <Navbar.Collapse id="tsa-navigation">
                        <Nav className="ml-auto" onClick={() => setExpanded(false)}>
                            { // navigation menu
                                navigationItems.map((item, index) => {
                                    if (item.external === false) { // internal menu link
                                        return (
                                            <Nav.Link
                                                as={NavLink}
                                                exact
                                                to={item.path}
                                                aria-label={item.name}
                                                title={item.name}
                                            >
                                                {item.name}
                                            </Nav.Link>
                                        );
                                    } else { // external link
                                        return (
                                            <Nav.Link
                                                href={item.path}
                                                aria-label={item.name}
                                                title={item.name}
                                            >
                                                {item.name}
                                            </Nav.Link>
                                        );
                                    }
                                    
                                })
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Bounds>
        </HeaderWrapper>
    );
}
 
function Hamburger(props) { // icon to be display in navbar-toggle button on mobile
    if (props.status === "expanded") { // show close icon if menu is expanded
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
        );
    } else { // show hamburger icon if menu is collapsed
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
        );
    }
}