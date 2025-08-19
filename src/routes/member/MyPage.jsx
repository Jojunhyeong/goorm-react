import { useState } from 'react'
import TextField from '@/components/form/TextField'
import SelectField from '@/components/form/SelectField'
import EmojiPicker from '@/components/form/EmojiPicker'

export default function MyPage() {
  const [form, setForm] = useState({
    name: '조준형',
    job: 'Frontend',
    emoji: '👩‍💻',
  })
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-2 gap-6 p-6">
        <div className="space-y-4">
          <TextField
            label="이름"
            name="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
           />

          <SelectField
            label="직무"
            name="job"
            value={form.job}
            onChange={(e) => setForm({ ...form, job: e.target.value })}
            options={[
              { id: 1, value: 'Frontend', label: 'Frontend' },
              { id: 2, value: 'Backend', label: 'Backend' },
              { id: 3, value: 'Designer', label: 'Designer' },
            ]}
           />

          <EmojiPicker
            label="이모지"
            value={form.emoji}
            onChange={(emoji) => setForm({ ...form, emoji })}
           />
        </div>
        <div className="p-6 border rounded-lg flex flex-col items-center justify-center">
          <div className="text-3xl">{form.emoji}</div>
          <h2 className="mt-2 font-bold">{form.name}</h2>
          <p className="text-gray-500">{form.job}</p>
        </div>
      </div>
    </div>
  )
}
