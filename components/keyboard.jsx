import { useState } from "react"
import { Text, View } from "react-native";
import Button from "./Button";
import { styles } from "../styles.jsx/GlobalStyles";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Keyboard() {
    const [firstNumber, setFirstNumber] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [operation, setOperation] = useState("");
    const [result, setResult] = useState(null)

    const handleNumberPress = (buttonValue) => {
        if (firstNumber.length < 10) {
            setFirstNumber(firstNumber + buttonValue);
        }
    }
    const handleOperationPress = (buttonValue) => {
        setOperation(buttonValue);
        setSecondNumber(firstNumber);
        setFirstNumber("");
    }
    const clear = () => {
        setFirstNumber("");
        setOperation("");
        setSecondNumber("");
        setResult(null);
    }

    const getResult = () => {
        switch (operation) {
            case "+":
                clear();
                setResult(parseInt(secondNumber) + parseInt(firstNumber));
                break;
            case "-":
                clear();
                setResult(parseInt(secondNumber) - parseInt(firstNumber));
                break;
            case "*":
                clear();
                setResult(parseInt(secondNumber) * parseInt(firstNumber));
                break;
            case "/":
                clear();
                setResult(parseInt(secondNumber) / parseInt(firstNumber));
                break;
            default:
                clear();
                setResult(0);
                break;
        };
    }
    const firstNumberDisplay=()=>{
        if(result!=null){
            return(
                <Text style={result<99999?{fontSize:70,color:'#5a9aff'}:null}>
                    {result?.toString()}
                </Text>
            )
        }
        if(firstNumber&&firstNumber.length<6){
            return <Text style={{color:'#5a9aff',fontSize:70}}>{firstNumber}</Text>
        }
        if(firstNumber==""){
            return <Text style={{color:'#5a9aff',fontSize:70}}>{"0"}</Text>
        }
        if(firstNumber.length>5&&firstNumber.length<8){
            return <Text style={{color:'#5a9aff',fontSize:70}}>{firstNumber}</Text>
        }
        if(firstNumber.length>7){
            return <Text style={{color:'#5a9aff',fontSize:50}}>{firstNumber}</Text>
        }
        
    }
    return (
        <View style={{position:'absolute',bottom:50}}>
            <View style={{height:150,width:"90%",justifyContent:'flex-end',alignSelf:'center',marginBottom:40}}>
                <Text style={{color:'#5a9aff',fontSize:40}}> 
                    {secondNumber}
                </Text>
                <Text style={{fontSize:50,color:'#ff6c00',fontWeight:'500'}}>
                    {operation}
                </Text>
                {firstNumberDisplay()}
            </View>
            <View style={{ maxWidth: '100%', flexDirection: 'row' }}>
                <Button title='C' onPress={clear} />
                <Button title='+/-' onPress={() => { handleOperationPress("+/-") }} />
                <Button title='%' onPress={() => { handleOperationPress("%") }} />
                <Button title='÷' onPress={() => { handleOperationPress("/") }} />
            </View>
            <View style={{ maxWidth: '100%', flexDirection: 'row' }}>
                <Button title='7' onPress={() => { handleNumberPress("7") }} />
                <Button title='8' onPress={() => { handleNumberPress("8") }} />
                <Button title='9' onPress={() => { handleNumberPress("9") }} />
                <Button title='×' onPress={() => { handleOperationPress("*") }} />
            </View>
            <View style={{ maxWidth: '100%', flexDirection: 'row' }}>
                <Button title='4' onPress={() => { handleNumberPress("4") }} />
                <Button title='5' onPress={() => { handleNumberPress("5") }} />
                <Button title='6' onPress={() => { handleNumberPress("6") }} />
                <Button title='-' onPress={() => { handleOperationPress("-") }} />
            </View>

            <View style={{ maxWidth: '100%', flexDirection: 'row' }}>
                <Button title='1' onPress={() => { handleNumberPress("1") }} />
                <Button title='2' onPress={() => { handleNumberPress("2") }} />
                <Button title='3' onPress={() => { handleNumberPress("3") }} />
                <Button title='+' onPress={() => { handleOperationPress("+") }} />
            </View>
            <View style={{ maxWidth: '100%', flexDirection: 'row' }}>
                <Button title='.' onPress={() => { handleNumberPress(".") }} />
                <Button title='0' onPress={() => { handleNumberPress("0") }} />
                <Button title='⌫' onPress={() => { setFirstNumber(firstNumber.slice(0, -1)) }} />
                <Button title='=' onPress={() => { getResult() }} />
            </View>

        </View>

    )
}