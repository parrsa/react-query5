import { useMutation,} from "@tanstack/react-query"
const SendPost = () => {
    const mutationFn = (data) => fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())

    return useMutation({ mutationFn })
}

export { SendPost }     