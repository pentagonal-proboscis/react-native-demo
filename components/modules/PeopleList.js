import React from 'react';
import { FlatList } from 'react-native';
import PersonListItem from './PersonListItem';

class PeopleList extends React.Component {
    constructor(props) {
        super(props);

        const people =
            [
                { 
                    name: 'Bob',
                    age: 26,
                    intro: "Keep on rockin' in the free world.",
                    avatar: require('../../src/images/avatars/male-1.png')
                },
                { 
                    name: 'Rita',
                    age: 23,
                    intro: "Lost kitten bites like a viper.",
                    avatar: require('../../src/images/avatars/female-1.png')
                },
                { 
                    name: 'Sue',
                    age: 56,
                    intro: "Stuck at the bar and never left.",
                    avatar: require('../../src/images/avatars/female-2.png')
                },
                { 
                    name: 'Franklin',
                    age: 37,
                    intro: "Lives inside of a hollowed out missile. Is training to be a Bond villain and squirrel tickler.",
                    avatar: require('../../src/images/avatars/male-2.png')
                },
                { 
                    name: 'June',
                    age: 25,
                    intro: "Is perfect in pretty much every way.",
                    avatar: require('../../src/images/avatars/female-3.png')
                },
                { 
                    name: 'Frank',
                    age: 76,
                    intro: "Smells of mushy peas.",
                    avatar: require('../../src/images/avatars/male-3.png')
                },
            ];
        
        this.state = {
            people: people
        };
    }

    render() {
        return (
            <FlatList
                data={this.state.people}
                renderItem={({ item }) =>
                    <PersonListItem
                        avatar={item.avatar}
                        title={item.name}
                        subtitle={item.age}
                        body= {item.intro}
                    />
                }
            />
        );
    }
}

export default PeopleList;