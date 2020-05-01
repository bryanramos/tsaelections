import * as React from 'react';
import styled from 'styled-components';
import { Bounds } from './Bounds';

const HeaderWrapper = styled.header`
    background: #fff;
`;

export default class Header extends React.Component {
    render() {
        return (
            <HeaderWrapper role="banner">
                <Bounds>
                    Header Placeholder
                </Bounds>
            </HeaderWrapper>
        );
    }
}