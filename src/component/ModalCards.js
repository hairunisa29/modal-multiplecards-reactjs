import React from 'react';
import './ProfileCard.css'
import CardData from './CardData';


function ModalCards(props){
   
    // console.log(props.fullname)
    // console.log(props.dateOfBirth)
    console.log(props.data)
    return (
            <div id="previewCard">
                
                {props.data.map(data => (
                    <div className="card-data" key={data.id}>
                        <CardData onClose={data.closeHandler} key={data.length} fullname={data.fullname} dateOfBirth={data.dateOfBirth} company={data.company} phonenum={data.phonenum} role={data.role} file={data.file}/>
                    </div>
                    ))
                                
                }
                
                  
                
            </div>
            
            

        
    )
}

export default ModalCards;