import { connect } from "react-redux"
import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }

  render = () => (
    <View style={styles.View_1}>
      <View style={styles.View_3} />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: { width: "100%", alignSelf: "center", justifyContent: "center" },
  View_3: {
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "stretch"
  }
})
const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Blank)
