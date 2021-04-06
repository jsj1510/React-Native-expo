import React from 'react'
import { TouchableOpacity, Text } from 'react-native';

function EventButtons() {
    const _onPressIn = () => console.log('press in\n');
    const _onPressOut = () => console.log('press out\n');
    const _onPress = () => console.log('press \n');
    const _onLongPress = () => console.log('long press\n');
    return (
        <TouchableOpacity
            style={{
                backgroundColor: '@222222',
                padding: 16,
                margin: 10,
                borderRadius: 8,
                }}
                onPressIn={_onPressIn}
                onLongPress={_onLongPress}
                onPressOut={_onPressOut}
                onPress={_onPress}
            >
                <Text style={{ color: 'white', fontSize: 24}}>Press</Text>
        </TouchableOpacity>
    )
}

export default EventButtons
