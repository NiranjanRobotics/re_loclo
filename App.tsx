import { View } from 'react-native';
import FeedScreen from './components/FeedScreen';
import ProfileScreen from './components/ProfileScreen';

export default function App() {
    return (
        <View>
            <ProfileScreen
                username="haripalaniyappin"
                userid={-1}
                bio={"I am wanted for tax fraud in over twenty two and a half nations. Report me to local authorities if you see me."}
                posts={[
                    {
                        username: "haripalaniyappin",
                        likes: -18,
                        caption: "I enjoyed my time on epstien island a lot!",
                        tags: ["best", "island", "ever"],
                    },
                    {
                        username: "haripalaniyappin",
                        likes: -2,
                        caption: "awaiting trial!!",
                        tags: ["tax", "fraud", "forever"],
                    },
                    {
                        username: "haripalaniyappin",
                        likes: -4,
                        caption: "I am extremely obese",
                        tags: ["cow"],
                    },
                ]}
            />
        </View>
    );
};
