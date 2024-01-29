import React from 'react'
import registerData from './Register.json'
import { register } from 'module'
const Registration = () => {
  return (
    <div className='space-y-5'>
        <h1 className="font-bold text-2xl my-3">Registration Details</h1>
        <div>
            {registerData.map(data=>(
                <div>
                    <h1 className='text-[#018100] text-sm font-bold'>{data.title}</h1>
                    <ol className='list-decimal list-inside'>
                    {data.content.map(cont=>(
                        <li>{cont}</li>
                    ))}
                    </ol>
                </div>
            ))

            }
        </div>
        <div>
            <table className='text-center space-y-10 '>
               <thead className="p-5 text-white rounded-md bg-[#323332]">
               <tr >
               <th className='p-5'>Registration Type</th>
                <th className='p-5'>Indian Author</th>
                <th className='p-5'>Foreign Author</th>
                </tr>
               </thead>
                <tbody>
                <tr>
                    <td>Regular Author (Industry)</td>
                    <td>INR 10000</td>
                    <td>USD 350</td>
                </tr>
                <tr>
                    <td>Regular Author (Academia)</td>
                    <td>INR 8000</td>
                    <td>USD 300</td>
                </tr>
                <tr>
                    <td>IEEE Author</td>
                    <td>INR 7500</td>
                    <td>USD 250</td>
                </tr>
                <tr>
                    <td>Student Author</td>
                    <td>	INR 7000</td>
                    <td>	USD 250</td>

                </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Registration