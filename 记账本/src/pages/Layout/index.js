import { Outlet, useNavigate } from "react-router-dom";
import billSlice from "../../store/modules/billSlice";
import { fetchBillList } from "../../store/modules/billSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import './index.scss'
import { TabBar } from "antd-mobile"
import {
  BillOutline,
  CalculatorOutline,
  AddCircleOutline
} from 'antd-mobile-icons'

const tabs = [
  {
    key: '/mouth',
    title: '月度账单',
    icon: <BillOutline />,
  },
  {
    key: '/new',
    title: '记账',
    icon: <AddCircleOutline />,
  },
  {
    key: '/year',
    title: '年度账单',
    icon: <CalculatorOutline />,
  },
]

function Layout() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {billList} = useSelector(state => state.bill)
  useEffect(() => {
    dispatch(fetchBillList())
  }, [dispatch])
  const switchRoute = (path) => {
    navigate(path)
  }

  return (
    <div className="layout">
      <div className="container">
        <Outlet />
      </div>
      <div className="footer">
        <TabBar onChange={switchRoute}>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    </div>
  )
}

export default Layout;