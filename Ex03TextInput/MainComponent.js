import React,{Component} from 'react'
import {View, Text, Button, TextInput, StyleSheet} from 'react-native'

//만들면서 export default 가능
export default class MainComponent extends Component{

    //화면 갱신에 영향을 주는 아주 특별한 변수 state
    state= {
        text:"Hello",
        text2:"reactRN",
        text3:"RN"
    }

    //TextInput의 글씨가 변경될때마다 저장하는 일반변수
    sss=""   

    render(){
        return (
            <View style={style.root}>
                <TextInput onChangeText={this.changeText} style={style.textInput}></TextInput>
                <Text style={style.plainText}>{this.state.text}</Text>

                <View style={{marginTop:40}}></View>
                <TextInput multiline={true} numberOfLines={4} onChangeText={this.changeText2} style={style.textInput2}></TextInput>
                <Button title='입력 완료' onPress={this.clickBtn}></Button>
                <Text style={style.plainText}>{this.state.text2}</Text>

                <View style={{marginTop:40}}></View>
                <TextInput onSubmitEditing={this.submit} style={style.textInput2}></TextInput>
                <Text style={style.plainText}>{this.state.text}</Text>
            </View>
        )
    }
    
    //onSubmitEditing은 파라미터로 입력된 글씨를 가진 이벤트 객체가 전달되어옴
    submit=(submitEvent)=>{
        let value= submitEvent.nativeEvent.text
        this.setState({text3:value})
    }

    clickBtn=()=>{
        //state 값 변경
        this.setState({text2: this.sss})
    }

    //TextInput의 글씨가 변경될때마다 발동하는 메소드
    //이 메소드의 파라미터로 변경된 글씨가 자동 전달되어 옴.
    changeText=(msg)=>{
        this.setState({text:msg})
    }

    changeText2=(msg)=>{
        this.sss=msg //일반변수이므로 화면 갱신이 안됨
    }

}
const style= StyleSheet.create({
    root:{
        flex:1,
        padding:16,
    },
    textInput:{
        borderWidth:2,
        backgroundColor:'white',
        borderColor:'hotpink',
        borderRadius: 8,
        paddingLeft:16,
        paddingRight:16,
        height:40
    },
    plainText:{
        color:'lightblue',
        marginTop:16,
        fontWeight:'bold',
        padding:10,
    },
    textInput2:{
        borderWidth:2,
        backgroundColor:'white',
        borderColor:'hotpink',
        borderRadius: 8,
        paddingLeft:16,
        paddingRight:16,
        marginBottom:16,
        maxHeight:200,
    },
})