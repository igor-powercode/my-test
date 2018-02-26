import React, { Component } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import styles from "./styles";

import SQLite from "react-native-sqlite-2";
const db = SQLite.openDatabase("test.db", "1.0", "", 1);

db.transaction(function(txn) {
  // txn.executeSql("DROP TABLE IF EXISTS users");
  txn.executeSql(
    "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)"
  );
});

// type Props = {};
class App extends Component {
  //<Props> {
  static navigationOptions = {
    header: false
  };
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  onLogDataPress() {
    db.transaction(function(txn) {
      txn.executeSql("SELECT * FROM users", [], function(tx, res) {
        for (let i = 0; i < res.rows.length; ++i) {
          console.log("item:", res.rows.item(i));
        }
      });
    });
  }

  onEnterDataPress() {
    db.transaction(txn => {
      txn.executeSql("INSERT INTO users (name) VALUES (?)", [this.state.value]);
      // txn.executeSql("INSERT INTO users (name) VALUES (:name)", ["takuya"]);
    });
    // this.setState({ value: "" });
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
          onPress={() => this.onEnterDataPress()}
          style={styles.saveButton}
        >
          <Text style={styles.saveButtonText}>SAVE IN DB</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.onLogDataPress()}
          style={styles.saveButton}
        >
          <Text style={styles.saveButtonText}>LOG DATA</Text>
        </TouchableOpacity>
        {/* <Text style={styles.welcome}>React Native!{"\n"}Database Learn</Text> */}
      </View>
    );
  }
}
// export default App;
