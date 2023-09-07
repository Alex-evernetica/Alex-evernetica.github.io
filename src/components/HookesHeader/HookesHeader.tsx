import React from "react";
import './HookesHeader.scss';
import HOOKES from '../../assets/icons/HOOKES.svg'

const HookesHeader = () => {
    return (
        <div className={'header'}>
            <img className={'header__image'} src={HOOKES} alt={'Hookes Logo'}/>
        </div>
    );
}
export default HookesHeader;
