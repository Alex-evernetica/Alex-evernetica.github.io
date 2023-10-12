import React, {useEffect} from "react";
import './EnableHookesPage.scss'

import HookesHeader from "../../components/HookesHeader/HookesHeader";

import puzzle from '../../assets/icons/puzzle.svg';
import safariToolBar from '../../assets/icons/Aa.png';
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
        <span key="1">1. Tap the </span>,
        <strong key="2">aA</strong>,
        <span key="3"> in the address bar</span>,
    ];

    const text2 = [
        <span key="1">2. Then go to </span>,
        <strong key="2">Manage Extensions</strong>,
    ];

    const text3 = [
        <span key="1">3. Toggle on </span>,
        <strong key="2">“Hookes”</strong>,
        <span key="3"> and select </span>,
        <strong key="4">“Done”</strong>,
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
                <HookesItem text={text1} image={safariToolBar} imageClassname={'hookesItem__image'}/>
                <HookesItem text={text2} image={puzzle} />
                <HookesItem text={text3} image={toggle} imageClassname={'hookesItem__image_switch'} />
            </div>
        </div>
    );
}
 export default EnableHookesPage;
