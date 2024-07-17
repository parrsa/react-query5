import { useQuery } from "@tanstack/react-query"

const GetAllTodo = () => {
    const queryKey = ['all-todos']
    const queryFn = () => fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())
    return useQuery({ queryKey, queryFn })
}

export { GetAllTodo }