import React, { Component } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import moment from "moment";
import { serviceapi } from "../../../api/api";

class FlatListItem extends Component {
  employeesid = () => {
    let code = this.props.item.Id;
    this.props.navigation.navigate("DetailEmployees", { code });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor:
            `${this.props.index}` % 2 == 0 ? "#E8E8E8" : "#ECEAEE",
          marginTop: 10,
          borderRadius: 25
        }}
      >
        <View
          style={{
            padding: 10,
            flexDirection: "column"
          }}
        >
          <TouchableOpacity onPress={this.employeesid}>
            <Image
              source={{ uri: this.props.item.Image }}
              style={{ width: 120, height: 120, borderRadius: 55 }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "column",
            padding: 10
          }}
        >
          <View style={{ paddingTop: 10, paddingBottom: 5 }}>
            <Text>
              <Text onPress={this.employeesid}>{this.props.item.Name}</Text>
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Số điện thoại :</Text>
            <Text> {this.props.item.Phone}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>
              <Text>Địa chỉ:</Text>
              {this.props.item.Adress}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>
              <Text>Ngày sinh:</Text>
              {moment(this.props.item.Birthday).format("DD/ MM/ YYYY")}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>
              <Text>Mail:</Text>
              {this.props.item.Adressmail}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

class Employees extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("../../../image/employee.png")}
        style={{
          width: 30,
          height: 30,
          tintColor
        }}
      />
    )
  };

  constructor(props) {
    super(props);
    this.state = {
      list: "",
      status: false,
      listdata: []
    };
    this.componentDidMount;
  }

  data = async () => {
    try {
      const response = await fetch(serviceapi + "/employees", {
        method: "get"
      });
      const sresponse = await response.json();
      this.setState({
        listdata: sresponse
      });
    } catch (error) {}
  };

  componentDidMount() {
    this.data();
  }

  render() {
    const newlist = this.state.list;
    const listdata = this.state.listdata;
    return (
      <View style={styles.body}>
        <View
          style={{
            padding: 10,
            alignContent: "center",
            alignItems: "center",
            marginTop: 10,
            backgroundColor: "#B0E2FF"
          }}
        >
          <Text> Thông tin nhân sự </Text>
        </View>
        <View>
          <FlatList
            data={listdata}
            renderItem={({ item, index }) => {
              return <FlatListItem item={item} index={index} {...this.props} />;
            }}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 20
  }
});

export default Employees;
