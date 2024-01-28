import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import Header from './Header';
import Post from './Post';
import { Colors, Numbers, Space } from '../data/Data';
import Footer from './Footer';

const FeedScreen = (): JSX.Element => {
    return (
        <View style={styles.display}>
            <SafeAreaView >
                <Header />
                <ScrollView style={styles.screen}>
                    <Space height={Numbers.d}/>
                    <Post 
                        username="haripalaniyappin"
                        likes={-2}
                        caption="awaiting trial!"
                        tags={["tax", "fraud", "forever"]}
                    />
                    <Post
                        username="mynamejeff"
                        likes={14193000}
                        caption="Hari was on my island the other day! He was a very naughty guest >:) if yk what I mean"
                        tags={["epstien", "island"]}
                    />
                    <Space height={Numbers.d * 2}/>
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
    }
});

export default FeedScreen;