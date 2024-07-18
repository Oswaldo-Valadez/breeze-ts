import { forwardRef, useEffect, useRef } from 'react'

type TextInputProps = React.HTMLProps<HTMLInputElement> & {
    type?: string
    className: string
    isFocused?: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }: TextInputProps, ref) {
    const input = ref ? (ref as React.MutableRefObject<HTMLInputElement>) : useRef(null)

    useEffect(() => {
        if (isFocused && input?.current) {
            input.current.focus()
        }
    }, [])

    return (
        <input
            {...props}
            type={type}
            className={'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' + className}
            ref={input}
        />
    )
})
