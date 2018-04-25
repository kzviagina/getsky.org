import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'grid-styled';

import Container from 'components/layout/Container';
import Brand from 'components/layout/Brand';
import Nav from 'components/layout/Nav';
import UserSubmenu from 'components/layout/UserSubmenu';
import SkyPrice from 'components/layout/SkyPrice';
import theme from 'components/theme';

import { logout } from 'components/routes/Login/actions';

const SubHeaderWrapper = styled(Flex) `
    background: ${props => props.theme.colors.darkBlue};
    height: 38px;
`;

const HeaderWrapper = styled(Flex) `
    height: 102px;
`;

const noAuthNavItems = [
    { url: '/search', name: 'Search', border: false },
    { url: '/contact-us', name: 'Contact', border: false },
    { url: '/faq', name: 'FAQ', border: false },
    { url: '/why-skycoin', name: 'Why Skycoin', border: false },
    { url: '/register', name: 'Sign Up', border: false },
    { url: '/login', name: 'Log In', border: true },
];

const authNavItems = [
    { url: '/search', name: 'Search', border: false },
    { url: '/contact-us', name: 'Contact', border: false },
    { url: '/faq', name: 'FAQ', border: false },
    { url: '/why-skycoin', name: 'Why Skycoin', border: false },
];

const Header = ({ authorized, userInfo, skyPrices, currencies, location, logout }) => (
    <header style={{ overflow: 'hidden' }}>
        <SubHeaderWrapper>
            <Container alignItems={'center'} justifyContent={'space-between'}>
                <SkyPrice skyPrices={skyPrices} />
                {authorized && <UserSubmenu userInfo={userInfo} logout={logout} />}
            </Container>
        </SubHeaderWrapper>
        {location === '/' &&
            <HeaderWrapper alignItems={'center'} justifyContent={'space-between'} style={{ position: 'absolute', width: '100%' }}>
                <Container alignItems={'center'} justifyContent={'space-between'}>
                    <Brand />
                    <Nav navItems={authorized ? authNavItems : noAuthNavItems} />
                </Container>
            </HeaderWrapper>
        }
        {/* Don't merge HeaderWrapper above and HeaderWrapper bellow by adding 'style={location === '/' ? HomePageStyle : OtherPagesStyle}'
            react-snapshot can't process such construction: style={location === '/' ? HomePageStyle : OtherPagesStyle} and layout becomes broken 
         */}
        {location !== '/' &&
            <HeaderWrapper alignItems={'center'} justifyContent={'space-between'} style={{ backgroundColor: theme.colors.black }}>
                <Container alignItems={'center'} justifyContent={'space-between'}>
                    <Brand />
                    <Nav navItems={authorized ? authNavItems : noAuthNavItems} />
                </Container>
            </HeaderWrapper>
        }
    </header>
);

Header.propTypes = {
    authorized: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ login, app, routing }) => {
    return {
        location: routing.location.pathname,
        authorized: login.authorized,
        userInfo: app.userInfo,
        skyPrices: app.skyPrices,
        currencies: app.currencies,
    }
};

export default connect(mapStateToProps, { logout })(Header);
