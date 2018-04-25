import React from 'react'
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import Container from 'components/layout/Container';
import { H2 } from 'components/layout/Text';
import { SellButton, BuyButton } from 'components/layout/Button';
import bg from './bg.jpg';

const SellBtn = styled(SellButton) `
    width: 280px;
    height: 70px;
    font-size: 18px;
    line-height: 18px;
    background: ${props => props.theme.colors.white};
    border-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};
    font-family: ${props => props.theme.fontBold};
    
    &:hover {
        background: ${props => props.theme.colors.lightBlue};
        border-color: ${props => props.theme.colors.lightBlue};
    }
`;

const BuyBtn = styled(BuyButton) `
    width: 280px;
    height: 70px;
    font-size: 18px;
    line-height: 18px;
`;

const Title = styled(H2) `
    margin-top: 90px;
`;

const Tip = styled.p`
    margin-top: 12px;
    font-size: 18px;
`;

const ActionText = styled.p`
    margin-top: 60px;
    margin-bottom: 0;
    font-size: 18px;
    color: ${props => props.theme.colors.grayBlue};
    text-transform: uppercase;
`;

const BgImg = styled.img`
    position: absolute; 
    width: ${props => props.theme.container.width};
    max-width: ${props => props.theme.container.maxWidth};
    height: 400px;
    z-index: 1;
`;

const Promo = styled.section`
    height: 400px;
    padding-left: ${props => props.theme.spaces[5]}px;
    padding-right: ${props => props.theme.spaces[5]}px;
    color: ${props => props.theme.colors.white};
    text-align: center;
    z-index: 2;
`;

export default () => (
    <Container flexDirection="column" style={{ zIndex: 10000 }} >
        <BgImg src={bg} />
        <Promo>
            <Title>Can't find the advert for you?</Title>
            <Tip>If you can't see a buyer or seller that is offering what you want, you can post your own advert.</Tip>
            <ActionText>I want to advertise to</ActionText>
            <Flex justifyContent={'center'} flexWrap="wrap">
                <Box mx={2} mt={4}>
                    <BuyBtn text={'Buy Skycoin'} primary />
                </Box>
                <Box mx={2} mt={4}>
                    <SellBtn text={'Sell Skycoin'} />
                </Box>
            </Flex>
        </Promo>
    </Container>
);
