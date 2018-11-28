/**
 * Created by zhangyifei on 18/11/25.
 */


import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowingText: true
        }

        // Toggle the state every second
        setInterval(() => {
            this.setState(previousState => (
                {isShowingText: !previousState.isShowingText}
            ))
        }, 5000);
    }

    render() {
        if (!this.state.isShowingText) {
            return null;
        }

        return (
            <Text>{this.props.text}</Text>
        );
    }
}

class Greeting extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Text>{this.props.name}</Text>
            </View>
        )
    }
}


export default class Home extends Component {


    static navigationOptions = {
        title: '王二',
    };

    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        }
        return <View style={styles.container}>
            <Text>Test Page</Text>
            <Image source={pic}
                   style={{width: 193, height: 110}}/>
            <Greeting name="wang er"/>
            <Greeting name="xiang"/>
            <Greeting name="lao ban"/>
            <Greeting name="l"/>

            <Blink text="I love to blink"/>
            <Blink text="Yes blinking is so great"/>
            <Blink text="Why did they ever take this out of Html"/>
            <Blink text="Look at me look at me look at me"/>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})