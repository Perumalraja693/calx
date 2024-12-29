import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { styles } from "../styles.jsx/GlobalStyles";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";

export default function Button({title,onPress}){
    const theme=useContext(ThemeContext);
    return(
        <TouchableOpacity
        style={theme=='light'?styles.btnLight:styles.btnDark}
        onPress={onPress}
        >
            <Text 
            style={theme=='dark'?styles.textLight:styles.textDark}
            >
                 {title}
            </Text>
        </TouchableOpacity>
    )
}