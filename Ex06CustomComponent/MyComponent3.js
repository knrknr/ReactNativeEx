import React, {Component} from "react";
import {View, Text, Button} from 'react-native'

class MyComponent3 extends Component{
    render(){
        return(
            <View style={{margin:8}}>
                <Text>Component3</Text>
                <Button onPress={this.props.onPress} title={this.props.title}></Button>
            </View>
        )
    }
}
export default MyComponent3