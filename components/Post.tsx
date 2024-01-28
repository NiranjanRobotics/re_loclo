import { View, Text, StyleSheet } from 'react-native';
import { Colors, Numbers, PostData, formatNum } from '../data/Data';
import Ionicons from '@expo/vector-icons/Ionicons';

const Post = (props: PostData): JSX.Element => {
    return (
        <View style={styles.post}>
            <View style={styles.post_image}></View>
            <View style={styles.post_content}>
                <View style={styles.left}>
                    <View style={styles.data}>
                        <Text style={styles.accented_text}>@{props.username}</Text>
                        <Text style={styles.likes}>{formatNum(props.likes)}&nbsp;likes</Text>
                    </View>
                    <Text style={[styles.caption, { marginTop: Numbers.c }]}>{props.caption}</Text>
                    <Text style={[styles.accented_text, , { marginTop: Numbers.c }]}>
                        {
                            props.tags.map((tag: string) => "#" + tag + "  ")
                        }
                    </Text>
                </View>
                <View style={styles.buttons}>
                    <View style={[styles.button, { marginTop: 0, backgroundColor: Colors.red }]}><Ionicons name="heart-sharp" size={Numbers.g} color={Colors.light} /></View>
                    <View style={styles.button}><Ionicons name="chatbubble-sharp" size={Numbers.g} color={Colors.light} /></View>
                    <View style={styles.button}><Ionicons name="search-sharp" size={Numbers.g} color={Colors.light} /></View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    post: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        padding: Numbers.f,
        backgroundColor: Colors.medium,
        borderRadius: Numbers.f,
        marginTop: Numbers.f,
        borderWidth: Numbers.a,
        borderColor: Colors.dark,
    },

    post_content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: Numbers.f,
    },

    data: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },

    accented_text: {
        color: Colors.accent,
        fontSize: Numbers.f,
        fontWeight: '700',
    },

    post_image: {
        width: '100%',
        height: Numbers.n,
        backgroundColor: Colors.accent,
        borderRadius: Numbers.d,
    },

    likes: {
        fontSize: Numbers.f,
        color: Colors.dark,
        fontWeight: '700',
    },

    caption: {
        fontSize: Numbers.f,
        color: Colors.dark,
    },

    left: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '80%',
    },

    buttons: {
        display: 'flex',
        flexDirection: 'column',
    },

    button: {
        width: Numbers.j,
        height: Numbers.j,
        borderRadius: Numbers.d,
        marginTop: Numbers.c,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.accent,
    },
});

export default Post;
