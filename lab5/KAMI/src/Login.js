import { React, useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';

function Login() {
    const [text, setText] = useState('');
    const [password, setPassword] = useState('');
    const [hidePass, setHidePass] = useState(true);
    return (
        <View
            style={{ backgroundColor: 'f2f2f2', flex: 1, justifyContent: 'center' }}>
            <View style={styles.container}>
                <Text style={styles.textTitle}> Login </Text>
                <TextInput
                    keyboardType='numeric'
                    label={'Phone'}
                    value={text}
                    onChangeText={text => setText(text)}
                    style={styles.textInput}
                    mode="outlined"
                />
                <TextInput
                    label={'Password'}
                    value={password}
                    onChangeText={password => setPassword(password)}
                    style={styles.textInput}
                    mode="outlined"
                    secureTextEntry={hidePass ? true : false}
                    right={
                        <TextInput.Icon icon={hidePass ? "eye-off-outline" : "eye-outline"} onPress={() => setHidePass(!hidePass)} />
                    }
                />
                <Button
                    mode="contained"
                    onPress={() => console.log('Pressed')}
                    style={styles.button}>
                    <Text style={{ color: 'white', fontSize: 18 }}> Login </Text>
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 40,
    },
    textTitle: {
        color: '#ef506b',
        fontSize: 60,
        fontWeight: '800',
        textAlign: 'center',
        marginBottom: 20,
    },
    textInput: {
        marginBottom: 20,
        backgroundColor: 'transparent',
        borderRadius: 10,
        borderColor: 'silver',
    },
    button: {
        height: 50,
        backgroundColor: '#ef506b',
        borderRadius: 10,
        justifyContent: 'center',
    },
});

export default Login;
