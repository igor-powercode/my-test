import React, { Component } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
// import styles from "./styles";
var Datastore = require("react-native-local-mongodb"),
  db = new Datastore({ filename: "userNames", autoload: true });
db.loadDatabase(function(err) {
  // Callback is optional
  // Now commands will be executed
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
      value: "",
      realm: null
    };
  }

  onLogDataPress() {
    let id;
    db.find({}, function(err, docs) {
      console.log("docs", docs);
      id = docs[0]._id;
      console.log("err", err);
      db.findOne({ _id: id }, (err, doc) => {
        console.log("Name", doc.value);
      });
    });
  }

  onEnterDataPress() {
    let doc = {
      value: this.state.value
    };

    db.insert(doc, function(err, newDoc) {
      console.log("newDoc", newDoc);
      console.log("err", err);
    });
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
