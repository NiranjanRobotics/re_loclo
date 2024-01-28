import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import Header from './Header';
import Post from './Post';
import { Colors, Numbers, UserData, PostData, Space } from '../data/Data';
import Footer from './Footer';

const ProfileScreen = (props: UserData): JSX.Element => {
    return (
        <View style={styles.display}>
            <SafeAreaView>
                <Header />
                <ScrollView>
                    <View style={styles.screen}>
                        <Space height={Numbers.d * 2} />
                        <View style={styles.profile_picture}></View>
                        <Text style={styles.username}>@{props.username}</Text>
                        <Text style={styles.bio}>{props.bio}</Text>
                        <Text style={styles.header}>Wardrobe</Text>
                        <Text style={styles.header}>Posts</Text>
                        {
                            props.posts.map((props: PostData) => {
                                return <Post {...props} />
                            })
                        }
                        <Space height={Numbers.d * 2} />
                    </View>
                </ScrollView>
                <Footer />
                <StatusBar style="auto" />
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    display: {
        backgroundColor: Colors.medium,
        alignItems: 'center',
    },

    screen: {
        backgroundColor: Colors.light,
        paddingHorizontal: Numbers.i,
        minHeight: '100%',
        alignItems: 'center',
    },

    profile_picture: {
        marginTop: Numbers.f,
        width: Numbers.m,
        height: Numbers.m,
        backgroundColor: Colors.accent,
        borderRadius: Numbers.d,
        alignSelf: 'center',
    },

    username: {
        marginTop: Numbers.f,
        textAlign: 'center',
        color: Colors.accent,
        fontSize: Numbers.g,
        fontWeight: '700',
    },

    bio: {
        marginTop: Numbers.f,
        color: Colors.dark,
        fontSize: Numbers.f,
        textAlign: 'center',
    },

    header: {
        marginTop: Numbers.i,
        fontSize: Numbers.g,
        color: Colors.dark,
        textAlign: 'center',
        fontWeight: '700',
    },
});

export default ProfileScreen;
