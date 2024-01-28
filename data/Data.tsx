import { View } from 'react-native';

const Colors = {
    light: '#FAEDCD',
    dark: '#9D6F62',
    accent: '#57886C',
    medium: '',
    red: '#C33C54',
};

Colors.medium = Colors.medium == '' ? Colors.light : Colors.medium;

const Numbers = {
    a: 2,
    b: 3,
    c: 6,
    d: 10,
    e: 12,
    f: 15,
    g: 20,
    h: 24,
    i: 30,
    j: 36,
    k: 45,
    l: 60,
    m: 120,
    n: 240,
} as const;

const formatNum = (value: number): string => {
    if (value < 1000) {
        return value.toString();
    } else if (value >= 1000 && value < 1_000_000) {
        return (value / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    } else if (value >= 1_000_000 && value < 1_000_000_000) {
        return (value / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (value >= 1_000_000_000 && value < 1_000_000_000_000) {
        return (value / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
    } else if (value >= 1_000_000_000_000 && value < 1_000_000_000_000_000) {
        return (value / 1_000_000_000_000).toFixed(1).replace(/\.0$/, "") + "T";
    }

    return value.toString();
};

interface PostData {
    username: string;
    likes: number;
    caption: string;
    tags: string[];
};

interface UserData {
    username: string;
    userid: number;
    bio: string;
    posts: PostData[];
};

const Space = (props: { height: number }): JSX.Element => <View style={{ height: props.height }}></View>;

export { Colors, Numbers, Space, PostData, UserData, formatNum };
