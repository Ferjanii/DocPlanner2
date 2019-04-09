    import React from 'react'
    const capital=[
        {
            image:"https://www.docplanner.com/images/warsaw.png", title:"Warsaw", btn:"See Openings"
        },
        {
            image:"https://www.docplanner.com/images/barcelona.png", title:"Barcelone", btn:"See Openings"
        },
        {
            image:"https://www.docplanner.com/images/istanbul.png", title:"Istanbul", btn:"See Openings"
        },
        {
            image:"https://www.docplanner.com/images/rome.png", title:"Rome", btn:"See Openings"
        },
        {
            image:"https://www.docplanner.com/images/mexico-city.png", title:"Mexico", btn:"See Openings"
        },
        {
            image:"https://www.docplanner.com/images/curitiba.png", title:"Curtiba", btn:"See Openings"
        },
    ]
    const Capitalsbox =(props)=><div className="country country-box">
                                    <img className="border-img" src={props.boxe.image}/>
                                    <div className="country-description">
                                        <a className="name-country">{props.boxe.title}</a>
                                        <button className="see-more">{props.boxe.btn}</button>
                                    </div>
                                </div>
    
    const Capitals =()=><div className="countries">
                            {capital.map(el => <Capitalsbox boxe={el}/>)}
                        </div>    
export default Capitals;