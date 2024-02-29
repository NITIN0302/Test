import UserContextProvider from "./context/UserContextProvider.jsx";
import Login from "./component/Login.jsx";
import Profile from "./component/Profile.jsx";

function App() {
  return (
    <>
      <div className="w-full h-screen bg-black flex flex-wrap justify-center ">
        <div className="bg-slate-300 w-[40%] h-[40%] rounded-md my-auto flex flex-wrap justify-center py-5">
          <UserContextProvider>
            <div className="text-center">
              <Login />
              <Profile />
            </div>
          </UserContextProvider>
        </div>
      </div>
    </>
  );
}

export default App;
