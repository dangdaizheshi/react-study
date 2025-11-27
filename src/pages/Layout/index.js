import { Layout, Menu, Popconfirm } from 'antd'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import './index.scss'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { fetchUserInfo } from '../../store/modules/user'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import useSelection from 'antd/es/table/hooks/useSelection'

const { Header, Sider } = Layout

const GeekLayout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {userInfo} = useSelection(state => state.user)
  const items = [
    {
      label: '首页',
      key: '/',
      icon: <HomeOutlined />,
    },
    {
      label: '文章管理',
      key: '/article',
      icon: <DiffOutlined />,
    },
    {
      label: '创建文章',
      key: '/publish',
      icon: <EditOutlined />,
    },
  ]
  useEffect(() => {
    dispatch(fetchUserInfo())
  }, [dispatch])
  const changeMenu = (values) => {
    navigate(values.key)
  }
  // 反向高亮
  const location = useLocation() // 获取路径
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{userInfo.name}</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消">
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            selectedKeys={location.pathname}
            items={items}
            onClick={changeMenu}
            style={{ height: '100%', borderRight: 0 }}
          ></Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  )
}

export default GeekLayout