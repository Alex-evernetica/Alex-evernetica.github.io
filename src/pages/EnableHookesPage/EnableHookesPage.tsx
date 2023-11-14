import React, {useEffect} from "react";
import './EnableHookesPage.scss'

import HookesHeader from "../../components/HookesHeader/HookesHeader";

import aaIcon from '../../assets/icons/AaIcon.svg';
import blackPuzzle from '../../assets/icons/BlackPuzzle.svg';
import toggle from '../../assets/icons/Switch.png';
import HookesItem from "../../components/HookesItem/HookesItem";
import {useNavigate} from "react-router-dom";

const EnableHookesPage = () => {
    const element = document.getElementById('actionButton')
    const navigate = useNavigate()
    useEffect(()=>{
        if (element?.innerHTML) {

            navigate('/finalPage')
        }
    }, [element, navigate])

    const text1 = [
        <span key="1">1. Tap the</span>,
        <img className={'hookesItem__image'} src={aaIcon} alt={'Hookes item image'}/>,
        <span key="2">in the address bar, </span>,
        <span >then go to </span>,
        <strong>Manage Extensions</strong>,
        <img className={'hookesItem__image'} src={blackPuzzle} alt={'Hookes item image'}/>,
    ];
    const text2 = [
      <span key="1">2. Toggle on </span>,
      <strong key="2">"Hookes"</strong>,
      <img key="3" className={'hookesItem__switchImage'} src={toggle} alt={'Hookes item image'}/>,
      <span key="4">, select </span>,
      <strong key="5">"Done"</strong>,
      ];

    useEffect(() => {
       const  hookesProgreesUrl =    localStorage.getItem('hookesProgreesUrl')
        if (hookesProgreesUrl) {
            navigate(hookesProgreesUrl)
        }
    }, [navigate])

    return (
        <div className={'enableHookesPage'}>
            <div className={'enableHookesPage__headerContainer'}>
                <HookesHeader/>
            </div>

            <div className={'textContainer'}>
                <span className={'textContainer__title'}>Enable Hookes on Safari</span>
                <br />
                <span className={'textContainer__text'}>
                    We never sell, store, or view your data. Check out our{' '}
                    <a className={'privacyLink'} href="#">
                        <span>privacy policy</span>
                    </a>{' '}
                    to learn more.
                </span>
            </div>

            <div className={'itemsContainer'}>
                <HookesItem text={text1}/>
                <HookesItem text={text2}/>
                <span className={'enableHookesPage__number'}>1/2</span>
            </div>
        </div>
    );
}
 export default EnableHookesPage;
