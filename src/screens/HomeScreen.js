import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => { // {navigation} === props.navigation
  return (
    <View>
      <Text style={styles.text}>Hello Rachit! How are you?</Text>
      <Button 
        onPress = {() => navigation.navigate('Components')}
        title="Go to Components Demo" 
      /> 
      <Button 
        onPress = {() => navigation.navigate('List')}
        title="Go to List Demo" 
      /> 
      <Button 
        onPress = {() => navigation.navigate('Image')}
        title="Go to Image Demo" 
      /> 
      <Button 
        onPress = {() => navigation.navigate('CounterReducer')}
        title="Go to Counter Demo" 
      />
      <Button 
        onPress = {() => navigation.navigate('Color')}
        title="Go to Color Demo" 
      />
      <Button 
        onPress = {() => navigation.navigate('SquareReducer')}
        title="Go to Square Demo" 
      />
      <Button 
        onPress = {() => navigation.navigate('Text')}
        title="Go to Text Demo" 
      />
      <Button 
        onPress = {() => navigation.navigate('Box')}
        title="Go to Box Demo" 
      />
      {/** 
       * * Example of TouchableOpacity
        <TouchableOpacity onPress = {() => props.navigation.navigate('List')}>
          <Text>Go to List Demo</Text>
        </TouchableOpacity> 
      */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
