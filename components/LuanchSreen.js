import { Text, SafeAreaView, StyleSheet,ImageBackground,View,TextInput,TouchableOpacity,Image,Modal,Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
import {createContext,useState} from 'react';
// or any files within the Snack
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function LuanchSreen({navigation}) {
  const [isCreateModalVisible, setCreateModalVisible] = useState(false);
const [isLoginModalVisible, setLoginModalVisible] = useState(false);
const [nameAccount, setnamAccount] = useState('');
const [password, setpassword] = useState('');
const [errorMMessage, setErroMaessage] = useState('');


const handleCreateAccount = async()=> {
  if(!nameAccount || !password){
    setErroMaessage("Vui lòng nhập đủ thông tin!");
    return;
  }
  try{
      const response = await  fetch("https://6731ce417aaf2a9aff12326d.mockapi.io/baoAccount");
      const accounts = await response.json();
      const accountExists = accounts.some(acc => acc.nameAccount === nameAccount);
      if(accountExists){
        setErroMaessage("Tài khoản không tồn tại");
        return;
      }
      await fetch("https://6731ce417aaf2a9aff12326d.mockapi.io/baoAccount",{
        method :'POST',
        headers :{
          'Content-Type' :'application/json',
        },
        body: JSON.stringify({nameAccount,password}),
      });
      Alert.alert("Thành công","Tài khoản đã được tạo!");
      setCreateModalVisible(false);
      setnamAccount('');
      setpassword('');
      setErroMaessage('');
  }catch{
    setErroMaessage("Đã xảy ra lỗi khi tạo tài khoản");

  }
};
const handleLogin= async() =>{
  if(!nameAccount || !password){
    setErroMaessage("Vui lòng nhập đầy đủ thông tin");
  }
  try{
      const response = await fetch('https://6731ce417aaf2a9aff12326d.mockapi.io/baoAccount');
      const accounts = await response.json();
      const accountValid = accounts.some( acc => acc.nameAccount=== nameAccount && acc.password===password);
      if(accountValid){
        Alert.alert("Đăng nhập thành công!")
        setnamAccount("");
        setpassword('');
        setErroMaessage('');
        navigation.navigate("HomePage");
        setLoginModalVisible(false);
      }else{
        setErroMaessage("Tên tài khoản hoặc mật khẩu không đúng!")
      }
  }catch(error){
    setErroMaessage("Đã xảy ra lỗi khi đăng nhập!");

  }
};


  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../LuanchSreen/Image30.png")}
        style={StyleSheet.absoluteFillObject} // Bao phủ toàn màn hình
        resizeMode="cover" // Tùy chỉnh cách hình nền hiển thị
      />
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop :10,marginLeft :20,marginRight :20}}>
        <Text style={{color:'white',fontSize:20}}>9:41</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:80}}>
          <MaterialCommunityIcons name="signal" size={20} color="#FFFFFF" />  
      <Icon name="wifi" size={20} color="#FFFFFF" />                   
      <Ionicons name="battery-full-outline" size={20} color="#FFFFFF" /> 
        </View>
      </View>
       <View style={{marginTop : 70,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
        <Image source={require("../LuanchSreen/Image33.png")} style={{height : 90,width : 90}}/>
        </View>
        <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop : 200}}>
          <Text style={{fontSize : 40,color:'white',fontWeight : '700'}}>Your music</Text>
          <Text style={{fontSize : 40,color:'white',fontWeight : '700'}}>Your</Text>
          <Text style={{fontSize : 40,color:'white',fontWeight : '700'}}>artists</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop : 40}}>
          <TouchableOpacity style={{height:50,width:'90%',backgroundColor:'rgb(23,26,31)',borderRadius:50,padding:7}}>
            <Text style={{textAlign:'center',color:'white',fontSize:20,fontWeight:'500'}} onPress={()=>setCreateModalVisible(true)}>Create an account</Text>
          </TouchableOpacity>
          
         </View>
        <Modal
          animationType="slide"
          transparent="true"
          visible={isCreateModalVisible}
          onRequestClose={()=>setCreateModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Create Account</Text>
              {errorMMessage ?(
                <Text style={styles.errorMessage}>{errorMMessage}</Text>
              ):null}
              <TextInput style={styles.input}
              placeholder="Name Account"
              value ={nameAccount} onChangeText={(text)=>{
                setnamAccount(text);
                setErroMaessage("");  //Xóa khi lỗi người dùng nhập
              }}
              />
              <TextInput
              style ={styles.input}
              placeholder ="Password"
              secureTextEntry={true}
              value={password} onChangeText={(pass)=>{
                setpassword(pass);
                setErroMaessage("");
              }}/>
              <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
                <Text style={styles.buttonText}> Accept</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={() => {
                setCreateModalVisible(false);
                setErrorMessage('');
              }}>
              <Text style={[styles.buttonText, { color: 'black' }]}>Hủy</Text>
            </TouchableOpacity>
            </View>
          
          </View>

        </Modal>
         <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop : 20}}>
          <TouchableOpacity style={{height:50,width:'90%',backgroundColor:'rgb(235,253,255)',borderRadius:50,padding:7}}
           onPress = {()=>{setLoginModalVisible(true)}}>
            <Text style={{textAlign:'center',color:'rgb(91,189,199)',fontSize:20,fontWeight:'500'}}>I already have an account</Text>
          </TouchableOpacity>
         </View>
         <Modal
          animationType="slide"
          transparent={true}
          visible={isLoginModalVisible}
          onRequestClose={()=>setLoginModalVisible(false)}>
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Đăng nhập</Text>
                {errorMMessage ?(
                  <Text style={styles.errorMessage}>{errorMMessage}</Text>
                ):null}
                <TextInput style={styles.input} placeholder="Tên tài khoản"
                value={nameAccount}
                onChangeText={(text)=>{
                  setnamAccount(text);
                  setErroMaessage('');
                }}
                />
                <TextInput style={styles.input} placeholder="Mật khẩu"  secureTextEntry={true} value={password}  onChangeText={(text)=>{
                  setpassword(text);
                  setErroMaessage('');
                }}/>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                  <Text style={styles.buttonText}>Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button,styles.cancelButton]} onPress={()=>{
                  setLoginModalVisible(false);
                  setErroMaessage('');
                }}>
                <Text style={[styles.buttonText,{color:'black'}]}>Hủy</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          </SafeAreaView>
       
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
   modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#00BDD6',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
  },
  cancelButton: {
    backgroundColor: '#FF6347',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10,
    fontSize: 14,
    textAlign: 'center',
  },

});
