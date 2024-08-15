import React from 'react';


const CreateTodo = () => {

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  return (
    <div>
          <input id="title" type="text" placeholder="title" onChange={function(e){
            //const value = e.target.value;
            setTitle(e.target.value);
          }} /> <br /> <br />
          <input id="desc" type="text" placeholder="description" onChange={function(e){
            //const value = e.target.value;
            setDescription(e.target.value);
          }}/> <br /> <br />

          <button onClick={() => {
            fetch('http://localhost:3000/todo', {
              method: 'POST',
              body: JSON.stringify({
                title: title,
                desc: description
              }),
              headers: {
                'Content-Type': 'application/json'
              }
            })
              .then(async function(){ 
                //const data = await response.json();
                alert("Todo Created")
              })
          }}>Add Todo</button>
    </div>
  )
}

export default CreateTodo;