import { View, Text, StyleSheet, Button } from 'react-native';

function User({navigation}) {
    function buttonPressHandler() {
        navigation.toggleDrawer()
    }
    return (
        <View style={styles.container}>
            <Text>Welcome User</Text>
            <Button title='Open Drawer' onPress={buttonPressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default User;