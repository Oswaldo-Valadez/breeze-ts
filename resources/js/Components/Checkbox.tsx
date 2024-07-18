type CheckboxProps = React.HTMLAttributes<HTMLInputElement> & {
    name?: string
    checked?: boolean
}

export default function Checkbox({ className = '', ...props }: CheckboxProps) {
    return <input {...props} type='checkbox' className={'rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 ' + className} />
}
