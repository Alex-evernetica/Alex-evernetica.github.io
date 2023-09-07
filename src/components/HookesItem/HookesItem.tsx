import React from "react";
import './HookesItem.scss'

interface HookesItemProps {
    text: React.ReactNode[];
    image: string;
    imageClassname?: string;
}

const hookesItem: React.FC<HookesItemProps> = ({text, image, imageClassname}) => {
    return (
        <div className={'hookesItem'}>
            <div className={'hookesItem__text'}>{text}</div>
            <img className={imageClassname} src={image} alt={'Hookes item image'}/>
        </div>
    );
}
export default hookesItem;
