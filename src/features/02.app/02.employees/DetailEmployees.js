import moment from "moment";
import React, { Component } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { serviceapi } from "../../../api/api";

class FlatListItem extends Component {
  employeesdepartment = () => {
    let code = this.props.item.Id_partment;
    this.props.navigation.navigate("Department", { code });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor:
            `${this.props.item.Id}` % 2 == 0 ? "#F0F8FF" : "#ECEAEE",
          marginTop: 10
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            justifyContent: "center"
          }}
        >
          <Text style={{ alignItems: "center", marginRight: 10 }}>
            Chi tiết thông tin nhân viên :
          </Text>
          <Text style={{ color: "#F90C20" }} onPress={this.employeesdepartment}>
            {this.props.item.Name}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              padding: 10,
              flexDirection: "column"
            }}
          >
            <Image
              source={{ uri: this.props.item.Image }}
              style={{ width: 180, height: 180, borderRadius: 10 }}
            />
          </View>
          <View
            style={{
              flexDirection: "column",
              padding: 10
            }}
          >
            <View style={styles.conten}>
              <View>
                <Image source={require("../../../image/location-pin.png")} />
              </View>
              <View style={styles.conten_right}>
                <Text>{this.props.item.Adress}</Text>
              </View>
            </View>
            <View style={styles.conten}>
              <View>
                <Image source={require("../../../image/cake.png")} />
              </View>
              <View style={styles.conten_right}>
                <Text>
                  {moment(this.props.item.Birthday).format("DD/MM/YYYY")}
                </Text>
              </View>
            </View>
            <View style={styles.conten}>
              <View>
                <Image source={require("../../../image/letter.png")} />
              </View>
              <View style={styles.conten_right}>
                <Text>{this.props.item.Adressmail}</Text>
              </View>
            </View>
            <View style={styles.conten}>
              <View>
                <Image source={require("../../../image/smartphone.png")} />
              </View>
              <View style={styles.conten_right}>
                <Text>{this.props.item.Phone}</Text>
              </View>
            </View>
            <View style={styles.conten}>
              <View>
                <Image source={require("../../../image/work.png")} />
              </View>
              <View style={styles.conten_right}>
                <Text>{this.props.item.Postion}</Text>
              </View>
            </View>
            <View style={styles.conten}>
              <View>
                <Image source={require("../../../image/briefcase.png")} />
              </View>
              <View style={styles.conten_right}>
                <Text>{this.props.item.Namejobs}</Text>
              </View>
            </View>
            <View style={styles.conten}>
              <View>
                <TouchableOpacity onPress={this.employeesdepartment}>
                  <Image source={require("../../../image/management.png")} />
                </TouchableOpacity>
              </View>
              <View style={styles.conten_right}>
                <Text onPress={this.employeesdepartment}>
                  {this.props.item.Namedepartment}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default class DetailEmployees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      listinfo: []
    };
  }

  data = async () => {
    try {
      const response = await fetch(
        serviceapi + "/employees/" + this.props.navigation.state.params.code,
        {
          method: "get"
        }
      );
      const sresponse = await response.json();
      this.setState({
        listinfo: sresponse
      });
    } catch (error) {}
  };

  componentDidMount() {
    this.data();
  }

  backtoPage = () => {
    this.props.navigation.pop();
  };

  render() {
    const listdata = this.state.listinfo;
    return (
      <View style={{ padding: 10, marginTop: 20 }}>
        <View style={styles.body}>
          <TouchableOpacity onPress={() => this.backtoPage()}>
            <Image source={require("../../../image/left.png")} />
          </TouchableOpacity>
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
    backgroundColor: "#54FBE8",
    alignContent: "center"
  },
  conten: {
    flexDirection: "row",
    paddingBottom: 10
  },
  conten_left: {},
  conten_right: {
    paddingLeft: 10
  }
});
