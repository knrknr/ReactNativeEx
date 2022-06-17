import React, { Component } from "react";
import { Button, View } from "react-native";

export default class MyComponent5 extends Component{
    render(){
        return(
            <View>
                {/* 버튼에 설정할 전달 받은 속성 값들(props)가 여러개일때 한방에 적용 */}
                {/* ...[스프레드 연산자] : 멤버 변수들이 속성으로 적용됨(프로퍼티스 안에 있는 멤버변수 타이틀이 속성명, 값이 속성값이 됨)*/}
                {/* 컴포넌트끼리는 통신이 불가능함 부모의 state 가 자식의 프로퍼티스로 전달됨 */}
                <Button {...this.props}></Button>
            </View>
        )
    }
}