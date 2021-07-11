import React, { useState, useEffect } from 'react'
import People from '../data'
import {FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Review = () => {
    const [index, setIndex] = useState(0)
    const { job, image, name, text, } = People[index]
    const checkNum =(num)  => {
        if(num > People.length -1){
            return 0
        }

        if(num < 0){
            return People.length -1
        }
        return num
    }
    const moveRight = () =>{
       setIndex((index) => {
           let newItem = index + 1
          return checkNum(newItem)
       })
    }
    const moveLeft =()=>{
        setIndex((index) => {
            let newItem = index - 1
            return checkNum(newItem)
        })
    }
    const random =()=>{
        let randomNum = Math.floor(Math.random() * People.length)
        if(randomNum === index){
            randomNum = index + 1
        }
        setIndex(checkNum(randomNum))
    }
    useEffect(() => {
      const interval =  setInterval(() => {
        random()
        }, 5000)

        return () => clearInterval(interval)
    }, [])
    return (
        <div className='review-container'>
            <div className='image-container'>
                <img src={image} alt={name} className='image'/>
                <div className='icon'>,,</div>
            </div>
            <div className='name'>
                <h3>{name}</h3>
                <p>{job}</p>
            </div>
            <p className='text'>{text}</p>
            <div className='btn-container'>
                <button className='btns left' onClick={moveLeft}><FaArrowLeft /></button>
                <button className='btns right' onClick={moveRight}> <FaArrowRight /></button>
            </div>
            <button className='btn' onClick={random}>surprise-me</button> 
        </div>
    )
}

export default Review
