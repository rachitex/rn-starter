import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: 22 },
        { name: 'Friend #2', age: 23 },
        { name: 'Friend #3', age: 24 },
        { name: 'Friend #4', age: 17 },
        { name: 'Friend #5', age: 72 },
        { name: 'Friend #6', age: 42 },
        { name: 'Friend #7', age: 32 },
        { name: 'Friend #8', age: 22 },
        { name: 'Friend #9', age: 22 },
        { name: 'Friend #10', age: 22 }
    ];

    return (
        <FlatList 
            keyExtractor={(friend) => friend.name}
            /**
             * * or you can add key property in friends object. key must be string & unique
             */
            data={friends} 
            renderItem = {({item}) => {
                    /**
                     * * renderItem = {(element)} 
                     * * where element === { item: { name: 'Friend #1' }, index: 0 } 
                     * * renderItem = {({item})}
                     * * where item === { name: 'Friend #1' }
                    */
                return (
                    <Text 
                        style={styles.textStyle}>
                            {item.name} - Age: {item.age}
                    </Text>
                );
            }} 
        />
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 10
    }
});

export default ListScreen;
