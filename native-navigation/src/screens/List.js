import React from 'react'
import { Button } from 'react-native';
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

const items = [
    { _id: 1, name: 'native'},
    { _id: 2, name: 'native2'},
    { _id: 3, name: 'native3'}
]

function List({ navigation }) {
    const _onPress = item => {
        navigation.navigate('Detail', { id:item._id, name: item.name})
    };
    return (
        <Container>
            <StyledText>List</StyledText>
            {items.map(item => (
                <Button
                key={item.id}
                title={item.name}
                onPress={() => _onPress(item)}
                />
            ))}
        </Container>
    )
}

export default List;
