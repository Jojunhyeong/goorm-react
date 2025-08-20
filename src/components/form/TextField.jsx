export default function TextField({label, name, value, onChange, required, children, type}) {
    return(
        <div className="space-y-1">
            <label htmlFor={name} className="text-sm font-medium">
                {label}{required && <span className="text-red-500 ml-0.5">*</span>}
            </label>
            <input
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            type={type}
            className="w-full rounded-md border border-gray-300 px-3 py-3" />
            {children}
        </div>
    )
}