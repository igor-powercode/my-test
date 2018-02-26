import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  saveButton: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#4F6FDA"
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 25
  },
  textInput: {
    paddingLeft: 20,
    width: "80%",
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "grey",
    fontSize: 26
  }
});
export default styles;
