import React from 'react'

export default function Value(props) {
    const deleteData = async()=>{
        let info={
            "_id":props._id
        }
        try {
            const getPeople = await fetch(
              `http://localhost:4000/v1/deletepost`,
              {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
                body:JSON.stringify({ ...info }),
              }
            );
            
            props.getfunction();
          } catch (error) {
            console.log(error);
          }
    }

  return (
    <div className='value'>
      <div>{props.title}</div>
      <div>{props.Time.substring(0,10)}</div>
      <button onClick={deleteData}>Delete</button>
    </div>

  )
}
