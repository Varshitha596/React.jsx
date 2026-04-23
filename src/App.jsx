
import TabItem from './components/TabItem/index.jsx'
import ProjectItem from './components/ProjectItem/index.jsx'
import Header from './components/Header/index.jsx'

import './App.css'

const tabsList = [
  {tabId: 'STATIC', displayText: 'Static'},
  {tabId: 'RESPONSIVE', displayText: 'Responsive'},
  {tabId: 'DYNAMIC', displayText: 'Dynamic'},
]

const projectsList = [
  {
    projectId: 0,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s3-img.png',
    title: 'Music Page',
    description:
      'The music page enables the users to browse through the images of all-time favorite music albums.',
  },
  {
    projectId: 1,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
    title: 'Tourism Website',
    description:
      'A tourism website enables the user to browse through the images of popular destinations.',
  },
  {
    projectId: 2,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s1-img.png',
    title: 'Advanced Technologies',
    description:
      'A website that gives you a basic understanding of Advanced Technologies.',
  },
  {
    projectId: 4,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r4-img.png',
    title: 'VR Website',
    description:
      'VR Website enables users to explore AR and VR Products and Industry happenings.',
  },
  {
    projectId: 5,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
    title: 'Food Munch',
    description: 'Food Much Website is a user-centric food tech website.',
  },
  {
    projectId: 6,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r3-img.png',
    title: 'Portfolio',
    description:
      'A portfolio is the best alternative for a resume to showcase your skills to the digital world.',
  },
  {
    projectId: 8,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d3-img.png',
    title: 'Speed Typing Test',
    description:
      'Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.',
  },
  {
    projectId: 9,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d1-img.png',
    title: 'Random Joke Page',
    description:
      'Random Joke Page is an API-based dynamic Web Application that generates a new joke.',
  },
  {
    projectId: 10,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d2-img.png',
    title: 'Sizing An Image',
    description:
      'This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.',
  },
]

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <h1 className="title">Projects</h1>
      <p className="description">
        Your skills and achievements showcase your strengths and abilities. Speak about any new skills or software you learnt to perform the project responsibilities.
      </p>

      <ul className="tabs-container">
        {tabsList.map(tabDetails => (
          <TabItem key={tabDetails.tabId} tabDetails={tabDetails} />
        ))}
      </ul>

      <ul className="project-list-container">
        {projectsList.map(projectDetails => (
          <ProjectItem
            key={projectDetails.projectId} projectDetails={projectDetails}
          />
        ))}
      </ul>
    </div>
  )
}




// const App = () => {
//   const [contactsList, setContactsList] = useState(initialContactsList)
//   const [name, setName] = useState('')
//   const [mobileNo, setMobileNo] = useState('')

//   const toggleIsFavorite = id => {
//     setContactsList(prevContactsList => {
//       return prevContactsList.map(eachContact => {
//         if (id === eachContact.id) {
//           return {...eachContact, isFavorite: !eachContact.isFavorite}
//         }
//         return eachContact
//       })
//     })
//   }

//   const onAddContact = event => {
//     event.preventDefault()
//     const newContact = {
//       id: uuidv4(),
//       name,
//       mobileNo,
//       isFavorite: false,
//     }
//     setContactsList(prevContactsList => [...prevContactsList, newContact])
//     setName('')
//     setMobileNo('')
//   }

//   return (
//     <div className="app-container">
//       <div className="responsive-container">
//         <h1 className="heading">Contacts</h1>
//         <form className="contact-form-container" onSubmit={onAddContact}>
//           <input
//             value={name}
//             onChange={e => setName(e.target.value)}
//             className="input"
//             placeholder="Name"
//           />
//           <input
//             className="input"
//             value={mobileNo}
//             onChange={e => setMobileNo(e.target.value)}
//             placeholder="Mobile Number"
//           />
//           <button type="submit" className="button">
//             Add Contact
//           </button>
//         </form>
//         <ul className="contacts-table">
//           <li className="table-header">
//             <p className="table-header-cell name-column">Name</p>
//             <hr className="separator" />
//             <p className="table-header-cell">Mobile Number</p>
//           </li>
//           {contactsList.map(eachContact => (
//             <ContactItem
//               key={eachContact.id}
//               contactDetails={eachContact}
//               toggleIsFavorite={toggleIsFavorite}
//             />
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
// }
export default App
