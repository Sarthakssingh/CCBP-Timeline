// Write your code here
import {Chrono} from 'react-chrono'
import ProjectTimeLineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const showDetails = items => {
    if (items.categoryId === 'PROJECT') {
      return <ProjectTimeLineCard projectTimeline={items} />
    }
    return <CourseTimelineCard courseTimeline={items} />
  }

  return (
    <div className="time-line-con">
      <div className="chrono-container">
        <div className="HeaderContainer">
          <h1 className="Heading">
            My Journey of <br />
            <span className="CCBPHeading">CCBP 4.0</span>{' '}
          </h1>
        </div>
        <Chrono
          theme={{
            secondary: 'white',
          }}
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
        >
          {timelineItemsList.map(each => showDetails(each))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
