import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: 'Index'
  }

  componentWillMount () { }

  componentDidMount () { 
    // console.log("得到传递过来的值是:");
    // console.log(this.$router.params.id);
    
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
