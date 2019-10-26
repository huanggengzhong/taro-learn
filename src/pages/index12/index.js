import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.less";
import BlueCom from "../../components/blueCom/Index.jsx";
import RedCom from "../../components/redCom/Index.jsx";


export default class Index12 extends Component {
  config = {
    navigationBarTitleText: "事件的传递"
  };
  constructor(props){
    super(props);

    // 初始化state
    this.state={
      bgColor:"pink"
    }
  }
  clickHd(bgColor){
    console.log(bgColor);
    
    //坑: 突然发现现在无效了
    this.setState({
      bgColor:bgColor
    })
  }
  clickHd2(bgColor){
    console.log(bgColor);
    
    // 本组件可以改
    this.setState({
      bgColor:"blue",
     
    })
  }
  render() {

    return (
      <View style={{backgroundColor:this.state.bgColor}} className="index">
      {/* 组件直接写onclick只是做了事件的传递 不会触发事件 */}
    <BlueCom onClick={this.clickHd} />
    <RedCom onClick={this.clickHd} />
    <View onClick={this.clickHd2}>本组件修改</View>
      </View>
    );
  }
}
