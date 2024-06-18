

import {useState,useEffect} from 'react'

function List({getItem}){

    // console.log(getItem)

    const [item,setItem] = useState([])


    useEffect(()=>{
        setItem(getItem(10))
    },[getItem])

   

    return (
        <ul>
            {/* practice 1 using the useMemo */}

           {/* {getItem.map((item,i)=>{
            return<li key={i}>{item}</li>
           })} */}

           {/* using useCallback but here we call */}
           {/* {getItem(10).map((item,i)=>{
            return<li key={i}>{item}</li>
           })} */}


            {item.map((item,i)=>{
            return<li key={i}>{item}</li>
           })} 

           
        </ul>
    )
}


export default List