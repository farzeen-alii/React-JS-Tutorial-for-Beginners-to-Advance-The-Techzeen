import HOC from "./HOC";
const OnMouseOver = ({value, increment}) => {
  return (
    <>
     <h2>Data {value} </h2> 
     <button onMouseOver={increment}>Update Data</button>
    </>
  );
}

export default HOC(OnMouseOver) ;
