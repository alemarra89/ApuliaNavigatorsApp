import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { Text, View } from 'react-native';
import { TabType } from '../../App';

type Props = DrawerScreenProps<TabType, 'PaginaTab3'>

const Tab3Screen: React.FC<Props> = (props: Props) => {

    return (
        <View>
            <Text>Tab 3</Text>
        </View>
    )
};

export default Tab3Screen;