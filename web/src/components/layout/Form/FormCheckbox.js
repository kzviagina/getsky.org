import React from 'react';
import CheckBox from 'components/layout/Checkbox';

const FormCheckbox = (props) => {
    const { label, input } = props;

    return <CheckBox checked={!!input.value} { ...input } labelText={label} inline />
};

export default FormCheckbox;
