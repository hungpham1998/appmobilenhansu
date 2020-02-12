import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Home from "../features/02.app/01.home/Home";
import DetailEmployees from "../features/02.app/02.employees/DetailEmployees";
import Employees from "../features/02.app/02.employees/Employees";
import Department from "../features/02.app/03.deprament/Department";

const TabBar = createBottomTabNavigator(
  {
    Home: { screen: Home },
    Employees: { screen: Employees }
    //cannang: {screen: cannang},
    // Detail: { screen: Detail }
    //   MessengerScreen: { screen: MessengerScreen },
    //   ProFileScreen: { screen: ProFileScreen }
  },
  {
    tabBarOptions: {
      activeTintColor: "#FFCB78",
      inactiveTintColor: "white",
      tabStyle: {
        backgroundColor: "#183D57"
      }
    }
  }
);

const MainNavigator = createStackNavigator({
  TabBar: {
    screen: TabBar,
    navigationOptions: {
      header: null
    }
  },
  DetailEmployees: {
    screen: DetailEmployees,
    navigationOptions: {
      header: null
    }
  },
  Department: {
    screen: Department,
    navigationOptions: {
      header: null
    }
  }
});
export default MainNavigator;
