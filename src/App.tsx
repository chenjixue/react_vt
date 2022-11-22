import { useState } from 'react'
// import '@/App.scss'
import { ConfigProvider, DatePicker, message,Button } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/locale/zh_CN';
import 'antd/dist/reset.css';
import '@/App.scss'
import Cpt from './components/component_two'
import Cpo from './components/component_one'
dayjs.locale('zh-cn');
function App() {

  return (
    <div className="App">
       <Button type="primary">测试按钮</Button>
      <ConfigProvider locale={zhCN}>
        <div style={{ width: 400, margin: '100px auto' }}>
          <DatePicker  />
          <div style={{ marginTop: 16 }}>
            当前日期
          </div>
        </div>
      </ConfigProvider>
      <Cpt></Cpt>
      <Cpo></Cpo>
    </div>
  )
}

export default App
