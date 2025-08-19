export default function SelectField({label, name, value, onChange, options}) {
    return(
        <div className="space-y-1">
            <label htmlFor={name} className="text-sm font-medium">{label}</label>
            <select
            value={value}
            name={name}
            onChange={onChange}
            className="w-full rounded-md border px-3 py-2"
            >
                {options.map((o) => (
                    <option key={o.id} value={o.value}>{o.label}</option>
                ))}
            </select>
        </div>
    )
}