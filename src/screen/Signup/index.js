import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

class SignUp extends React.Component {
    render() {
        return (
            <View style={styles.MainContainer}>
                <Text  style={styles.pageName}>>{'SignUp'}</Text>
                <Button title={'home'} onPress={()=>this.props.navigation.navigate('Home')} />
                <Button title={'news'} onPress={()=>this.props.navigation.navigate('News')} />
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

export default SignUp;
