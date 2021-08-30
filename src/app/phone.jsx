
import React, { useState } from 'react';




import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


const PhoneInputField = ({
    field,
    form
}) => {
    const [value, setValue] = useState()

    return (
        <div className="input-field">
            <PhoneInput
                placeholder="Enter phone number"
                value={value}
                onChange={setValue} 
            />
        </div>
    );
};

export default PhoneInputField;