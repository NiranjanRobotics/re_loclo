import { View, StyleSheet } from 'react-native';
import { Colors, Numbers } from '../data/Data';
import Ionicons from '@expo/vector-icons/Ionicons';

const Footer = (): JSX.Element => {
    return (
        <View style={styles.footer}>
            <Ionicons name="home-sharp" size={Numbers.i} color={Colors.dark} />
            <Ionicons name="compass-sharp" size={Numbers.i} color={Colors.dark} />
            <View style={styles.store}><Ionicons name="bag-sharp" size={Numbers.i} color={Colors.light} /></View>
            <Ionicons name="shirt-sharp" size={Numbers.i} color={Colors.dark} />
            <Ionicons name="person-sharp" size={Numbers.i} color={Colors.dark} />
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        display: 'flex',
        flexDirection: 'row',
        minWidth: '100%',
        paddingHorizontal: Numbers.i,
        paddingVertical: Numbers.f,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderTopWidth: Numbers.a,
        borderTopColor: Colors.dark,
    },

    store: {
        backgroundColor: Colors.accent,
        minWidth: Numbers.k,
        minHeight: Numbers.k,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Numbers.d,
    },
});

export default Footer;
