import React, {Component, useEffect, useState} from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default class Main extends Component{
    render(){
        return(
            <View style={style.root}>
                <Text style={style.text}>Functional Component</Text>

                {/* 새로운 CustomComponent를 만드는 방법이 2가지 종류가 있음 */}
                {/* 1. class Component : Component class를 상속해서 만드는 일반적인 컴포넌트 */}
                {/* 2. functional Component : 마치 익명함수를 만드는 방식처럼 만들어진 컴포넌트 */}

                {/* 1) 두 컴포넌트의 차이를 알아보기 위해 먼저 class component */}
                <MyComponent></MyComponent>

                {/* 2) 함수형 컴포넌트 functional component */}
                {/* 원래는 함수 호출문을 써야 하지만.... */}
                {/* return이 컴포넌트이므로 그냥 컴포넌트인양 */}
                <MyComponent2></MyComponent2>
                <MyComponent2></MyComponent2>

                 {/* 두 컴포넌트를 비교해보니 함수형이 훨씬 간결해보임 */}
                 {/* 그래서 개발자들이 컴포넌트를 만들때 함수형을 선호하게 됨 */}
                 {/* 차이점? 함수형은 state, props라는 특별한 변수 없음 */}
                 {/* 라이프 사이클 메소드도 없음 */}

                 {/* 결국 함수형은 화면 갱신이 이루언지는 state가 없으므로 단순하게 반복되는 모양을 보여줄때 적합함 */}
                 {/* props라는 변수는 없지만 그래도 속성을 파라미터로 전달 받는 것은 가능함 */}
                
                {/* 3) 일반 class컴포넌트에서 속성 전달하기 */}
                <MyComponent3 aaa="sam"></MyComponent3>
                <MyComponent3 aaa="robin"></MyComponent3>

                {/* 3-1) 함수형 컴포넌트에서 속성 전달하기 */}
                <MyComponent4 title="android"></MyComponent4>
                <MyComponent4 title="ios"></MyComponent4>

                {/* 4) 여러개의 속성들 전달하기 */}
                <MyComponent5 title="RN" msg="react native"></MyComponent5>
                <MyComponent5 title="android" msg="native App"></MyComponent5>

                {/* 5) 구조 분해 할당으로 속성을 처리하는 실습 */}
                <MyComponent6 title="ios" msg="iphone app"></MyComponent6>

                {/* 6) 두 함수형 컴포넌트끼리의 통신 */}
                <ComponentA text={this.state.text}></ComponentA>
                <ComponentB onPress={this.changeText}></ComponentB>

                {/* 예전에는 state가 필요하면 class component로  */}
                {/* state가 필요없으면 functional component로 만들었으나... */}
                {/* 함수형이 더 간결하여 선호도가 높다보니..결국 */}
                {/* 함수형에도 원한다면..state를 만들 수 있게 되었음 */}
                {/* 또한 라이프사이클과 유사한 동작을 수행하는것도 가능하게 되었음 */}
                {/* 그래서 지금은 거의 대부분 함수형 컴포넌트를 사용함!!! */}
                {/* 7)  */}
                <MyComponent7></MyComponent7>
            </View>
        )
    }

    state= {text:"Hello"}

    changeText= ()=>{
        this.setState({text:"nice to meet you"})
    }
    
}
//7) functional component Hook : 원래 콜백이 발동하면 안되는데 Hook을 검[useState(), useEffect()...]
const MyComponent7= ()=>{

    //라이프사이클중에서 가장 중요한 componentDidMount, componentDidUpdate 와 같은 역할 Hook함수
    useEffect(()=>{alert('use effect..')}) //화면이 보여질때, 화면이 바뀔때마다 쓰는게 useEffect

    // state 역할을 수행하는 변수와 그 값을 갱신하는 함수도 만들어주는 useState()
    const [msg, setMsg]= useState("Hello")//변수의 초기값을 파라미터로 지정//const [변수, 함수]= useState()
    let [age, setAge]= useState(0)

    return(
        <View>
            <Text>{msg}</Text>
            <Button title="button" onPress={()=>{setMsg("Good")}}></Button>

            <Text>{age}</Text>
            <Button title="add age" onPress={()=>{setAge(age+1)}}></Button>
        </View>
    )

    

}


//6) 컴포넌트끼리의 통신 실습
const ComponentA= (props)=>{
    return(
        <View>
            <Text>{props.text}</Text>
        </View>
    )
}

const ComponentB= ({onPress})=>{ //구조분해할당
    return(
        <View>
            <Button title="글씨 변경" onPress={onPress}></Button>
        </View>
    )
}

//5) 구조 분해 할당으로 속성들 사용하기
const MyComponent6= ({title , msg})=>{
    return (
        <View style={{margin:4}}>
            <Text>MyComponent6 : {title}</Text>
            <Text>MyComponent6 : {msg}</Text>
        </View>
    )
}

//4)여러개의 속성들...
const MyComponent5= (props)=>{
    return (
        <View>
            <Text>MyComponent5 : {props.title}</Text>
            <Text>MyComponent5 : {props.msg}</Text>
        </View>
    )
}

//3) class component - 속성을 전달받는
class MyComponent3 extends Component{
    render(){
        return (
            <View>
                {/* 컴포넌트는 전달받은 속성을 저장하고 있는 아주 특별한 변수가 이미 존재함[props] */}
                <Text style={style.text}>Nice {this.props.aaa}</Text>
            </View>
        )
    }
}

//3.1)functional component - 속성을 전달받는[props가 없음]
//대신 함수의 파라미터에 속성값들이 1개의 객체로 전달되어 옴
const MyComponent4= (obj)=>{
    return (
        <View>
            <Text style={style.text}>Good {obj.title}</Text>
        </View>
    )
}

//2) functional component
const MyComponent2= ()=>{
    return (
        <View>
            <Text style={style.text}>Hello functional MyComponent2</Text>
        </View>
    )

}

//1) class component
class MyComponent extends Component{
    render(){
        return(
            <View>
                <Text style={style.text}>Hello MyComponent</Text>
            </View>
        )
    }
}

const style=StyleSheet.create({
    root:{flex:1, padding:16},
    text:{margin:8, marginBottom:8}
})
   
