import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import GlobeIcon from  '../../assets/globe'

class GlobalNews extends React.Component {
    render() {
        return (
            <View style={styles.MainContainer}>
                <Text style={styles.pageName}>>{'GlobalNews'}</Text>
                <Button title={'press me'} onPress={()=>this.props.navigation.navigate("AccountTab")}/>
                <Button title={'open drawer'} onPress={()=>this.props.navigation.openDrawer()}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    pageName: {
        fontSize: 40,
        margin: 10,
    }
  });

export default GlobalNews;

export const GlobalNewsNavigationOption = {
    title: "خبر",
    tabBarIcon: props=> <GlobeIcon color={props.tintColor}/>,
}
