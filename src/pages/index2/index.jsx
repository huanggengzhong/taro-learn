import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: 'Index2'
  }

  componentWillMount () { }

  componentDidMount () { 
    console.log("onReady");
    Taro.navigateTo({
      // url:'/pages/index/index'
      //直接写文件路径也可以
      url:'../index/index?id=3'
    })
    
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world</Text>
      </View>
    )
  }
}
