import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

class Setting extends React.Component {
    render() {
        return (
            <View style={styles.MainContainer}>
                <Text  style={styles.pageName}>>{'Setting'}</Text>
                <Button title={'press me'}  onPress={()=>this.props.navigation.navigate("NewsTab")} />
                <Button title={'open drawer'} onPress={()=>this.props.navigation.openDrawer()} />
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

export default Setting;
