import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { DrawerType } from '../../App';

type Props = DrawerScreenProps<DrawerType, 'Home'>

const HomeScreen: React.FC<Props> = (props: Props) => {

    useEffect(() => {
        console.log('creazione componente Home');
    }, []);

    return (
        <View>
            <Text>Homepage ollè</Text>
        </View>
    )
};

export default HomeScreen;