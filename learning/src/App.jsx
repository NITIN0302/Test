import './App.css'

function App() 
{
  const age = 20;
  const istrue = true;
  const player = ["Shubham","Singhal","Nitin","Adarsh","Niel"];
  const users = [
    {name:"Nitin",age:21},
    {name:"Suman",age:22},
    {name:"Sumona",age:23},

  ]


  return <>
    <div>
      {/* includeing the javascript code in reactjs */}
    {age > 18? "Over Age":"Under Age"}
    </div>
    {istrue && <button>this is button</button>}

    {
      player.map((name,key)=>{
        return <h1>{name}</h1>
      })
    }

    {
      users.map((user,key)=>{
        return <div> {user.name} {user.age} </div>
      })
    }

    </>
}

export default App
