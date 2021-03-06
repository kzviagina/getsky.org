import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';

import { BuyButton, SellButton } from 'components/layout/Button';
import { H2 } from 'components/layout/Text';

const DashboardTitle = ({ userName }) => (
    <Flex justifyContent='space-between' alignItems={'center'} my={4}>
        <Flex alignItems='center' >
            <H2>Hello, {userName}</H2>
        </Flex>
        <Box width={375}>
            <Flex justifyContent='space-between'>
                <BuyButton primary />
                <SellButton  />
            </Flex>
        </Box>
    </Flex>
);

DashboardTitle.propTypes = {
    userName: PropTypes.string,
};

export default DashboardTitle;
