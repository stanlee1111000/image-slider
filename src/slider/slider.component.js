import React,{useState} from 'react';
import './slider.styles.scss';

import i1 from './images/1.jpg';
import i2 from './images/2.jpg';
import i3 from './images/3.jpg';
import i4 from './images/4.jpg';
import i5 from './images/5.jpg';


function Slider(){
	let  sliderArray=[i1,i2,i3,i4,i5];

	const [x,setX]=useState(0);

	const goLeft=()=>{
		console.log(x);
		x===0 ? setX(-100*(sliderArray.length-1)) :setX(x+100);
		// setX(x+100);
	};
	const goRight=()=>{
		console.log(x);
		(x===-100*(sliderArray.length-1)) ? setX(0): setX(x-100);
	};

return(

	<div className="slider">
	{
		sliderArray.map((item,index)=>{return(
			<div key={index} className="slide" style={{transform:`translateX(${x}%)`,backgroundImage:`url(${item})`}}></div>

			);
		})
	}

	<button id="goLeft" onClick={goLeft}>left</button>
	<button id="goRight" onClick={goRight}>right</button>
	</div>

	);
}

export default Slider;