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
[키보드설정]<p align="center"><img src="https://user-images.githubusercontent.com/75245755/113812061-5d447700-97a8-11eb-8dfb-9c4904ec8cf1.PNG" width="300" height="400"></p>    
</br>
</br>
#### 아이콘, 이미지 넣기  
이미지 파일을 받아서 아래와 같이 넣는다.  
![이미지]<p align="center"><img src="https://user-images.githubusercontent.com/75245755/113812752-96311b80-97a9-11eb-83ef-33d2df63efdd.PNG" width="300" height="400"></p>  
아래와 같은방식으로 불러와 사용  
```js
import { images } from './images';
...
<button type= {images.uncompled}/>
``` 
.
</br>
</br>
#### 데이터저장 AsyncStorage  
![AsyncStorage]<p align="center"><img src="(https://user-images.githubusercontent.com/75245755/113813265-86fe9d80-97aa-11eb-9e95-e6fbf33ffd03.PNG" width="300" height="400"></p>  
책에는 위와 같이나와있는데 그대로 할시 **에러** 발생  
![16]<p align="center"><img src="https://user-images.githubusercontent.com/75245755/113813321-a72e5c80-97aa-11eb-8f90-514c953b3d2e.PNG" width="300" height="400"></p>  
아래와같이 import  
![async import]<p align="center"><img src="https://user-images.githubusercontent.com/75245755/113813444-df359f80-97aa-11eb-9895-0e1e0451c341.PNG" width="300" height="400"></p>





<!-- 링크 -->
[링크이름](링크내용)

