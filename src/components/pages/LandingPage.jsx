import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import linkCardsData from '../common/linkCardsData';

const HeadlineWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`;
const Headline = styled.h1`
    font-weight: 600;
    margin: 20px 0;
    @media screen and (max-width: 600px) {
        font-size: 2.0rem;
    }
`;

const RedirectButton = styled.a`
    background: var(--tsa-accent-color-two);
    color: #fff;
    padding: 12px 15px;
    border-radius: 3px;
    transition: 400ms all ease;
    :hover {
        background: var(--tsa-accent-color-one);
        text-decoration: none;
        color: #fff;
    }
`;

const LinkCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 36px;
    margin-top: 20px;
    @media (max-width: 992px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

const Card = styled.a`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: #fff;
    border-radius: 6px;
    color: var(--tsa-text-color-one);
    box-shadow: 5px 0px 10px rgba(0,0,0,0.05);
    position: relative;
    :hover {
        background: var(--tsa-accent-color-one);
        color: #fff;
        box-shadow: 5px 0px 10px rgba(0,0,0,0.13);
        text-decoration: none;
    }
    &#external {
        background: var(--tsa-accent-color-one) !important;
        color: #fff;
    }
    &#external:hover {
        background: #fff !Important;
        color: #000;
    }
`

const CardHeadline = styled.h5`
    font-weight: bold;
`;

const CardDescription = styled.p``;

const CardArrow = styled.div`
    display: flex;
    justify-content: flex-end;
    svg {
        fill: var(--tsa-text-color);
    }
    ${Card}:hover & svg {
        fill: #fff;
    }
    ${Card}#external & svg {
        fill: #fff;
    }
    ${Card}#external:hover & svg {
        fill: var(--tsa-text-color);
    }
`;

export class LandingPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <HeadlineWrapper>
                    <Headline>
                        Welcome Texas TSA
                    </Headline>
                    <RedirectButton
                        href="https://www.texastsa.org/about/"
                        title="Go to main website"
                        aria-label="Go to main website"
                    >
                        Main Website
                    </RedirectButton>
                </HeadlineWrapper>
                <LinkCards>
                    {
                        linkCardsData.map((data, number) => {
                            if(data.external === false) { // internal link
                                return (
                                    <Card 
                                        as={Link}
                                        to={data.path}
                                        aria-label={data.title}
                                        title={data.title}
                                    >
                                        <CardHeadline>{data.title}</CardHeadline>
                                        <CardDescription>{data.description}</CardDescription>
                                        <CardArrow>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                                        </CardArrow>
                                    </Card>
                                );
                                
                            } else { // external link
                                return (
                                    <Card 
                                        href={data.path}
                                        aria-label={data.title}
                                        title={data.title}
                                        id="external"
                                    >
                                        <CardHeadline>{data.title}</CardHeadline>
                                        <CardDescription>{data.description}</CardDescription>
                                        <CardArrow>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                                        </CardArrow>
                                    </Card>
                                );
                            }
                        })
                    }
                </LinkCards>
            </React.Fragment>
        );
    }
}