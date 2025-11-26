import { useEffect } from "react";
import {http} from '../../utils/http'

function Layout() {
  useEffect(() => {
    http.get('/user/profile')
  }, [])
  return (
    <div className="main">
      this is lout
    </div>
  );
}

export default Layout;