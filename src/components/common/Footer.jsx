import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Bounds } from './Bounds';

const FooterWrapper = styled.footer`
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 20px 0;
`;

export default class Footer extends React.Component {
    render() {
        return (
            <FooterWrapper>
                <Bounds>
                    Copyright &copy; 2020 - <Link to={this.props.rootPath} title={"Copyright " + this.props.title} aria-label={"Copyright " + this.props.title}>{this.props.title}</Link>
                </Bounds>
            </FooterWrapper>
        );
    }
}