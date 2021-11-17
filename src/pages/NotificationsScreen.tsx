import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerType, StackType } from '../../App';

type Props = DrawerScreenProps<StackType & DrawerType, 'Notifications'>

export interface Item {
    id: number
    titolo: string
    descrizione: string
}

const data: Item[] = [
    {
        id: 1,
        titolo: 'titolo 1',
        descrizione: 'Descrizione di Fabio non in inglese'
    },
    {
        id: 2,
        titolo: 'Estero',
        descrizione: 'Fabio non vuole lavorare all\'estero'
    }
]

const NotificationsScreen: React.FC<Props> = (props: Props) => {

    const goHome = () => {
        props.navigation.navigate('Home');
    };

    const goToDettaglio = (item: Item) => {
        props.navigation.navigate('NotificationDetail', {
            item
        });
    };

    const render = ({ item }: { item: Item }) => {
        return (
            <View style={{ padding: 20, borderTopWidth: 1 }}>
                <Text>{item.titolo}</Text>
                <TouchableOpacity onPress={() => goToDettaglio(item)}>
                    <Text style={{ color: 'blue' }}>Dettaglio</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View>
            <Text>Pagina Notifications</Text>

            <FlatList
                data={data}
                renderItem={render}
            />

            <Button
                title="Torna alla Home"
                onPress={goHome}
            />
        </View>
    )
};

export default NotificationsScreen;