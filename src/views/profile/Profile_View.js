import 'purecss/build/pure.css';
import React, { Component } from 'react';
import {ArrowDown} from '../../components/logos/arrows/ArrowDown.js';

import DemographicTile from './DemographicTile';
import VitalTile from './VitalTile';
import {FilteredList, List} from './FilteredList.js';
import MedicationTile from './MedicationTile';
import EnvironmentTile from './EnvironmentFactors.js';
import AppointmentsTile from './AppointmentsTile';
import Name from './Name.js';
import LastVisit from './LastVisit.js';

import PollenContainer from './env/PollenContainer.js'
import AirQuality from './env/AirQuality.js';
import Flu from './env/Flu.js';
import {envTileStyle} from './Environment-style.js';
import { headerStyle, apptListStyle } from './AppointmentsTile-style';


import Scale from '../../components/logos/scale';
import BP from '../../components/logos/bp';
import Cholesterol from '../../components/logos/chol';
import Glucose from '../../components/logos/glucose';
import PastGraph from '../../components/Graphs/PastGraph.js';
//import {getTopObservations, getTopObservationsDemo, SparklinesReferenceLine} from '../../services/patient_view_utils.js'
//import { LineChart, Line, Tooltip } from 'recharts';

//import {Diabetes, COPD, KFScore, CHADScore, ReynoldsScore, RiskTile, HelpRiskTile} from '../RiskCalculators/Risk_Components.js';
import {reynoldsScore} from '../../services/RiskCalculators/reynolds.js'
import {CHADScore} from '../../services/RiskCalculators/CHAD.js'
import {KFScore} from '../../services/RiskCalculators/get_KFRisk.js'
import {COPDScore} from '../../services/RiskCalculators/COPD.js'
import {diabetesScore} from '../../services/RiskCalculators/get_diabetes.js'
import RiskTile from '../../services/RiskTiles/RiskTile.js'
import HelpRiskTile from '../../services/RiskTiles/HelpRiskTile.js'
import {getPtLoc} from '../../services/Environment/environmental_utils.js'

import { medListStyle, medListDivStyle } from './Profile_View-style.js'

import { VictoryArea, VictoryTooltip, VictoryGroup, VictoryScatter, createContainer, VictoryChart, VictoryLine, VictoryAxis, VictoryZoomContainer, VictoryBrushContainer, VictoryBar } from 'victory';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import {AboutMeasurement} from './AboutMeasurement.js';
import {AboutRisk} from './AboutRisk.js';


//import AboutRisk from '../risk/AboutRisk.js';

class ProfileView extends Component {
	constructor(props){
		super(props);
	}

	render(){
		const ptLoc = {"country_code":"US","region_code":"MA","city":"Pepperell","zip_code":"01463","latitude":42.669838,"longitude":-71.5961267};
		const patient = {"gender": "Male", "birthDate":'1979-02-03-12:45'};
		const measurements = [{"name": "Systolic Blood Pressure", "units": "mmHg", "past": "120", "present": "110", "future": "110" },
		{"name": "Diastolic Blood Pressure", "units": "mmHg", "past": "90", "present": "95","future": "95"  },
		{"name": "Heart Rate", "units": "bpm", "past": "90", "present": "70","future": "70"  },
		{"name": "Respiration Rate", "units": "breaths/min", "past": "18", "present": "18","future": "18"  }]
		const graphData = [{x:new Date("2017-02-03"), y:124}, {x:new Date("2017-02-12"), y:120}, {x:new Date("2017-02-15"), y:119}, 
		{x:new Date("2017-02-23"), y:132}, {x:new Date("2017-03-03"), y:126}, {x:new Date("2017-03-23"), y:129}, {x:new Date("2017-04-03"), y:125}];
		const mappedMeasures = measurements.map((measurements) => 
			<tr className = "pure-table pure-table-horizontal">
				<td> {measurements["name"]} [{measurements["units"]}] </td>
				<td> {measurements["past"]}</td>
				<td> {measurements["present"]}</td>
				<td> :) </td>
			</tr>
		);
		return (
			<div>
				<div className="pure-u-1-2">
					<text style={{"font-size":"20"}}>Ignite your life back on track</text>
				</div>
				<div className="pure-u-6-24">

				</div>
				<div className="pure-u-3-24">
					<LastVisit encounters={[{effectiveDateTime: "05-06-2017"}]}/>
				</div>
				<div className="pure-u-3-24">
					<Name patient="Samson Mataraso"/>
				</div>
				<div style={{"display":"flex", "flex-direction":"row", "justify-content":"space-evenly"}}>
					<div style={{"order": "1", "flex-grow":"1"}}><RiskTile scoreName="General Cardiac" score={10} sym="%" context="within 10 years" url="General_Cardiac"/> </div>
					<div style={{"order": "2", "flex-grow":"1"}}><RiskTile scoreName="Stroke" score={10} sym="%" context="within 1 year" url="Stroke"/></div>
					<div style={{"order": "3", "flex-grow":"1"}}><RiskTile scoreName="Kidney Failure" score={10} sym="%" context="within 5 years" url="Kidney_Failure"/></div>
					<div style={{"order": "4", "flex-grow":"1"}}><RiskTile scoreName="COPD Mortality" score={10} sym="%" context="within 4 years" url="COPD_Mortality"/></div>
					<div style={{"order": "5", "flex-grow":"1"}}><RiskTile scoreName="Diabetes" score={10} sym="%" context="within 5 years" url="Diabetes"/></div>
				</div>
				<br/><br/>
				<div>
					<div className="pure-u-1-2" style={{"padding-left":"2px", "padding-right":"20px", "height":"300px", "overflow":"auto"}}>
						<FilteredList measurements={measurements}/>
					</div>
					<div className="pure-u-8-24">
						<AppointmentsTile patient={patient}/>
					</div>
					<div className="pure-u-4-24">
						<div style={{"display":"flex", "flex-direction":"row", "justify-content":"center"}}>
							<div style={{"display":"flex", "flex-direction":"column", "justify-content": "center"}}>
								<div style={{"textAlign":'center', "fontSize": "20", "order":"1"}}>
									Environment
								</div>
								<div style={{"order":"2"}}>
									<div style={envTileStyle}>
										<PollenContainer location={ptLoc} />
									</div>
								</div>
								<div style={{"order":"3"}}>
									<div style={envTileStyle}>
										<AirQuality location={ptLoc} />
									</div>
								</div>
								<div style={{"order":"4"}}>
									<div style={envTileStyle}>
										<Flu location={ptLoc} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="pure-u-1-2">
					<PastGraph obs_data={graphData} 
							units="mmHg" 
							reference_range={{min:110, max: 130}}
							mainWidth={500}
							mainHeight={200}
							viewWidth={500}
							viewHeight={50}/>
					<AboutMeasurement measurementCode="2085-9"/> <br/> <br/> <br/>
					<AboutRisk risk="General_Cardiac"/>
				</div>
			</div>

		)
	}

}
				{/*<div className="row">
					<div className = "col-sm-2">
        				<RiskTile scoreName="General Cardiac" score={reynoldsScore(pt, obs)} sym="%" context="within 10 years" url="General_Cardiac"/>
					</div>
					<div className = "col-sm-2">
						<RiskTile scoreName="Stroke" score={CHADScore(pt, conds)} sym="%" context="within 1 year" url="Stroke"/>
					</div>
					<div className = "col-sm-2">
	        			<RiskTile scoreName="Kidney Failure" score={KFRScore(pt, obs)} sym="%" context="within 5 years" url="Kidney_Failure"/>
					</div>
					<div className = "col-sm-2">
	        			<RiskTile scoreName="COPD Mortality" score={COPDScore(pt, obs, conds)} sym="%" context="within 4 years" url="COPD_Mortality"/>
					</div>
					<div className = "col-sm-2">
	        			<RiskTile scoreName="Diabetes" score={diabetesScore(pt, obs, conds, medreq)} sym="%" context="within 5 years" url="Diabetes"/>
					</div>
			
					<div className = "col-sm-2">
						<div><HelpRiskTile scoreName="Help"/></div>
					</div>
				</div>*/}

export default ProfileView;