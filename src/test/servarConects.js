import React, { Component } from "react";
import {
    TextInput,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from "react-native";
import styles from "./styles";


class App extends Component {
    static navigationOptions = {
        header: false
    };
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }

    getData = () => {
        fetch('http://localhost:3000/data/getData?data=' + this.state.value, { method: 'GET' })
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.success === false) {
                        alert("too small mess");
                        return;
                    }
                    console.log("result", result);
                },
                (error) => {
                    console.log("error", error);
                }
            )
    }


    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder={"Enter value"}
                    style={styles.textInput}
                    value={this.state.value}
                    underlineColorAndroid="transparent"
                    onChangeText={value => this.setState({ value })}
                    autoCorrect={false}
                />
                <TouchableOpacity
                    onPress={this.getData}
                    style={styles.saveButton}
                >
                    <Text style={styles.saveButtonText}>GET DATA</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default App;
