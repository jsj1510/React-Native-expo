##ToDo List
___



#####프로젝트 설치  
`expo init react-native-todo`  
`cd react-native-todo`  
이 프로젝트에서는 스타일컴포넌트와 prop-types를 사용합니다.  
`npm i styled-components prop-types`  
      
</br>
</br>


####SageAreaView 컴포넌트  
자동으로 노치디자인 까지 padding 하여 화면이 짤리지 않게한다.
`const Container = styled.SafeAreaView``;`  
<p align="center"><img src="https://user-images.githubusercontent.com/75245755/113812486-24f16880-97a9-11eb-8d89-839a3511869e.PNG" width="300" height="400"></p> 
</br>
</br>

####StatusBar 컴포넌트  
안드로이드 상태바에 생삭을변경해 title이 배경과 색이 비슷할시 가려지는 현상 해결  

`import { StatusBar } from 'react-native';`  

``` js
<StatusBar
    barStyle="light-content"
    backgroundColor={theme.background}
/>
```  
.
</br>
</br>  


####Dimensions , useWindowDimensions  
**모바일기기 크기에 자동으로 맞춰준다.**  
Dimensions는 처음값 고정   
useWindowDimensions 회전해도 맞춰준다.  
```js
import { Dimensions } from 'react-native';
...
export default function App() {
    const width = Dimensions.get('window').width;
    return(
         <StyledInput 
        width={width} />
    )
```   
.
</br>
</br>
####TextInput 컴포넌트   
**키보드설정**  
기본값으로 첫글자 대문자 오타 자동수정  
ios는 완료버튼이 return으로 되어있다.  
```js
return(
    <StyledInput
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="done"
    />
```  
.
autoCapitalize 자동 대문자전을 none으로 없앤다.  
autoCorrect 자동 수정기능을 없앤다  
returnKeyType 키보드 완료 버튼설정  
<p align="center"><img src="https://user-images.githubusercontent.com/75245755/113812061-5d447700-97a8-11eb-8dfb-9c4904ec8cf1.PNG" width="300" height="400"></p>    
</br>
</br>
#### 아이콘, 이미지 넣기  
이미지 파일을 받아서 아래와 같이 넣는다.  
<p align="center"><img src="https://user-images.githubusercontent.com/75245755/113812752-96311b80-97a9-11eb-83ef-33d2df63efdd.PNG"></p>  
아래와 같은방식으로 불러와 사용  
```js
import { images } from './images';
...
<button type= {images.uncompled}/>
``` 
.
</br>
</br>
#### AsyncStorage  install *데이터저장* 
<p align="center"><img src="https://user-images.githubusercontent.com/75245755/113814665-f2e20580-97ac-11eb-85eb-243cd7578b07.PNG"></p>  

책에는 위와 같이나와있는데 그대로 할시 **에러** 발생  
<p align="center"><img src="https://user-images.githubusercontent.com/75245755/113813321-a72e5c80-97aa-11eb-8f90-514c953b3d2e.PNG" ></p>  
아래와같이 import  
<p align="center"><img src="https://user-images.githubusercontent.com/75245755/113813444-df359f80-97aa-11eb-9895-0e1e0451c341.PNG" ></p>  

**데이터담기**
```js
const _saveTasks = async tasks => {
        try {
            await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
            setTasks(tasks);
        } catch(e) {
            console.log(e);
        }
    }
```  
</br>

.  
####AppLoading install *로딩*   
load 를 만들어  앱 로딩때 실행되게 해 첫화면이 나타나기전에 완료되어 불러온 항목이 화면에 렌더링  
객체 형식(todo add가 객체형식)으로 불러오기  

**데이터불러오기**  
```
const _loadTasks = async () => {
        const loadedTasks = await AsyncStorage.getItem('tasks');
        setTasks(JSON.parse(loadedTasks || '{}'));
    };
```  
<p align="center"><img src="https://user-images.githubusercontent.com/75245755/113815152-ad720800-97ad-11eb-8fdd-a0656ba56612.PNG"></p>  

책과 같이 입력하면 **에러**  
아래 명령어 입력  
![17](https://user-images.githubusercontent.com/75245755/113816085-3b9abe00-97af-11eb-930f-e7962b40e322.PNG)  
import 도 위에 책내용과 달리 입력  
![apploading](https://user-images.githubusercontent.com/75245755/113816546-f4f99380-97af-11eb-8e9f-4357d2da1895.PNG)  
</br>
</br>
#### 앱 아이콘 , 로딩화면 변경  
app.json 파일  
reizemode cover로 변경시 로딩이미지가 화면전체를덮는다.  
bgc는 백그라운드 색변경  
splash > image 변경시 로딩화면 변경  
icon 변경시 앱 아이콘 변경  
![19](https://user-images.githubusercontent.com/75245755/113816772-3c801f80-97b0-11eb-92f1-694e6bc58b1b.PNG)  


