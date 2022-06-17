//### react-native-image-picker 라이브러리 추가 ##########
//프로젝트 마다마다 설치

//1) install
// 프로젝트 폴더% npm install react-native-image-picker

//확인 방법 : package.json 문서의 dependencies에 추가되었는지 확인[android의 build.gradle과 같은 역할]
//#######################################################3#########3

import React, {Component} from 'react'
import {View, Text, Image, Button} from 'react-native'
import { launchCamera, launchImageLibrary  } from 'react-native-image-picker'

export default class Main extends Component{

    state={
        img: {uri:"인터넷 이미지 주소"},
    }

    render(){
        return(
            <View style={{flex:1, padding:16}}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Button title='show camera app' onPress={this.showCamera}></Button>
                    <Button title='show photo app' color="green" onPress={this.showPhoto}></Button>

                </View>

                <Text style={{margin:8}}>{this.state.img.uri}</Text>
                <Image source={this.state.img} style={{marginTop:1, flex:1}}></Image>

            </View>
        )
    }

    //카메라 앱을 실행시키는 기능을 가지는 함수
    showCamera= ()=>{
        //옵션 객체
        const options={
            mediaType:'photo',//photo or video
            cameraType:'back', //back or front
            saveToPhotos:true, //캡처한 사진을 디바이스에 저장할 것인가 여부
            quality:1.0,// 사진 화질 0.0~1.0
            videoQuality:'high',//비디오 화질
        }

        //카메라 앱 실행 함수 호출
        launchCamera(options, (response)=>{
            //파라미터로 전달된 응답객체로부터 사진 캡처 결과 받기
            if(response.didCancel){
                alert('사용자가 사진 촬영을 취소하였습니다.')
            }else if(response.errorMessage){
                alert('에러 발생', response.errorMessage)
            }else{
                //이곳에 왔다면 사진촬영이 잘된것임
                //선택된 이미지으 uri 경로를 얻어오기
                const source= {uri: response.assets[0].uri}

                //선택된 사진의 경로를 가진 객체 source를 이미지 컴포넌트가 보여주는 state값에 설정
                this.setState({img:source})
            }
        })
    }

    //사진앱을 실행시키는 기능을 가지는 콜백함수
    showPhoto= ()=>{

        //옵션 객체
        const options= {
            mediaType:'photo',
            selectionLimit:5,
        }

        launchImageLibrary(options, (response)=>{
            if(response.didCancel) alert('선택 취소')
            else if(response.errorMessage) alert('에러', response.errorMessage)
            else{
                //사진 선택이 온전하게 되었다는 것임

                //선택된 사진 이미지의 경로를 기반으로 객체 만들기
                const source= {uri:response.assets[0].uri}

                //이미지 컴포넌트가 보여주는 state값에 설정
                this.setState({img:source})
            }
        })
    }

}
