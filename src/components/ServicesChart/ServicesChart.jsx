import React from 'react';
import './ServicesChart.scss';

const ServicesChart = (props) => {  
  const num = props.num;
  const name = props.name;
  const width = props.width;

  return (
    <div className='chart'>
      <div className='chart-line'>
        <span className='line-bg' style={{width: `${width}%`}}></span>
        <span className='line-name'> {name} </span>
      </div>

      <span className="value"> {num} </span>
    </div>
  )
}

export default ServicesChart;

