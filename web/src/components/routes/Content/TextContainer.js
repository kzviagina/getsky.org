import React from 'react';
import styled from 'styled-components';
import { Flex } from 'grid-styled';

const TextContainer = styled(Flex)`
    width: ${props => props.theme.container.width};
    max-width: 728px;
`;

TextContainer.defaultProps = {
    mx: 'auto',
};

export default (props) => (
    <TextContainer {...props}>
        {props.children}
    </TextContainer>
);
