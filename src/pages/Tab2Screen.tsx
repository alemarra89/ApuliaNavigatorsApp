import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { Text, View } from 'react-native';
import { TabType } from '../../App';

type Props = DrawerScreenProps<TabType, 'PaginaTab2'>

const Tab2Screen: React.FC<Props> = (props: Props) => {

    return (
        <View>
            <Text>Tab 2</Text>
        </View>
    )
};

export default Tab2Screen;