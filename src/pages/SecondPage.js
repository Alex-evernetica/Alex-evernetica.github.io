import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import HookesHeader from '../components/HookesHeader/HookesHeader'
import './EnableHookesPage/EnableHookesPage.scss'
import HookesItem from '../components/HookesItem/HookesItem'
import AlwaysAllow from '../assets/icons/AlwayAllow.svg'
import aAonEvery from '../assets/icons/aAonEvery.svg';
import Aa from "../assets/icons/Aa.png";
import Exclamation from "../assets/icons/exclamation.png";

const SecondStep = () => {
  // const element = document.getElementById('actionButton')
  const navigation = useNavigate()
  const text1 = [
    <span key="1">1. Tap the </span>,
    <img key="2" className={'hookesItem__image'} src={Aa} alt={'aA'}/>,
    <span key="3">in the address bar</span>,
  ]

  const text2 = [
    <span key="1">2. Tap the </span>,
    <img key="2" className={'hookesItem__image'} src={Exclamation} alt={'aA'}/>,
    <span key="3">by the </span>,
    <strong key="4">"Hookes" extension</strong>,
  ]
  const text3 = [
    <span key="1">3. Then select</span>,
    <img key="2" className={'imageAA'} src={AlwaysAllow} alt={'aA'}/>,
  ]
  const text4 = [
    <span key="1">4. And</span>,
    <img key="2" className={'imageAAEvery'} src={aAonEvery} alt={'aAonEvery'}/>,
  ]
  useEffect(() => {
    const tickElementCheck = setInterval(() => {
      const element = document.getElementById('actionButton')
      if (element?.innerHTML) {
        clearInterval(tickElementCheck)
        navigation('/finalPage')
      }
    })
    return () => clearInterval(tickElementCheck)
  }, [])

  useEffect(() => {
    const sessionIsUpdated = sessionStorage.getItem('isUpdated')
    if (!sessionIsUpdated) {
      window.location.reload()
      sessionStorage.setItem('isUpdated', true)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('hookesProgreesUrl', '/secondStep')
  } , [])
  // useEffect(() => {
  //   if (element?.innerHTML) {
  //     navigation('/safari-ext-helper/finalPage')
  //   }
  // }, [element, navigation])

  const handleClick = (e) => {
    e.stopPropagation()

    alert('Please, follow the instructions')
  }
  return (
    <div className={'enableHookesPage'}>
      <div className={'enableHookesPage__headerContainer'}>
        <HookesHeader/>
      </div>

      <div className={'textContainer'}>
        <span className={'textContainer__title'}>Always allow, on every website.</span>

        <span className={'textContainer__text'}>
                    To pop up at checkout, we need to be available! You can update these preferences in your iOS setting.
        </span>
      </div>
      <div className={'itemsContainer'} id={"triggerPermissionCheck"} onClick={handleClick} >
        <HookesItem text={text1}/>
        <HookesItem text={text2}/>
        <HookesItem text={text3}/>
        <HookesItem text={text4}/>
      </div>
    </div>
  )
}

export default SecondStep
