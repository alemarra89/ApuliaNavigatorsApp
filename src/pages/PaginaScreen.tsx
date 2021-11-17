import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { Text, View } from 'react-native';
import { DrawerType } from '../../App';

type Props = DrawerScreenProps<DrawerType, 'Pagina'>;

const PaginaScreen: React.FC<Props> = (props: Props) => {

    return (
        <View>
            <Text>Pagina coi parametri</Text>
            <Text>Parametro = {props.route.params?.param || 'nessun parametro'}</Text>
        </View>
    )
};

export default PaginaScreen;