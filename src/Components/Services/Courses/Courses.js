import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import './Courses.css'
import Data from '../../Fakedata/CourseData'
import PartOne from './PartOne';
const Courses = () => {
    const [BlogDatas , setBlogData] = useState(Data)
    return (
        <div>
            <Container>
                <div>
                   
                    <div>
                    <h5 className='text-center text-white' >SERVICES</h5>
                     <h4 className='text-center pb-5 text-white ' >Software Quality Assurance Tips, Tools, Tutorials, Blogs and Resources</h4>
                    </div>

                    <div className="friend-container pb-5">
                {
                     BlogDatas.map((AllBlogDatas)=> <PartOne BlogContent={AllBlogDatas}/>)
                }
               </div>
                    
                </div>
           </Container>
        </div>
    );
};

export default Courses;


