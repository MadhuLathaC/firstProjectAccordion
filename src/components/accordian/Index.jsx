//single selection
//multiple selection

import { useState ,useEffect} from "react"
import data  from "./Data"
import './Styles.css'

export default function Accordion(){

    const [selected,setSelected] = useState(null)
    const [enableMultiSelection,setEnableMultiSelection]=useState(false)
    const [multiple,setMultiple]=useState([])

    useEffect(() => {
        document.title = "Accordion"; // Set the title dynamically
    }, []);



    function handleSingleSelection(getCurrentId){
        setSelected(getCurrentId===selected ? null: getCurrentId)
    }

    function handleMultiSelection(getCurrentId){
        let copyMultiple=[...multiple]
        const findIndexOfCurrentId=copyMultiple.indexOf(getCurrentId)
        console.log(findIndexOfCurrentId)
        if (findIndexOfCurrentId===-1) copyMultiple.push(getCurrentId)
            else copyMultiple.splice(findIndexOfCurrentId,-1)
        setMultiple(copyMultiple)
    }
    
    console.log(selected,multiple)
    return(
        <div className="wrapper">
            <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>{enableMultiSelection?"Enable single Selection":"Enable Multi Selection"}</button>
            <div className="accordion">
                {data && data.length>0 ? (
                    data.map((dataItem)=>(
                        <div className="item">
                        <div onClick={ enableMultiSelection? ()=>handleMultiSelection(dataItem.id):()=>handleSingleSelection(dataItem.id)}className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            enableMultiSelection ?
                            multiple.indexOf(dataItem.id)!==-1 && (
                                <div className="content">{dataItem.answer}</div>
                            )
                            : selected===dataItem.id &&(
                                <div className="content">{dataItem.answer}</div>
                            )   
                        }

                        {/* {
                            selected===dataItem.id ?(
                                <div className="content">{dataItem.answer}</div>
                            ):null
                        } */}
                    </div>
                    ))
                    
                ):(
                    <div>No data found!</div>
                )}
            </div>
        </div>
    )
    

}
