// circle-checkbox.js
import React from 'react';
import './circle-checkbox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VisibilitySensor from '../../themeControls/VisibilitySensor/VisibilitySensor';

const CircleCheckbox = ({ id, checked, onChange, iconChecked, iconUnchecked, iconColor, wholeEleClassName, delay }) => {
    return (
        <VisibilitySensor oneTime={true} delay={delay}>
            {({ isVisible }) => (
                <div className={`circle-checkbox ${wholeEleClassName} ${isVisible ? 'fade-in' : 'hidden'}`}>
                    <input
                        type="checkbox"
                        id={id}
                        checked={checked}
                        onChange={onChange}
                        hidden
                    />
                    <label htmlFor={id} className='circle-checkbox__label'>
                        {checked ? (
                            <FontAwesomeIcon icon={iconChecked} color={iconColor} size="xs" />
                        ) : (
                            <FontAwesomeIcon icon={iconUnchecked} color={iconColor} size="xs" />
                        )}
                    </label>
                </div>
            )}
        </VisibilitySensor>
    );
};

export default CircleCheckbox;
