import React from 'react'
import HookesHeader from '../components/HookesHeader/HookesHeader'
import Cool from '../assets/icons/Cool.png'
import './EnableHookesPage/EnableHookesPage.scss'
const FinalPage = () => {
  return (
    <div className={'enableHookesPage flexWrapper'}>
      <div className={'enableHookesPage__headerContainer'}>
        <HookesHeader/>
      </div>
      <div className={"finalContentWrapper"}>
        <div className={'mainIconDiv'}>
          <img src={Cool} alt={'aA'} className={'coolImg'}/>
        </div>
        <h1 className={'finalText'}>You’ve enabled Hookes!</h1>
        <span className={'finalDescription'}>
          We’ll apply saving automatically as you shop on more than 40,000 stores. Enjoy!
        </span>
        <div className={'buttonDiv'}>
          <a href="com.hookes.dev://WelcomeInScreen" className={'linkToApp'}>Return to APP</a>
        </div>
      </div>

    </div>
  )
}

export default FinalPage
