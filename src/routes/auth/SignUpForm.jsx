import TextField from '@/components/form/TextField'
import { useState } from 'react'

export default function SignUpForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  })
  const [errors, setErrors] = useState({})

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const validate = () => {
    const e = {}
    if (!form.name.trim()) {
      e.name = '이름을 입력하세요.'
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = '이메일 형식이 올바르지 않습니다.'
    }
    if (!form.password) {
      e.password = '비밀번호를 입력하세요.'
    }
    if (form.password !== form.confirm) {
      e.confirm = '비밀번호가 일치하지 않습니다.'
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validate()) {
      return
    }
    alert('회원가입 성공!')
  }

  return (
    <div className="flex justify-center">
      <form
        onSubmit={onSubmit}
        className="w-96 border rounded-xl mt-10 p-10 flex flex-col text-center gap-5"
      >
        <h2 className="text-start">👤 회원가입</h2>

        <TextField label="이름" name="name" value={form.name} onChange={onChange}>
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </TextField>

        <TextField label="이메일" name="email" value={form.email} onChange={onChange}>
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </TextField>

        <TextField
          label="비밀번호"
          name="password"
          type="password"
          value={form.password}
          onChange={onChange}
        >
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </TextField>

        <TextField
          label="비밀번호 확인"
          name="confirm"
          type="password"
          value={form.confirm}
          onChange={onChange}
        >
          {errors.confirm && <p className="text-red-500 text-sm">{errors.confirm}</p>}
        </TextField>

        <div className="flex justify-center">
          <button type="submit" className="border border-gray-500 rounded-xl h-12 w-24">
            회원가입
          </button>
        </div>
      </form>
    </div>
  )
}
