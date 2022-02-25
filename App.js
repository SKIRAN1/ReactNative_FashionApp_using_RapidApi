import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AccountScreen from "./src/Screens/AccountScreen";
import BrandScreen from "./src/Screens/BrandScreen";
import CategoriesScreen from "./src/Screens/CategoriesScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import MybagScreen from "./src/Screens/MybagScreen";
import TestScreen from "./src/Screens/TestScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Categories: CategoriesScreen,
    Brand: BrandScreen,
    Mybag: MybagScreen,
    Account: AccountScreen,
    Test: TestScreen
  },
  {
    initialRouteName: "Home",
   
  }
);

export default createAppContainer(navigator);
