import React, { Component } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';


class Pollen extends Component {
	render() {
		return (

			<OverlayTrigger placement={this.props.placement} overlay={this.props.tooltip}>

				<svg width="70%" height="70%" id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 64 64'>
				    <defs>
				        <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:url(#linear-gradient);}.cls-2{fill:url(#linear-gradient-2);}.cls-3{fill:url(#linear-gradient-3);}.cls-4{fill:url(#linear-gradient-4);}.cls-5{fill:url(#linear-gradient-5);}.cls-6{fill:url(#linear-gradient-6);}.cls-7{fill:#efcc00;}.cls-8{fill:#fff;}" }} />
				        <linearGradient id='linear-gradient' x1='35.32' y1='29.1' x2='55.9' y2='19.2'
				        gradientUnits='userSpaceOnUse'>
				            <stop offset='.02' stopColor='#f7563c' />
				            <stop offset='1' stopColor='#d43217' />
				        </linearGradient>
				        <linearGradient id='linear-gradient-2' x1='34.27' y1='36.02' x2='55.92'
				        y2='43.29' xlinkHref='#linear-gradient'>
				            <linearGradient id='linear-gradient-3' x1='34.92' y1='25.59' x2='28.67'
				            y2='6.22' xlinkHref='#linear-gradient'>
				                <linearGradient id='linear-gradient-4' x1='27.2' y1='41.33' x2='40.76'
				                y2='56.98' xlinkHref='#linear-gradient'>
				                    <linearGradient id='linear-gradient-5' x1='27.31' y1='30.74' x2='8.96'
				                    y2='17.14' xlinkHref='#linear-gradient'>
				                        <linearGradient id='linear-gradient-6' x1='19.99' y1='34.9' x2='16.77'
				                        y2='57.51' xlinkHref='#linear-gradient' /></linearGradient>
				                </linearGradient>
				            </linearGradient>
				        </linearGradient>
				    </defs>
				    <path className='cls-1' d='M40.37,15.21A10.35,10.35,0,0,1,50.73,33.14C45.78,36,36.85,35.8,34,30.85S35.42,18.07,40.37,15.21Z'
				    />
				    <path className='cls-2' d='M50.73,30.86A10.35,10.35,0,1,1,40.37,48.79c-5-2.86-9.25-10.69-6.39-15.64S45.78,28,50.73,30.86Z'
				    />
				    <path className='cls-3' d='M42.35,16.35c0,5.72-4.64,13.35-10.35,13.35S21.65,22.07,21.65,16.35a10.35,10.35,0,0,1,20.71,0Z'
				    />
				    <path className='cls-4' d='M42.35,47.65a10.35,10.35,0,0,1-20.71,0c0-5.72,4.64-13.35,10.35-13.35S42.35,41.93,42.35,47.65Z'
				    />
				    <path className='cls-5' d='M23.63,15.21c5,2.86,9.25,10.69,6.39,15.64S18.22,36,13.27,33.14A10.35,10.35,0,1,1,23.63,15.21Z'
				    />
				    <path className='cls-6' d='M13.27,30.86C18.22,28,27.15,28.2,30,33.15s-1.44,12.78-6.39,15.64A10.35,10.35,0,0,1,13.27,30.86Z'
				    />
				    <circle className='cls-7' cx='32' cy='32' r='10.35' />
				    <circle className='cls-7' cx='16' cy='21' r='2' />
				    <circle className='cls-7' cx='17' cy='50' r='2' />
				    <circle className='cls-7' cx='50' cy='15' r='2' />
				    <circle className='cls-8' cx='16' cy='9' r='1.5' />
				    <circle className='cls-8' cx='6' cy='31' r='1.5' />
				    <circle className='cls-8' cx='45' cy='8' r='1.5' />
				</svg>
			</OverlayTrigger>
		);
	}
}

export default Pollen;
