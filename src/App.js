import { useRef, useState } from 'react';
import './index.scss';
const defaultList = [
  {
    id: new Date(),
    name: '漳卅',
    content: '我是法外狂徒'
  },
  {
    id: new Date(),
    name: '呃呃呃',
    content: '范德萨'
  },
  {
    id: new Date(),
    name: 'fgf',
    content: '的广告'
  }
]
function App() {
  let [list, setlist] = useState(defaultList);
  let [iptName, setiptName] = useState('');
  let [iptContent, setiptContent] = useState('');
  const ipt = useRef('');
  let [toptag, settoptag] = useState('fresh');
  const a = [
    {
      tag: 'fresh',
      content: '最新'
    },
    {
      tag: 'hot',
      content: '最热'
    }
  ]

  // 添加
  const handleAdd = () => {
    if(iptName === '') {
      alert('请输入名字');
      return;
    }
    else if(iptContent === '') {
      alert('评论');
      return;
    }
    setlist([
      {
        id: new Date(),
        name: iptName,
        content: iptContent
      },
      ...list
    ])
    setiptName('');
    setiptContent('');
    ipt.current.focus();
  }
  // 删除
  const handleDel = (id) => {
    setlist(list.filter(item => (item.id !== id)));
  }
  // tab切换
  const changeTag = (id) => {
    settoptag(id);
    if(id === 'fresh') {
      setlist(list.sort((a, b) => {
        return a.name - b.name;
      }))
    }
    else {
      setlist(list.sort((a, b) => {
        return a.content - b.content;
      }))
    }
  }


  // main
  return (
    <div className="App">
      <div className='banner'>
        {a.map(item => (
          <span 
            key = {item.tag} 
            onClick={() => changeTag(item.tag)}
            className={`${toptag === item.tag && 'active'}`}>
            {item.content}
          </span>
        ))}
      </div>
      <div className="top">
        <input 
          value={iptName}
          onChange={(e) => setiptName(e.target.value)}
          type="text"
          ref = {ipt}
          placeholder="请输入名字"/>
        <button onClick={handleAdd}>发布</button>
        <br />
        <textarea 
          value={iptContent}
          onChange={(e) => setiptContent(e.target.value)}
          className = "kuang" 
          placeholder="请输入"/>
      </div>
      {!list.length ? (<div className="non">暂无评论</div>) : (
        <ul>
        {list.map(item => (
          <li key = {item.id} className='lli'>
            <span>{item.name}</span>
            <span>{item.content}</span>
            <span onClick={() => handleDel(item.id)}>删除</span>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
}

export default App;