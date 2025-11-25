import { Outlet } from "react-router-dom";
import { Button } from "antd-mobile";
import billSlice from "../../store/modules/billSlice";
import { fetchBillList } from "../../store/modules/billSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Layout() {
  const dispatch = useDispatch()
  const {billList} = useSelector(state => state.bill)
  useEffect(() => {
    dispatch(fetchBillList())
  }, [dispatch])

  return (
    <div className="layout">
      <div className="container">
        <Outlet />
      </div>
      <div className="footer">
        <TabBar>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    </div>
  )
}

export default Layout;