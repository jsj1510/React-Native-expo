import React from 'react'
import { Button } from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
    align-items: center;
`;

const StyledText = styled.Text`
    font-size: 30px;
    margin-bottom: 10px;
`;

function Home() {
    return (
        <Container>
            <StyledText>Home</StyledText>
            <Button title="go to list screen" />
        </Container>
    )
}

export default Home;
