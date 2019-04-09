import React from 'react'

const boxe =[
    {Title:"For patients", paragraph:'Find a doctor, book a visit and solve any health-related doubt',btn:true,image:'https://www.docplanner.com/img/screen-marketplace@2x.png',class:"box-patient"
    },
    {Title:"For doctors", paragraph:'Save time managing visits and cut no-shows by half',btn:false,image:'https://www.docplanner.com/img/screen-saas@2x.png',class:"box-doctor"
},
]
const Boxess = (props) => <div className={props.test.class}>
                            <h2>{props.test.Title}</h2>
                            <h1>{props.test.paragraph}</h1>
                            <div className="main-box-patient">{props.test.btn && <select className="list-box list">
                                                    <option >CHOOSE COUNTRY</option>
                                                    <option >ARGENTINA</option>
                                                    <option >AUSTRALIA</option>
                                                    <option >BRAZIL</option>
                                                    <option >CHILE</option>
                                                    <option >COLOMBIA</option>
                                                    <option >CZECH</option>
                                                    <option >FRANCE</option>
                                                    <option >ITALY</option>
                                                    <option >MEXICO</option>
                                                    <option >PERU</option>
                                                    <option >POLAND</option>
                                                    <option >PORTUGAL</option>
                                                    <option >SPAIN</option>
                                                    <option >TURKEY</option>
                                                    <option >UK</option>
                                                </select>
                                                }
                                                <img className="box-img" src={props.test.image} />
                            </div>
                            </div>
const Boxes = () => <div className="main-section-select">
                        {boxe.map(el => <Boxess test={el} />)}   
                    </div>
export default Boxes;    