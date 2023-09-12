import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import HookesHeader from '../components/HookesHeader/HookesHeader'
import './EnableHookesPage/EnableHookesPage.scss'
import HookesItem from '../components/HookesItem/HookesItem'
import HookesIcon from '../assets/icons/Skeleton.png'
import AlwaysAllow from '../assets/icons/AlwayAllow.png'
import AAonWeb from '../assets/icons/AAonWeb.png'

const SecondStep = () => {
  // const element = document.getElementById('actionButton')
  const navigation = useNavigate()
  // console.log(element)
  const text1 = [
    <span key="1">4. Tap the </span>,
    <strong key="2">Hookes Extension</strong>,
  ]

  const text2 = [
    <span key="1">5. Tap </span>,
    <strong key="2">Always allow... <br/>
      Always allow, on every website</strong>,
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
        <span className={'textContainer__title'}>Always allow...</span>

        <span className={'textContainer__text'}>
                    To pop up at checkout, we need to be available! You can update these preferences in your iOS setting.
        </span>
      </div>
      <div className={'itemsContainer'} id={"triggerPermissionCheck"} onClick={handleClick} >
        <HookesItem text={text1} image={HookesIcon} imageClassname={'hookesItem__icon'}/>
        <HookesItem text={text2}>
          <img src={AlwaysAllow}
               alt={'aA'}
               className={'imagePng'}/>
          <img src={AAonWeb} alt={'aA'} className={'imagePng'}/>
        </HookesItem>
      </div>
    </div>
  )
}

export default SecondStep
