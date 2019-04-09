import React from 'react'

const boxes=[
  { 
    image:'https://www.docplanner.com/img/flag.png',title:'Leader in 10 countries',paragraph:'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile'
  },
    { 
      image:'https://www.docplanner.com/img/patients.png',title:'30 million unique patients',paragraph:'visit us every month'
    },
    { 
      image:'https://www.docplanner.com/img/visits.png',title:'1 million appointments',paragraph:'booked last month'
    },
    { 
      image:'https://www.docplanner.com/img/doctors.png',title:'2 million active doctors',paragraph:'trust in our solutions'
    }
]
const Plateformss = (props) =><div className="platform">
                                <img src={props.BoxesPlateform.image}/>
                                <h3>{props.BoxesPlateform.title}</h3>
                                <p>{props.BoxesPlateform.paragraph}</p>
                            </div>
const Plateforms = () => <div className="list-platform">
{boxes.map(el => <Plateformss BoxesPlateform={el} />)}   
</div>

const Plateform = () => {
  return(
    <div className="platforms">
        <div className="introduction-platform">
            <h1>The world's<br/> biggest healthcare platform</h1>
            <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
            <img className="image" src="https://www.docplanner.com/img/logo.png"/>
        </div>
        <div>
          <Plateforms/>
        </div>
    </div>
  )
}

export default Plateform
