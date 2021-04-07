##React Native
---  


####onChagne  
react 에서 e.tarket.value 대신에 e.nativeEvent.text 형식으로 쓰인다.  

**onChangeText 텍스트값만 바꿀때**

onChangeText={text => setCount(text)}/>


### Pressable 컴포넌트  
0.63 부터 TouchableOpacity 컴포넌트를 대체  
![pressalbe](https://user-images.githubusercontent.com/75245755/113818715-24f66600-97b3-11eb-9bc0-abdd80f23403.PNG)  
HitRect 손가락 크기를 고려해 버튼보다 좀더 넓은범위에 클릭범위  
PressRect 버튼누른상태로 끌고갈수있는 범위  

### style flex  
flex로 기기별 비율을 쉽게 맞출수있다  
ex) 1: 2: 1  
![flex 1 2 1](https://user-images.githubusercontent.com/75245755/113819330-1eb4b980-97b4-11eb-9ad1-79c5d9e028ee.PNG)  

