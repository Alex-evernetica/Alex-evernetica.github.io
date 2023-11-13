import React, { useContext } from 'react'
import HookesHeader from '../components/HookesHeader/HookesHeader'
import './EnableHookesPage/EnableHookesPage.scss'
import arrowRight from '../assets/icons/arrow-right.svg';
import { NavigationContext } from '../App'
const FinalPage = () => {
  const { backUrl } = useContext(NavigationContext)
  const backUrlPath = sessionStorage.getItem('backUrl') || backUrl
  return (
    <div className={'enableHookesPage flexWrapper'}>
      <div className={'enableHookesPage__headerContainer'}>
        <HookesHeader/>
      </div>
      <div className={"finalContentWrapper"}>
        <div className={'mainIconDiv'}>
          <span role="img" aria-label="dog" className={'emoji'}>🥳</span>
        </div>
        <h1 className={'finalText'}>You're all set!</h1>
        <span className={'finalDescription'}>
          Get ready to find coupons<br/> and save automatically as you shop<br/> at your favourite stores.
        </span>
        <div className={'buttonDiv'}>
          <a href={`com.hookes.dev://` + backUrlPath} className={'linkToApp'}>Return to APP</a>
            <img src={arrowRight} className={'imageArrow'} alt={'arrowIcon'}/>
        </div>
      </div>

    </div>
  )
}

export default FinalPage
