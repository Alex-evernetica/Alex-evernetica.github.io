import React, { useContext } from 'react'
import HookesHeader from '../components/HookesHeader/HookesHeader'
import './EnableHookesPage/EnableHookesPage.scss'
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
          <span role="img" aria-label="dog" className={'emoji'}>🤘</span>
        </div>
        <h1 className={'finalText'}>You’ve enabled Hookes!</h1>
        <span className={'finalDescription'}>
          We’ll apply saving automatically as you shop on more than 40,000 stores. Enjoy!
        </span>
        <div className={'buttonDiv'}>
          <a href={`com.hookes.dev://` + backUrlPath} className={'linkToApp'}>Return to APP</a>
        </div>
      </div>

    </div>
  )
}

export default FinalPage
