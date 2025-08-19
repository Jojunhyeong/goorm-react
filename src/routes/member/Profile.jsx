import ProfileCard from "@/components/ProfileCard";
import { useEffect, useState } from "react";

export default function Profile() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('/users.json')
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => console.error('데이터 로드 실패: ', err))
    }, [])


    return(
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">우리 팀 프로젝트</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {users.map((user, idx) => (
                    <ProfileCard key={idx} {...user}/>
                ))}
            </div>
        </div>
    )
}