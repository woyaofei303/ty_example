import App from '../App'
import Head from '../components/header/header'
import home from '../components/page/home/home'
import Foot from '../components/footer/footer'
import leftFloat from '../components/leftFloat/leftFloat'
import rightFloat from '../components/rightFloat/rightFloat'

export default [{
  path: '/',
  component: App,
  children: [{
    path: '',
    components: {
      Header_1: Head,
      home: home,
      Footer_1: Foot,
      leftFloat: leftFloat,
      rightFloat: rightFloat
    }
  }]
}]
