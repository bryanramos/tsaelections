import * as React from 'react';
import styled from 'styled-components';
import { Bounds } from './Bounds';

const FooterWrapper = styled.div`
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 20px 0;
`;

export default class Footer extends React.Component {
    render() {
        return (
            <FooterWrapper>
                <Bounds>
                    Footer Placeholder
                </Bounds>
            </FooterWrapper>
        );
    }
}