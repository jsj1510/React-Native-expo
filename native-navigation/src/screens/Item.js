import React from 'react'
import styled from 'styled-components';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const StyledText = styled.Text`
    font-size: 30px;
    margin-bottom: 10px;
`;

function Item() {
    return (
        <Container>
            <StyledText>Item</StyledText>
            <Button title="go to list screen" />
        </Container>
    )
}

export default Item;
