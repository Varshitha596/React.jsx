import './index.css'
const UserDetails =(props) => {
    const {givenData}=props
    const {image,name,work}=givenData
   return (
        <li className="user-card-container">
            <img src={image} alt={name}className='photo'/>
            <div className='user-details-container'>
            <h1 className='user-name'>{name}</h1>
            <h5 className='user-name'>{work}</h5>
            </div>
        </li>
    )
}

export default UserDetails