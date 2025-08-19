export default function EmojiPicker({ label, value, onChange }) {
  const emojis = ['👩‍💻', '🤦‍♂️', '🎨', '🧠', '🚀']
  return (
    <div className="space-y-1">
      <p className="text-sm font-medium">{label}</p>
      <div className="flex gap-2">
        {emojis.map((e) => (
          <button
            key={e}
            type="button"
            onClick={() => onChange(e)}
            className={`p-2 border rounded ${value === e ? 'bg-gray-200' : ''}`}
          >
            {e}
          </button>
        ))}
      </div>
    </div>
  )
}
