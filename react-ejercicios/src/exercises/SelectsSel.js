import { useFetch } from "../hooks/useFetch";
import Message from "../components/Message";
import Loader from "../components/Loader";

const SelectsSel = ({ title, url, handleChange }) => {
  const { data, error, loading } = useFetch(url);
  if (error) return <Message msg="Ocurrió un error" bgColor="red"></Message>;
  if (!data) return null;

  let lowerTitle = title.toLowerCase(),
    options = data.response[lowerTitle];
  return (
    <>
      <label htmlFor={title}>{title}</label>
      <select name={title} id={title} onChange={handleChange}>
        <option value="">Elige un {title}</option>
        {loading && <Loader></Loader>}
        {data && options.map((el) => <option value={el}>{el}</option>)}
      </select>
    </>
  );
};

export default SelectsSel;
