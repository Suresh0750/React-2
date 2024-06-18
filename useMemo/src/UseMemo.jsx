
import {useEffect, useMemo, useState} from 'react'



function UseMemo (){

    const [number ,setNum] = useState(0)
    const [dark,changeColor] = useState(false)
    
    function slowFunction(num){
        for(let i=0;i<1000000000;i++){
            // no login just check the performance
        }
        return num*2
    }

    // const num = slowFunction(number)  // # instead of these we can use useMemo beacause it number not change in the input box we don't need to call that function 

    const num = useMemo(()=>{
        return slowFunction(number)    
    },[number])

    
    // this object is depending the dark variable so the but if the button is not triger at that time if any function may be run so the website will render again at that time the object would be recreate at that time memorie is waste
    // const style = {
    //     backgroundColor : dark ? 'white' : 'black',
    //     color : dark ? 'black' : 'white' 
    // }

    // useMemo for handle declare the object again

    const style = useMemo(()=>{
        return {
                backgroundColor : dark ? 'white' : 'black',
                color : dark ? 'black' : 'white' 
            }
    },[dark])

    // The style object will declare because of when ever page is render is not chack  is alredy exite ..
    console.log('user')
    useEffect(()=>{
        console.log('useEffect color')
    },[style])

    return(
        <>
        <pre>
            <input type='number' value={number}  onChange={(e)=>setNum(e.target.value)}/>     <button  onClick={()=>changeColor((curr)=> !curr)}>Change them</button>
        </pre>
        <div style={style}>
                {num}
        </div>
        </>
    )

}


export default UseMemo


