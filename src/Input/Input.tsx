import React, {type ChangeEvent ,type CSSProperties } from 'react';

interface InputProps{
    label: string;
    placeholder: string;
    value: string;
    onChange: (e : ChangeEvent<HTMLInputElement>) => void;
    type?:string;
    style?: CSSProperties;
    className?: string;

}

export const Input:React.FC<InputProps> = ({label ,placeholder, value, onChange , style}) => {
    return (
        <div>
            <label htmlFor="">{label}</label>
            <input type="text"
            placeholder={placeholder} 
            value={value}
            onChange={onChange}
            style={style}/>
            
        </div>
    )
}