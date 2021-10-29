import { useState } from "react"


const Comments=()=>{
  const [comments,setComments]=useState([])
  const [comment,setComment]=useState("")
    const fetchComments= async()=>{
       const response=await fetch('/api/comments')
       const data=await response.json()
       console.log(data)
       setComments(data)

    }

    // const submitComment=async()=>{
    //     const response =await fetch('/api/comments',{
    //         method:'POST',
    //         body:JSON.stringify({comment}),
    //         headers:{
    //             "Content-type":"application/json"
    //         }
    //     })

    //     const data=await response.json()
    //     console.log(data)
    // }

    const submitComment = async () => {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({ comment }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const data = await response.json()
        console.log(data)
      }
   return(
       <>
        <input  
        type="text"
        value={comment}
        onChange={(e)=>setComment(e.target.value)}/>
        <button onClick={submitComment} >Submit Comment</button>
        <button onClick={fetchComments}>Load Comments</button>

        {comments.map(com=>{
            return(
            <div key={com.id}>
                <p>{com.text}</p>

            </div>
        )})}
       </>
   )
}

export default Comments