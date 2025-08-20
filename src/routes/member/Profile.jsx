import { useEffect, useState, use } from "react";
import ProfileCard from "@/components/ProfileCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

    // async function fetchUser() {
    //     const res = await fetch("/users.json")
    //     if(!res.ok) {throw new Error("데이터 불러오기 실패")}
    //         return res.json()
    // }

    // const userPromise = fetchUser()

    async function fetchUsers() {
        const res = await axios.get("/users.json")
        return res.data
    }

export default function Profile() {
    // const [users, setUsers] = useState([])
    // useEffect(() => {
    //     fetch('/users.json')
    //     .then((res) => res.json())
    //     .then((data) => setUsers(data))
    //     .catch((err) => console.error('데이터 로드 실패: ', err))
    // }, [])
//   const users = use(userPromise)
    // useEffect(() => {
    //     axios.get("/user.json")
    //     .then(res => setUsers(res.data))
    //     .catch(err => console.error)
    // }, [])
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
        staleTime: 1000*60,
    })

    if(isLoading) {return <p>로딩중...</p>}
    if (isError) {return <p>에러발생</p>}

    return(
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">우리 팀 프로젝트</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {data.map((user, idx) => (
                    <ProfileCard key={idx} {...user}/>
                ))}
            </div>
        </div>
    )
}