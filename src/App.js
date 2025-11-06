import { useRef, useState } from 'react'
import './index.scss'

const defaultList = [
  {
    rpid: 3,
    user: {
      uid: '13258165',
      avatar: '',
      uname: '周杰伦',
    },
    content: '哎哟，不错哦',
    ctime: '10-18 08:15',
    like: 89,
  },
  {
    rpid: 2,
    user: {
      uid: '36080105',
      avatar: '',
      uname: '许嵩',
    },
    content: '我寻你千百度 日出到迟暮',
    ctime: '11-13 11:29',
    like: 88,
  },
  {
    rpid: 1,
    user: {
      uid: '30009257',
      avata: '',
      uname: '前端',
    },
    content: '学前端就',
    ctime: '10-19 09:00',
    like: 66,
  },
]
// 当前登录用户信息
const user = {
  uid: '30009257',
  avatar: '',
  uname: '黑马前端',
}

const tabs = [
  { type: 'like', text: '最热' },
  { type: 'ctime', text: '最新' },
]
const App = () => {
  const [commentList, setcommentList] = useState(defaultList);
  const [type, settype] = useState('like');
  const [content, setcontent] = useState('');

  const deleteComment = (id) => {
    setcommentList(commentList.filter(item => item.user.uid !== id));
  }

  const handleTab = (id) => {
    settype(id);
    if(id === 'like') {

    }
  }

  return (
    <div className="app">
      {/* 导航 Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">评论</span>
            {/* 评论数量 */}
            <span className="total-reply">{10}</span>
          </li>
          <li className="nav-sort">
            {/* 高亮类名： active */}
              {tabs.map(item => (
                <span 
                  className={`nav-item ${type === item.type && 'active'}`}
                  key = {item.type} 
                  onClick={() => handleTab(item.type)}>
                  {item.text}
                </span>
              )
              )}
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* 发表评论 */}
        <div className="box-normal">
          {/* 当前用户头像 */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" alt="用户头像" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* 评论框 */}
            <textarea
              className="reply-box-textarea"
              placeholder="发一条友善的评论"
              value = {content}
              onChange={(e) => setcontent(e.target.value)}
            />
            {/* 发布按钮 */}
            <div className="reply-box-send">
              <div className="send-text">发布</div>
            </div>
          </div>
        </div>
        {/* 评论列表 */}
        <div className="reply-list">
          {/* 评论项 */}
          {commentList.map(item => (
            <div className="reply-item">
              <div className="root-reply-avatar">
                <div className="bili-avatar">
                  <img className="bili-avatar-img"/>
                </div>
              </div>
              <div className="content-wrap">
                <div className="user-info">
                  <div className="user-name">{item.user.uname}</div>
                </div>
                <div className="root-reply">
                  <span className="reply-content">{item.content}</span>
                  <div className="reply-info">
                    <span className="reply-time">{item.ctime}</span>
                    <span className="reply-time">点赞数:{item.like}</span>
                    {item.user.uid === user.uid && <span className='delete' onClick={() => deleteComment(user.uid)}>删除</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;