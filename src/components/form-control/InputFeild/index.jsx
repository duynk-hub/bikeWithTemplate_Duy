import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    lable: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const { form, name, label, disabled, placeholder } = props;
    const { formState } = form;
    const hasError = formState.errors[name];

    return (
        <Controller
            name={name}
            control={form.control}
            render={({ field }) =>
                <TextField
                    {...field}
                    placeholder={placeholder}
                    label={label}
                    fullWidth
                    disabled={disabled}
                    error={hasError}
                    variant="outlined"
                    margin='normal'
                    helperText={formState.errors[name]?.message}
                />}
        />
    );
}

export default InputField;