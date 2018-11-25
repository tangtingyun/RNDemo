/**
 * Created by zhangyifei on 18/11/25.
 */


/**
 * Created by zhangyifei on 18/11/25.
 */


import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    ToastAndroid
} from 'react-native';

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
        this.login = this.login.bind(this)

    }

// {/*<View style={{flex: 1, flexDirection: 'row'}}>*/}
// {/*<View style={{flex: 1, backgroundColor: 'powderblue'}}/>*/
// }
// {/*<View style={{flex: 2, backgroundColor: 'skyblue'}}/>*/
// }
// {/*<View style={{flex: 3, backgroundColor: 'steelblue'}}/>*/
// }
// {/*</View>*/
// }

    login() {
        // console.log(this.input);
        ToastAndroid.show('login success!' + this.state.username, ToastAndroid.SHORT);
    }

    render() {
        return (
            <View style={{padding: 10}}>
                <TextInput
                    ref={(el) => {
                        this.input = el
                    }}
                    style={{height: 40, borderWidth: 1, borderColor: 'steelblue'}}
                    placeholder='username'
                    onChangeText={(text) => this.setState({username: text})}/>
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.username}
                </Text>

                <TextInput
                    style={{height: 40, borderWidth: 1, borderColor: 'steelblue'}}
                    placeholder='password'
                    onChangeText={(text) => this.setState({password: text})}/>
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.password}
                </Text>

                <Button onPress={this.login} title="Login In"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})