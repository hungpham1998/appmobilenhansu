import moment from "moment";
import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from "react-native";

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
            `${this.props.index}` % 2 == 0 ? "#F0F8FF" : "#FFFAFA",
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
              {moment(this.props.item.Birthday).format("DD MM, YYYY")}
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

class Department extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      listdata: []
    };
    this.componentDidMount;
  }

  getdepartmentId = async () => {
    try {
      const response = await fetch(
        serviceapi + "/department/" + this.props.navigation.state.params.code,
        {
          method: "get"
        }
      );
      const sresponse = await response.json();
      await this.setState({
        listdata: sresponse
      });
    } catch (error) {
      console.error(error);
    }
  };

  componentDidMount() {
    this.getdepartmentId();
  }

  render() {
    const { listdata } = this.state;
    return (
      <View style={styles.body}>
        <View
          style={{
            padding: 10,
            marginTop: 10,
            alignItems: "center",
            backgroundColor: "#00FFFF"
          }}
        >
          <Text> nhân viên cùng phòng ban </Text>
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

export default Department;
