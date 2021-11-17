import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { Text, View } from 'react-native';
import { StackType } from '../../App';

type Props = DrawerScreenProps<StackType, 'NotificationDetail'>

const NotificationDetailScreen: React.FC<Props> = (props: Props) => {

    return (
        <View>
            <Text>Dettaglio notifica</Text>
            <Text>ID = {props.route.params.item.id}</Text>
            <Text>Titolo = {props.route.params.item.titolo}</Text>
            <Text>Descrizione = {props.route.params.item.descrizione}</Text>
        </View>
    )
};

export default NotificationDetailScreen;