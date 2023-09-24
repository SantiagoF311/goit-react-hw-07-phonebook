import { useGetContactsQuery } from 'Api/apiSlice';

function Prueba() {
  const { data, isError, isLoading, error } = useGetContactsQuery();

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;

  console.log(data);

  return <div>Prueba</div>;
}

export default Prueba;
