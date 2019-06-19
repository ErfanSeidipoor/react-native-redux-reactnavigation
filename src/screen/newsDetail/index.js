import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

class NewsDetail extends React.Component {
    render() {
        return (
            <View style={styles.MainContainer}>
                <Text style={styles.pageName}>>{'NewsDetail'}</Text>
                <Button title={'press me'} />
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

export default NewsDetail;
