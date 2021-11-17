import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { Text, View } from 'react-native';
import { TabType } from '../../App';

type Props = DrawerScreenProps<TabType, 'PaginaTab1'>

const Tab1Screen: React.FC<Props> = (props: Props) => {

    return (
        <View>
            <Text>Tab 1</Text>
        </View>
    )
};

export default Tab1Screen;