import { FormHelperText, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


export default function index({
    control,
    name, 
    title,
    placeholder,
    disableHelperText = false,
    required=false,
    rules={},
    ...props
}) {

    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () => {
        setShowPassword(prev => !prev)
    }

  return (
    <Controller
    control={control}
    name={name}
    rules={{required: required ? "This is a required field" : false, ...rules }}
    render={({field: {onChange, value}, fieldState: {error}}) => (
        <>
        <div className='relative'>
        <TextField 
                size='small'
                label={name}
                name={name}
                value={value}
                onChange={(e)=> onChange(e.target.value)}
                error={error}
                type={showPassword ? "text" : "password"}
                // className="pr-8"
                {...props}
            />
            <div className='absolute top-2 right-2' onClick={handleShowPassword}>
            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </div>
            {
                !disableHelperText && (
                    <FormHelperText error>{error?.message ? error?.message : "" }</FormHelperText>
                ) 
            }
        </div>
        </>
    )}
    >

    </Controller>
  )
}
