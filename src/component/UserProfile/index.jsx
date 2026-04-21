
const Page = (props)=>{
  const {help}=props;
  const {name}=help;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
};
export default Page;