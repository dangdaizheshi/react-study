import * as echarts from 'echarts'
import { useEffect } from 'react'
import Bar from './components/Bar'

const Home = () => {
  useEffect(() => {
    // 1. 获取渲染图表的dom节点
    const chartDom = document.getElementById('main')
    const myChart = echarts.init(chartDom)
    const option = {
      title: {
        text: '三大框架满意度'
      },
      xAxis: {
        type: 'category',
        data: ['Vue', 'React', 'Angular']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [70, 40, 10],
          type: 'bar'
        }
      ]
    }
    option && myChart.setOption(option)
  }, [])
  return (
    <div>
      <Bar title = {"三大框架的满意度"}></Bar>
      <Bar title = {"三大框架使用率"}></Bar>
    </div>
  )
}
export default Home