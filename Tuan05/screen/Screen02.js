import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

export default function Screen02() {
    return (
        <View style={styles.container}>
            <View style={styles.viewTop}>
                <View style={styles.viewPhone}>
                    <Image source={require("../assets/vs_blue.png")} style={styles.imgPhone} />
                    <View style={styles.viewRight}>
                        <Text style={styles.textTitle}>Điện Thoại Vsmart Joy 3</Text>
                        <Text style={styles.textTitle}>Hàng chính hãng</Text>

                    </View>
                </View>

            </View>

        </View>
    );
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    viewTop: {
        backgroundColor: "#fff",
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 20,

    },
    viewRight: {
        height: "100px",
        padding: 10,
    },
    viewPhone: {
        width: "100%",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-evenly",
    },
    imgPhone: {
        width: "104px",
        height: "127px",
    },
    textTitle: {
        fontWeight: "400",
        fontSize: "15px",
        textAlign: 'left',
        paddingHorizontal:1,
    },
});