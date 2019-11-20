import React from 'react'

// ★
// ☆
const StarRating = props => {
        let stars = []
        for(let i = 0; i < 5; i++){
            if(props.count > i){
                stars.push(<span onClick={() => props.rateIt(i+1)}>★</span>)
            }else{
                stars.push(<span onClick={() => props.rateIt(i+1)}>☆</span>)
            }
        }
        return(
            <div>{stars}</div>
        )
    }
export default StarRating