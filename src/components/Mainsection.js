import React, { Component } from 'react';
import './main-introduction.css';
import './boxes.css'
import './company.css'
import './plateform.css'
import './statistic.css'
import './capitals.css'
import Mainintroduction from './Mainintroduction'
import Boxes from './Boxes'
import Company from './Company'
import Plateform from './Plateform'
import Statistic from './Statistic'
import Capitals from './Capitals'
const Mainsection = () => {
    return <div>
                <div>
                    <Mainintroduction/>
                </div>
                <div className="main-section">
                    <Boxes/>
                </div>
                <div>
                    <Company/>
                </div>
                <div>
                    <Plateform/>
                </div>
                <div className="block">
                    <Statistic/>
                </div>
                <div>
                    <Capitals/>
                </div>
            </div>
    }
export default Mainsection;
