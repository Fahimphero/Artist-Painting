import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faHeart, faShare, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from 'react';
import ReactStars from 'react-stars'
import { render } from 'react-dom'
import Stars from '../../../src/react-stars'

const Artists = () => {
    const [data, setData] = useState([]);
    const [rating, setRating] = useState(3);
    useEffect(() => {
        fetch('artists.json')
            .then(res => res.json())
            .then(data => setData(data))


    }, [])
    const star = data[0]?.ratings;
    const star2 = data[0]?.ratingsClass;
    const [changeLove, setchangeLove] = useState('black')
    const [changeShare, setchangeShare] = useState('black')
    const handleClick1 = () => {
        if (changeLove === 'black') {
            setchangeLove('red')
        }
        else {
            setchangeLove('black')
        }
    }

    const handleClick2 = () => {
        if (changeShare === 'black') {
            setchangeShare('blue')
        }
        else {
            setchangeShare('black')
        }
    }

    const ratingChanged = (newRating) => {
        setRating(newRating)
    }

    const firstExample = {
        size: 25,
        value: parseInt(star),
        edit: false
    }
    const secondExample = {
        size: 25,
        value: parseInt(star2),
        edit: false
    }
    return (
        <div className='container mt-4'>
            <h1>Summer Art Camp! 5 Days of Artists and Painting Monet, Van Gough, Matisse, {'&'} More</h1>
            <small style={{ color: 'lightgrey' }}>Multi-Day Course </small>
            <FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon>


            <div className="row mt-5 g-3">
                <div className="col-12 col-lg-6">
                    <div className=''>
                        <p>{data[0]?.body}</p>
                        <div>
                            <span>

                                <img className=' rounded-circle' style={{ width: '50px', height: '50px' }} src={data[0]?.image} alt="" /> {data[0]?.name}</span>
                        </div>


                        <p className='mt-3 mb-0 d-flex align-items-center'>
                            <span>
                                <Stars {...firstExample} />
                            </span>
                            <small className='ps-2'> {data[0]?.reviews} total reviews of this teacher</small></p>
                        <p className='d-flex align-items-center'> <span className='pe-2'>
                            <Stars {...secondExample} />

                        </span><small>{data[0]?.classReviews} reviews from this class</small></p>
                        <p>Completed by {data[0]?.learners} learners</p>
                        <div className='d-flex'>

                            <p className='w-50'><button className='btn btn-primary rounded-3'>See Class Schedule <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button></p>

                            <div className='d-flex ms-auto me-5'>
                                <p className='m-0 px-4'  >
                                    <button style={{ backgroundColor: 'white' }} className='border-0' onClick={handleClick1}><FontAwesomeIcon color={changeLove} icon={faHeart}></FontAwesomeIcon> Save</button></p>
                                <p className='m-0'  >
                                    <button style={{ backgroundColor: 'white' }} className='border-0' onClick={handleClick2}><FontAwesomeIcon color={changeShare} icon={faShare}></FontAwesomeIcon> Share</button></p>


                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-12 col-lg-6 ">
                    <div className="row g-3">
                        <div className='col-6 p-0'>
                            <div>
                                <img className='h-100 w-100 pe-3' src={data[0]?.art3} alt="" />
                            </div>
                        </div>
                        <div className='col-6 p-0'>
                            <div className='w-75'>
                                <img className='img-fluid mb-2' style={{ height: '150px' }} src={data[0]?.art1} alt="" />
                                <img className='img-fluid mt-2' style={{ width: '150px', height: '145px' }} src={data[0]?.art2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Artists;