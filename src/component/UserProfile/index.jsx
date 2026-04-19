import "./index.css"

const Welcome = (props)=>{
  const {name ,roll}=props;
   return (<h1>{name}, {roll}</h1>);
};

export default Welcome