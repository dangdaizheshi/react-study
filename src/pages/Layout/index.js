import { Link, Outlet} from "react-router-dom"

function Layout() {
    return (
        <div className="layout">
            <div>我是layout</div>
            <Link to = '/layout'>面板</Link>
            <br/>
            <Link to = '/layout/about'>关于</Link>
            <br/>
            <Outlet></Outlet>
        </div>
    )
}

export default Layout