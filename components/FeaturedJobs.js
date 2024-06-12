import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import vector icons

const iconSize = 20; // Icon size for better visibility
const iconsPerRow = 6; // Number of icons per row and column for a tighter fit

const FeaturedJobs = () => {
    const jobs = [
        {
            title: 'Software Engineer',
            company: 'Facebook',
            salary: '$180,000/y',
            location: 'Accra, Ghana',
            logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AgP8Adv8AeP8Ae//c6v/T5P8Afv++1v+Vvv8AdP8Aev/K3v/D2f+40/8Ac//p8v9kpP+Ouv+ry//l8P8niv/v9v+oyf93rf9Jl/8zjv8Xhv98sP9+sv/P4v9bn/8AbP+gxf9fof9mKvi6AAAEi0lEQVR4nO2d63KiQBBGgZkEBVTAG6LuJr7/Qy6a3dqYQGjG7rlY3/ltTeXUkJ57dxQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKHbFvm4uh/aY5gkLSsfb9lCd5uti51ouihanY6ZyrdM0jTnp2tNaqex4Klzqbc4q0axi39FJft448iurTFrvr2RWlS4Ea0t+H461db9yq6z5XVFby91YJLyBZZw0sRpy1ivLfldW6ycXtKlYuBHsFC19qGXiSDCOEzvhZms7yPwn3doQrO0OE/coC+NimTkUjONM/jut7M1k+tCVtODGbRd2nSg9DT+77cKuE8/Chi7DzAdKVrBwNxb+I1mIGp5cf6TdZ3oSNTy69us4SgruXEfSK5nk9lThPtB0oUZy/r32wTDfCxrW7gNNF2ok56YehNLOsBE0rBgXTrcdX5UkSuV60nZyehE0PDAZapXpQzNfz4pfv4rle121KkuUprWeHgQNWw5DnRzPi28Rf/e6PtOaT1tBwy2DX9a8DjW/oIVqySH/ccGs+WG8ntEMU0HDR0Opjgf7b4Kh5OriwQFf/f65eaJhImj42NpJje1AhG6oR3qQbJh5akjY6wzckLBfHfZXqt7Hmw/bkDJMB21I2j8K2ZB2pBKyoSIdboZsSAvwARsSF63EtYWPhmo50vBuV242m30erOHwFmdZtzrruF3Zowl6aRgPNXhaEbcuPDdMh+bcW2KveW84dObXmq2oPTTM++ek74bNeWg4EEpNN+58NJz1NbYwjVs+GvZOu42vBPho2HseZry9HIyh8eAaiqH5eXIohpun78OXpzd8hSEMYejc8PkjDQxh6NQw1ff0vgR5WemvBGOYNvN76r672WU9//ozoqJ7w/7l4DjUxzgeGPYu6ceh3u0M15C45R2wYUD/h4aGF+K2RriG1Edx4RpSpwDBGpI3boI1JC+ngjVcUu8FBms4px61BWvYhDPzNjQkX5MP1pDoF7AheZc/VEP6mj9UQ+J1IT8MjVbA1LWTD4a6ni3v6bswtJstPlPQ31S5N4yvT7Y+078T9Xb/I/qJsAeG3/6kvnckQe8mwhCGMIQhDGEIQxjCEIYwfAJDydfqRs8j2A21oKHhvWVmw8EXOAwYJsJiNpRMgGl4+ZzXUDS3iWF+GmZDyfw01JN2WUPJ9Jfk4yFJQ9Gke4a5vpgNJXN90felBQ1p78INMcy5x2womXPP8J0Lr6Fo3kTDIZ/XUDT3pWHSPVZD4fylZq8iWQ2layQYhRpWw1xW0OzhJ6eheC5oo3zenIbi+byNcrIzGsrnZDfKq89oaCGvvkltBD5DG7URTOpbsBnaqW9hUKMkeWEytFSjJFpMrTPDZWirzsz0WkFMhh6XQ+IxtCk4tWYXh6Hlml0T664xGFqvuxZNqp33sKGL2nnRlPqHDxq6qn8Y0WtYPmKoE+WshuWN4lqHVI3UITUwvNUhza91SGWLrpDYFev6VB3abaxVf3HYt95Z29twMdn02B4uTb33oZYsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApvAHiS1bcv9TaMIAAAAASUVORK5CYII=',
            backgroundColor: '#5075c9',
        },
        {
            title: 'Senior Developer',
            company: 'Google',
            salary: '$96,000/y',
            location: 'Los Angeles, US',
            logo: 'data:image/png;base64,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',
            backgroundColor: '#184665',
        },
        {
            title: 'Product Manager',
            company: 'Microsoft',
            salary: '$84,000/y',
            location: 'Florida, US',
            logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX////yUCKAugECpO//uQIAoO7/tgCdyVLySxnxRAP6vrLO46x5twCs2/j/46wAou/1e2D/yFNSuPL0dVf7y8HY6byZx0i84vr/6LxItfL/xkj3moWz1XryRg3xNwByswD9497q89vb8Pz/89sAm+56yPX/1Ho9Y5PxAAABIElEQVR4nO3PV2pCURRAUaN51mfvJbE7/yEKF/ObjyM5EFh7ABtWoyFJkiRJkiRJkiRJkiRJkiTpt/aTcPNFOSxXnXCHBOHkqxut1y+HQd2MVncyhN2PaO8Lm4SEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIT5wnkv3PdLeKzDrRKEi368UzmcB/GWCUJJ+vvWw3iXcriO4m0ShNsq3G1YDqN2vF2CcDZuRat+hJ/hpoSEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIT5wmoc7X1hO0N4n4Xbrsths5uGeyQIJUmSJEmSJEmSJEmSJEmSpP/cE/HHzch3GAMiAAAAAElFTkSuQmCC',
            backgroundColor: '#0d572d', // Green background
        },
        {
            title: 'System Admin',
            company: 'Meta',
            salary: '$85,000/y',
            location: 'Florida, US',
            logo: 'data:image/png;base64,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', //
            backgroundColor: '#670718', // Dark blue background
        },
        // Add more jobs here
    ];

    const renderIcons = () => {
        const icons = ['leaf', 'circle', 'line-chart', 'star'];
        const iconSpacing = (280 - iconSize) / (iconsPerRow - 1); // Calculate spacing to cover entire card width

        let iconElements = [];
        for (let row = 0; row < iconsPerRow; row++) {
            for (let col = 0; col < iconsPerRow; col++) {
                const iconName = icons[(row + col) % icons.length];
                iconElements.push(
                    <Icon
                        key={`${row}-${col}`}
                        name={iconName}
                        size={iconSize}
                        color="rgba(255, 255, 255, 0.3)" // Light, semi-transparent color
                        style={{
                            position: 'absolute',
                            top: row * iconSpacing,
                            left: col * iconSpacing,
                        }}
                    />
                );
            }
        }
        return iconElements;
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={jobs}
                renderItem={({ item }) => (
                    <View style={[styles.card, { backgroundColor: item.backgroundColor }]}>
                        <View style={styles.iconBackground}>
                            {renderIcons()}
                        </View>
                        <View style={styles.header}>
                            <Image source={{ uri: item.logo }} style={styles.logo} />
                            <View>
                                <Text style={[styles.title, { color: '#fff' }]}>{item.title}</Text>
                                <Text style={[styles.company, { color: '#fff' }]}>{item.company}</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1 }} />
                        <View style={styles.footer}>
                            <Text style={[styles.salary, { color: '#fff' }]}>{item.salary}</Text>
                            <View style={{ flex: 1 }} />
                            <Text style={[styles.location, { color: '#fff', textAlign: 'right' }]}>{item.location}</Text>
                        </View>
                    </View>
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingBottom: 15, // Add some space under the featured jobs section
    },
    card: {
        width: 285,
        height: 186,
        padding: 16,
        borderRadius: 15, // Increased border radius by 2
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
        marginRight: 8,
        position: 'relative', // Required for absolute positioning of icons
    },
    iconBackground: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 46,
        height: 46,
        marginRight: 16,
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    company: {
        fontSize: 16,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    salary: {
        fontSize: 18,
    },
    location: {
        fontSize: 18,
    },
});

export default FeaturedJobs;
