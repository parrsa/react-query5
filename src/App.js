import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import './App.css';
import { GetAllTodo } from './hooks/queris/user';
import { SendPost } from './hooks/mutations';

function App() {
  const queryClient = useQueryClient();
  const { data, isPending, isLoading } = GetAllTodo()

  console.log(data, isPending, isLoading)

  const { mutate, } = SendPost()
  const clickHandelr = () => {
    const data = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    }
    mutate(data, {
      onSuccess: (data) => {
        console.log(data);
        queryClient.invalidateQueries(['all-todos'])
      },
      onError: (error) => console.log(error)
    })
  }

  return (
    <>
      parsa {data?.length}
      <button onClick={clickHandelr}>Click</button>
    </>
  );
}

export default App;
