import React from 'react'
import {AiOutlineCheck} from 'react-icons/ai';

const Subscription = () => {
  return (
    <div name='pricing' className='w-full text-white '>
    <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>

    <div className='max-w-[1240px] mx-auto py-12'>

      <div className='text-center py-8 text-slate-300'>
        <h2 className='text-3xl uppercase'>Pricing</h2>
        <h3 className='text-5xl font-bold text-white py-8'>The right price for your research.Choose the plan that’s right for you
</h3>
        <p className='text-3xl'>
        Choose the plan that’s right for you
        HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions.
        </p>
      </div>

      <div className='grid md:grid-cols-2'>

        <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
          <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
          <div>
            <p className='text-6xl font-bold py-4 flex'>RS 149<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
          </div>
          <p className='text-2xl py-8 text-slate-500'>Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</p>
          <div className='text-2xl'>
              <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />Watch all you want. Ad-free.</p>
              <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />Recommendations just for you.</p>
              <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />Change or cancel your plan anytime.</p>
              <a href='https://buy.stripe.com/test_cN2eY46O8fkp2vS288'>
              <button className='w-full py-4 my-4 bg-red-600'>RS 149</button>
              </a>
          </div>
        </div>
        <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
          <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Premium</span>
          <div>
            <p className='text-6xl font-bold py-4 flex'>RS 399<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
          </div>
          <p className='text-2xl py-8 text-slate-500'>Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</p>
          <div className='text-2xl'>
              <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />Watch all you want. Ad-free.</p>
              <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />Recommendations just for you.</p>
              <p className='flex py-4'><AiOutlineCheck className='w-8 mr-5 text-green-600'  />Change or cancel your plan anytime.</p>
              <a href='https://buy.stripe.com/test_fZe7vC5K46NTb2oaEF'>
              <button className='w-full py-4 my-4  bg-red-600'>RS 399</button>

              </a>
          </div>
        </div>
      </div>
    </div>
  </div>


  )
}

export default Subscription
