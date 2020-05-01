import * as React from 'react';
import styled from 'styled-components';

const BoundsWrapper = styled.div`
    max-width: var(--tsa-bounds-width);
    margin: 0px;
    margin: 0 auto;
`;

export const Bounds = (props) => (
    <BoundsWrapper>
        {props.children}
    </BoundsWrapper>
)