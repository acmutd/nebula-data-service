import { useState } from 'react';

const Modal = (props) => {

  console.log(props);
  const [course, setCourse] = useState(props.info);

  const changeHandler = (e) => {
    setCourse({...course, [e.target.name]: e.target.value})
  }

  return (
    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75">
          </div>
        </div>

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div class="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all align-middle" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {course ? Object.keys(course).sort().map(c => (
              <div className="p-4">
                <p>{c}</p>
                <input 
                    className="ring-blue-200 mr-4 py-2 px-4 bg-white rounded-lg placeholder-gray-400 text-gray-900 appearance-none inline-block w-full shadow-md focus:outline-none ring-2 focus:ring-blue-600" 
                    value={course[c]}
                    name={c}
                    onChange={changeHandler}
                ></input>
              </div>
            )) : <></>}
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => { props.close(course, true) }}
            >Edit</button>
            <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => { props.close(null, false )}}
            >Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;