import { Link, useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate();
    return (
        <div>
            我是Home页
            <Link to = '/login'>去往登录页</Link>
            <button onClick={() => navigate('/login')}>点我去往登录页</button>
            <button onClick={() => navigate('/login?id=001&name=jack')}>点我传参</button>
            <button onClick={() => navigate('/login/1001/jack')}>点我传参2</button>
        </div>
    )
}
export default Home