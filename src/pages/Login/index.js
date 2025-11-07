import { useParams, useSearchParams } from "react-router-dom"

function Login() {
    const [params] = useSearchParams();
    const par = useParams();
    return (
        <div>
            <div>我是登录页 {params.get('name')}</div>
            <div>{par.id} + {par.name}</div>
        </div>
    )
}
export default Login