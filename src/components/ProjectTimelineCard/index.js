// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    description,
    projectUrl,
    duration,
  } = projectDetails

  return (
    <div className="project-container">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="project-description-container">
        <h1>{projectTitle}</h1>
        <div className="duration-card">
          <AiFillCalendar color="#171f46" />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}
export default ProjectTimelineCard
