import React from 'react';
import './PartOne.css';
import Card from 'react-bootstrap/Card';

const PartOne = (props) => {
    const {Img,Title,Day,Content} = props.BlogContent
    return (
        <div className="pb-4 m-auto ForHover">
            <Card  style={{ width: '21rem', height:'25rem'}}>
  <Card.Img style={{ height: '10rem' }} variant="top" src={Img} />
  <Card.Body>
    <Card.Title>{Title}</Card.Title>
  
    <Card.Text>
      {Content}
    </Card.Text>
    <div className='text-center btnStyleRedius'>
    <button type="button" className="btn btn-primary pl-5">MORE </button>
    </div>

   
    
  </Card.Body>
</Card>
            
        </div>
    );
};

export default PartOne;


