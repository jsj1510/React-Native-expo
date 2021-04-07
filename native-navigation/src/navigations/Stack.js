import React from 'react';
import { createStackNavigater } from '@react-navigation/stack';
import Home from '../screens/Home';
import List from '../screens/List';
import Item from '../screens/Item';

function Stack() {
    return (
        <Stack.Naviator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="List" component={List} />
            <Stack.Screen name="Item" component={Item} />
        </Stack.Naviator>
       
    )
}

export default Stack
