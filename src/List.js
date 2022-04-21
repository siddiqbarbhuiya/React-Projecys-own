import React from "react";

const List = ({value}) => {
  return (
    <>
         { value.map((perman)=>{
               const {id,name,age,image}=perman;
               return(
                 <article key={id} className="list-info">
                   <img src={image} alt={name}/>
                   <div className="info">
                     <h3>{name}</h3>
                     <p>{age} years</p>
                   </div>
                   </article>
               )
         })

           }
    </>
  )
};
export default List