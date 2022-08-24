import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './pastWork.css';

const PastWork = props => {

    return(
        <div className='carousel-container'>
            <Carousel dynamicHeight='true'>
                <div className='work-img-container'>
                    <img src='https://drive.google.com/uc?id=1PFmLM4ZGsfuyake5VpSs8W7PfECmjgjB' alt='toads-1' />
                </div>
                <div className='work-img-container'>
                    <img src='https://drive.google.com/uc?id=1PSuvVonTQOLlEc-gVYYh9L5J_ZXAzTUL' alt='toads-1' />
                </div>
                <div className='work-img-container'>
                    <img src='https://drive.google.com/uc?id=14X_1UGU_9jWKRxVUsBkdmzcbL4bB4H12' alt='toads-1' />
                </div>
                <div className='work-img-container'>
                    <img src='https://drive.google.com/uc?id=1Q0JdThKKBsMyP14aQ9f7V-aZIAbsL79f' alt='toads-1' />
                </div>
                <div className='work-img-container'>
                    <img src='https://drive.google.com/uc?id=1QAxtSFMQojfLHm4k9F4Upjzb2WdbjVzp' alt='toads-1' />
                </div>
                <div className='work-img-container'>
                    <img src='https://drive.google.com/uc?id=1QKj9wpu0TyBZ6O_jng43c5pQMPth47sz' alt='toads-1' />
                </div>
               
            </Carousel>
        </div>
    )
};

export default PastWork;
