## React Native
---  


#### onChagne  
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

### useEffect  
**마운트**
첫번쨰 파라미터에 무조건 실행될값 , [] 배열에 그다음 실행될 조건 빈배열시 처음 렌더링때만 실행  
**언마운트**
반환하는 함수를 정리함수라한다. , 실행조건이 빈배열 경우 언마운트될떄 정리함수 실행
useEffect(console.log(mou);  
return => console.log(unmou); , []);  

### useRef  (로그인/회원가입에 유용해보임)
querySelector등 특정 dom선택처럼 특정 컴포넌트 선택할때 사용  
**주의점 2가지**  
1. 컴포넌트의 ref로 지정하면 생성된 변수에 값이 저장되는것이아니라 current 프로퍼티에 해당값을 담는것
2. useState 이용해 생성 상태와달리 내용이변경돼도 리렌더링 되지않는다.  
```js
  const refName = useRef(null);
  useEffect(() refName.current.focus();=> []); //여기에 넣으면 처음시작할떄 name에 포커스가간다
  
  <input ref={refName} onSubmitEditing={() => refEmail.current.focus()} // 네임에서 키보드 완료버튼누르면 이메일로넘어간다
```  


