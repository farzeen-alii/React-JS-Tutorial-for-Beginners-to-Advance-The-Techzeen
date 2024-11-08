import HOC from "./HOC";
const OnClick = ({value, increment}) => {
  return (
    <>
     <h2>Count {value} </h2> 
     <button onClick={increment}>Update Count</button>
    </>
  );
}

export default HOC(OnClick) ;
