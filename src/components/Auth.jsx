import { useState } from "react"
import { useDispatch } from "react-redux"
import { loginUser } from "../state/slices/authSlice"


const Auth =() =>{
    const [showModal,setShowModal] = useState(false)
    const dispatch = useDispatch()
    return(
        <>
        <div className="max-w-7xl w-full flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Login</h3>
                  
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      Username 
                    </label>
                    <input type="text" className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      password
                    </label>
                    <input type="password"className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                  </form>
                </div>
                <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                  
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => dispatch({...loginUser})}
                  >
                    Log In
                  </button>
                </div>
              </div>
            </div>
          </div>

        </>
    )
}
export default Auth