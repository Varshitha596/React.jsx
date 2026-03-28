import UserDetails from './component/UserProfile/index.jsx'

const givenDetails=[
{ uniqueNo:1,
    name:'varshitha',
    work:'software_engineering',
    image:'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    },
    {
        uniqueNo:2,
    name:'varshitha',
    work:'software_engineering',
    image:'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    },
    {
        uniqueNo:3,
    name:'varshitha',
    work:'software_engineering',
    image:'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    },
    {
        uniqueNo:4,
    name:'varshitha',
    work:'software_engineering',
    image:'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    }
    
]
const App = () => 
(
    <div>
        <h1>list name</h1>
        <ul>
            {
            givenDetails.map((eachItem) => (
                 <UserDetails givenData={eachItem} key={eachItem.uniqueNo}/>
            ))}
        </ul>
    </div>
)
export default App