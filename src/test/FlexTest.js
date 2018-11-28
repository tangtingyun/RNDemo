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
    ToastAndroid,
    TouchableNativeFeedback,
    ScrollView,
    FlatList,
    SectionList,
    ActivityIndicator
} from 'react-native';

class FetchExample extends Component {
    constructor(props) {
        super(props)
        this.state = {isLoading: true}
    }

    componentDidMount() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies
                })
            }).catch((error) => {
                console.log(error)
            })
    }


    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }
        return (
            <View style={{flex: 1, paddingTop: 20}}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text>{item.title} {item.releaseYear}</Text>}
                    keyExtractor={({id}, index) => id}
                />

            </View>
        );
    }

}

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }
    static navigationOptions = {
        title: 'Home',
    };

    login() {
        ToastAndroid.show('login success!', ToastAndroid.SHORT);
        this.props.navigation.navigate('Profile')
    }

    nativePress() {
        ToastAndroid.show('native button!', ToastAndroid.SHORT);
    }

    render() {
        return (
            <ScrollView style={{paddingRight: 15, paddingLeft: 15}}>
                <View style={{height: 300, flexDirection: 'row'}}>
                    <View style={{flex: 1, backgroundColor: 'powderblue'}}/>

                    <View style={{flex: 2, backgroundColor: 'skyblue'}}/>

                    <View style={{flex: 3, backgroundColor: 'steelblue'}}/>
                </View>

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

                <Button onPress={() => this.props.navigation.navigate('Profile')} title="Login In"/>

                <TouchableNativeFeedback
                    onPress={this.nativePress}>
                    <Text style={{
                        height: 50
                    }}>i am
                        button</Text>
                </TouchableNativeFeedback>


                <FlatList
                    data={[
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                    ]}
                    renderItem={({item}) => <Text>{item.key}</Text>}/>

                <SectionList
                    sections={[
                        {title: 'D', data: ['Devin']},
                        {
                            title: 'J', data: ['Jackson',
                            'James', 'Jillian', 'Jimmy',
                            'Joel', 'John']
                        }
                    ]}
                    renderItem={({item}) => <Text>{item}</Text>}
                    renderSectionHeader={({section}) => <Text>
                        {section.title}
                    </Text>}
                    keyExtractor={(item, index) => index}
                />

            </ScrollView>
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