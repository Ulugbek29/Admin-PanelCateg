import React from 'react'

export default function FormCard({
    className,
    title,
    extra,
    children,
    ...props
}) {
  return (
    <div className={`w-full p-4 ${className}`}>
        <div className='w-full h-fit bg-white rounded-lg' {...props}>
            {title && (
                <div className='flex justify-between px-8 py-4 border-b border-[#d3d3d3]'>
                    <h4 className='text-lg font-semibold'>{title}</h4>
                    <div className="text-lg">{extra}</div>
                </div>
            )}
            <div className='px-8 py-4'>
                {children}
            </div>
        </div>
    </div>
  )
}
