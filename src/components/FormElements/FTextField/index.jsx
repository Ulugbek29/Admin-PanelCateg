import { FormHelperText, TextField } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'

export default function index({
    control,
    name, 
    title,
    placeholder,
    disableHelperText = false,
    required=false,
    rules={},
    type="text",
    ...props
}) {
  return (
    <Controller
    control={control}
    name={name}
    rules={{required: required ? "This is a required field" : false, ...rules }}
    render={({field: {onChange, value}, fieldState: {error}}) => (
        <>
            <TextField 
                size='small'
                // label={value === "" && name}
                name={name}
                value={value}
                onChange={(e)=> onChange(e.target.value)}
                error={error}
                type={type}
                {...props}
            />
            {
                !disableHelperText && (
                    <FormHelperText className='' error>{error?.message ?? "" }</FormHelperText>
                ) 
            }
        </>
    )}
    >

    </Controller>
  )
}
