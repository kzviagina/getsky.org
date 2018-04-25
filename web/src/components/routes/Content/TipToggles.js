import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import Icon, { IconMap } from 'components/layout/Icon'

const Label = styled.span`
    margin-right: 5px;
`

const Header = styled(Flex)`
    background-color: ${props => props.theme.colors.lightGray2};
    color: black;
    cursor: pointer;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
    margin-bottom: 5px;

    &:hover {
        background-color: ${props => props.theme.colors.lightGray};
    }
`

class TipToggles extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { expanded: false }
    };

    toggle() {
        this.setState({ ...this.state, expanded: !this.state.expanded })
    };

    render() {
        const { children, label, mt } = this.props;
        const { expanded } = this.state;

        return (
            <Box>
                <Header alignItems={'center'} justifyContent={'space-between'} onClick={this.toggle}>
                    <Label>{label}</Label>
                    <Box mt={mt}>
                        <Icon name={expanded ? IconMap.AngleUp : IconMap.AngleDown} color={'#0072FF'} size={'1x'} />
                    </Box>
                </Header>
                {expanded &&
                    <Box mt={1} ml={'15px'}> {children}</Box>
                }
            </Box>
        );
    };
};

TipToggles.propTypes = {
    label: PropTypes.any,
    mt: PropTypes.string,
};

export default TipToggles;
