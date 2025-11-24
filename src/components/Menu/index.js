import { useDispatch, useSelector } from 'react-redux'
import './index.scss'
import { useEffect, useState } from 'react';
import { fetchFoodList } from '../../store/modules/foodSlice';
import foodSlice from '../../store/modules/foodSlice';

const Menu = () => {

  const dispatch = useDispatch();
  const {foodsList, nowClick} = useSelector(state => state.foods);
  const {setNowClick} = foodSlice.actions
  const menus = foodsList.map(item => ({ tag: item.tag, name: item.name }))
  const changeTab = (nowName) => {
    dispatch(setNowClick(nowName))
  }
  return (
    <nav className="list-menu">
      {/* 添加active类名会变成激活状态 */}
      {menus.map((item, index) => {
        return (
          <div
            key={item.tag}
            onClick={() => changeTab(index)}
            className={`list-menu-item ${nowClick === index && 'active'}`}
          >
            {item.name}
          </div>
        )
      })}
    </nav>
  )
}

export default Menu
