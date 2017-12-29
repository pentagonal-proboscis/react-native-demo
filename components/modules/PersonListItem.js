import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

class PersonListItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageColumn}>
                    <Image style={styles.avatar}
                        source={this.props.avatar}
                    />
                </View>
                <View style={styles.infoColumn}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.subtitle}>{this.props.subtitle}</Text>
                    <Text numberOfLines={3} style={styles.body}>{this.props.body}</Text>
                </View>
            </View>
        );
    }
}

PersonListItem.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    body: PropTypes.string,
    avatar: PropTypes.image
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderRadius: 10
    },
    imageColumn: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    infoColumn: {
        marginLeft: 20
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#404040'
    },
    subtitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#888888',
    },
    body: {
        fontSize: 16,
        color: '#989898',
        width: 220
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 10
    }
});

export default PersonListItem;