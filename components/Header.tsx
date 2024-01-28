import { View, StyleSheet } from 'react-native';
import { Colors, Numbers } from '../data/Data';
import Ionicons from '@expo/vector-icons/Ionicons';

const Header = (): JSX.Element => {
    return (
        <View style={styles.header}>
            <View style={styles.profile_picture}></View>
            <View style={styles.icons}>
                <Ionicons name="settings-sharp" size={Numbers.i} color={Colors.dark} style={{ paddingRight: Numbers.f }} />
                <Ionicons name="notifications-sharp" size={Numbers.i} color={Colors.dark} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        minWidth: '100%',
        paddingHorizontal: Numbers.i,
        paddingVertical: Numbers.f,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: Numbers.a,
        borderBottomColor: Colors.dark,
    },

    icons: {
        display: 'flex',
        flexDirection: 'row',
    },

    profile_picture: {
        width: Numbers.k,
        height: Numbers.k,
        backgroundColor: Colors.accent,
        borderRadius: Numbers.d,
    },
});

export default Header;
