type InputErrorProps = React.HTMLAttributes<HTMLParagraphElement> & { message: React.ReactNode }

export default function InputError({ message, className = '', ...props }: InputErrorProps) {
    return message ? (
        <p {...props} className={'text-sm text-red-600 ' + className}>
            {message}
        </p>
    ) : null
}
