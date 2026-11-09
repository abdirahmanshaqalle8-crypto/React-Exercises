import UserCard from "./UserCard";

function App() {

  const name = "Abdirahman Abdi";
  const email = "abdirahmanshaqalle8@gmail.com";

  return (

    <div>

    <UserCard 
      name={name} 
      email={email} 
    />

    <UserCard 
      name={"Najiib Siciid"} 
      email={"najiib8@gmail.com"} 
    />

    <UserCard 
      name={"Yusuf Maxamed"} 
      email={"yuusuf8@gmail.com"} 
    />

    </div>
  )
}

export default App;
