import React, {Component} from "react";
import {View, Button, Text, FlatList, StyleSheet, TouchableOpacity, Image, Alert} from 'react-native'; 


export default class Main extends Component{

    //화면 갱신에 영향을 미치는 아주 특별한 변수 state
    state= {
        datas: ["aaa", "bbb", "ccc", "ddd"],

        //조금 더 복잡한 구조의 데이터들....
        datas2:[
            {name: "sam", message: "Hello world", img: require('./Image/hubble.jpg')},
            {name: "robin", message: "Hello RN", img: require('./Image/PIA03149_ip.jpg')},
            {name: "lee", message: "Hello bb", img: require('./Image/PIA03542_ip.jpg')},
            {name: "kim", message: "Hello cc", img: require('./Image/PIA12110_ip.jpg')},
            {name: "jessica", message: "Hello dd", img: require('./Image/PIA16684_ip.jpg')},
            {name: "hong", message: "Hello ee", img: require('./Image/hubble.jpg')},
            {name: "park", message: "Hello ff", img: require('./Image/hubble.jpg')},
            {name: "choi", message: "Hello gg", img: require('./Image/hubble.jpg')},
            {name: "tom", message: "Hello hh", img: require('./Image/hubble.jpg')},
            {name: "jessi", message: "Hello ii", img: {uri:'https://cdn.pixabay.com/photo/2016/01/11/22/38/animal-1134504_1280.jpg'}},
        ]
    }

    render(){
        return(
            <View style={style.root}>
                <Text style={style.titleText}>FlatList Test</Text>

                {/* RN에서는 RecyclerView의 역할을 하는 Component가 2가지가 있음 */}
                {/* FlatList - 가장 일반적인 ListView의 형태 */}
                {/*[수업에서 안함] SectionList - 섹션에 따라 구분지어서 리스트 할때 사용 (잘 사용하지 않음) /헤더만 따로 아이템들만 따로 짤 수 있음 */}

                {/* FlatList 컴포넌트  */}
                {/* 필수 속성이 두가지 있음 */}
                {/* 1) data : FlatList가 보여줄 대량의 데이터들을 지정 */}
                {/* 2) renderItem : 아이템하나의 모양(컴포넌트)를 만들어서 리턴하는 콜백 함수를 지정 */}
                {/* renderItem속성에 지정한 함수는 data 속성에 지정한 배열의 개수만큼 호출됨 */}
                {/* <FlatList
                    data={this.state.datas} //값
                    renderItem={(obj)=>{
                        //파라미터 : 위 데이터 속성으로 지정한 배열의 요소(item)와 각 요소의 index 번호를 멤버로 가진 객체 한개가 전달됨!
                        return <Text>{obj.item} - {obj.index}</Text>}//text 1개 만들었지만 결과는 4개가 나옴
                    }> 

                </FlatList> */}
                {/* renderItem의 콜백 함수 파라미터에 객체를 받을때 '구조분해할당'이라는 기법을 더 선호 */}
                {/* <FlatList
                    data={this.state.datas} //값
                    renderItem={({item, index})=>{
                        //파라미터 : 위 데이터 속성으로 지정한 배열의 요소(item)와 각 요소의 index 번호를 멤버로 가진 객체 한개가 전달됨!
                        //obj를 구조 분해 할당!
                        //아이템이 터치될 수 있도록 TouchableXXXXXX
                        return (
                            <TouchableOpacity style={style.itemView} onPress={()=>{alert(index)}}>
                                <Text>번호 : {index}</Text>
                                <Text>값 : {item}</Text>
                                
                            </TouchableOpacity>
                        )}//text 1개 만들었지만 결과는 4개가 나옴
                    }> 

                </FlatList> */}

                <FlatList
                    data={this.state.datas2}
                    renderItem={({item, index})=>{
                        return (
                            <TouchableOpacity style={style.item} onPress={()=>{Alert.alert(item.name)}}>
                                <Image source={item.img} style={style.itemImg}></Image>

                                <View>
                                    <Text style={style.itemName}>{item.name}</Text>
                                    <Text style={style.itemMsg}>{item.message}</Text>
                                </View>
                                
                            </TouchableOpacity>
                        )
                    }}>

                </FlatList>


            </View>
        )
    }
}

//스타일 작업
const style= StyleSheet.create({
    root:{
        flex:1,
        padding:16,

    },
    titleText:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        paddingTop:8,
        paddingBottom:8,
        color:'black'

    },
    itemView:{
        borderWidth:1,
        borderRadius:4,
        margin:8,
        padding:8,
    },
    item:{
        flexDirection:'row',
        borderWidth:1,
        borderRadius:4,
        padding:8,
        marginBottom:12,
    },
    itemImg:{
        width:120,
        height:100,
        resizeMode:'cover',
        marginRight:8,

    },
    itemName:{
        fontSize:24,
        fontWeight:'bold',
        color:'black'
    },
    itemMsg:{
        fontSize:16,
        fontStyle:'italic'
    }
})