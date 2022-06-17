import React,{Component, useDebugValue} from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default class main extends Component{
    render(){

        //대량의 데이터를 리스트 형태로 보여주는 작업이 가장 일반적인 UI
        
        //JSX컴포넌트 객체를 변수에 저장
        const aaa= <Text>Nice</Text>//aaa는 Test 컴포넌트를 가지고 있음
        
        //변수에 컴포넌트 그룹도 저장 가능함
        const bbb= <View style={{margin:8}}>
                        <Text>Hello RN</Text>
                        <Button title="button"></Button>
                   </View>

        //배열
        const ccc=[aaa, aaa, bbb, this.showItemView()]

        //애석하게 실제 대부분의 대량의 데이터를 컴포넌트가 아니라 
        //그냥 데이터인 경우가 많음
        const datas= ["aa", "bb", "cc", "dd", "ee", "aa", "bb", "cc", "dd", "ee"]

        //배열의 .map()메소드 이용
        //배열의 요소만큼 function()이 호출되며 파라미터로 해당 요소의
        //값과 인덱스 번호를 전달하며 요소의 개수만큼 새로운 배열을 만들어서 최종 리턴함
        //자동 스크롤과 가로형으로 만들때 힘듦
        //map보다 FlatList(RecyclerView와 비슷)를 더 많이 씀 - 6/17일 수업
        const xxx= datas.map(function(value, index, array){
            return(
                <View style={{margin:4, borderWidth:1, padding:8, borderRadius:4}}>
                    <Text>{value}</Text>
                </View>
            )
        })
        // map은 갯수만큼 만들어서 갯수만큼 리턴해줌

        return(
            <View style={style.root}>
                <Text style={style.text}>List layout</Text>

                {xxx}

                {aaa}
                {aaa}

                {bbb}
                {bbb}

                {/* 컴포넌트를 리턴하는 함수를 호출!! */}
                {this.showItemView()}
                {this.showItemView()}

                {/* 파라미터 전달을 통해 콘텐츠가 다른 컴포넌트가 보여짐 */}
                {this.showItemView2("sam", "first", "hotpink")}
                {this.showItemView2("robin", "second", "lime")}

                {/* 컴포넌트를 요소로 가지는 배열 - 배열을 그냥 출력하면 요소값이 그냥 나열됨 */}
                {ccc}
            </View>
        )
    }

    //컴포넌트를 리턴하는 메소드 정의
    showItemView(){
        return(
            <View style={{margin:8}}>
                <Text>Nice world</Text>
                <Button title="press me"></Button>
            </View>
        )
    }

    //파라미터를 전달 받아 컴포넌트를 만들고 리턴하는 메소드 정의
    showItemView2(name, title, color){
        return(
            <View style={{margin:8}}>
                <Text>Nice {name}</Text>
                <Button title={title} color={color}></Button>
            </View>
        )
    }

}

const style= StyleSheet.create({
    root: {flex:1, padding:16},
    text:{color:'black', fontSize:24}
})