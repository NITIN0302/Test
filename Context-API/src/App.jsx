import userContextProvider from './Context/userContextProvider.jsx';
import './App.css'
import Profile from './Component/Profile.jsx';
import Login from './Component/Login.jsx';

function App() {


  return (
    <userContextProvider value={{}}>
      <h1>Hello World</h1>
      <Login />
      <Profile />
    </userContextProvider>
  )
}

export default App
