import React from "react";
import './HookesItem.scss'

interface HookesItemProps {
    text: React.ReactNode[];
    image?: string;
    imageClassname?: string;
    children?: React.ReactNode;
}

const hookesItem: React.FC<HookesItemProps> = ({text, image, imageClassname, children}) => {
    return (
      <div className={'hookesItem'}>
          <div className={'hookesItem__text'}>{text}</div>
          {
            image &&(
              <img className={imageClassname} src={image} alt={'Hookes item image'}/>
            )
          }
          {children}
      </div>
    );
}
export default hookesItem;
