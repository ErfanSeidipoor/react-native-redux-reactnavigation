import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

class Drawer extends React.Component {
    render() {
        return (
            <View style={styles.MainContainer}>
                <Text style={styles.pageName}>>{'Drawer'}</Text>
                <Button title={'close'}  onPress={()=>this.props.navigation.closeDrawer()}/>
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

export default Drawer;