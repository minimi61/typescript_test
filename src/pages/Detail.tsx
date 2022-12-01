import React from 'react'
import PageCommon from '../components/PageCommon'
import { useNavigate, useParams } from 'react-router-dom'
import { detailQueryData, queryData } from '../api/axios';

const Detail = () => {
  const navigate = useNavigate()
  const { changeType } = queryData()
  const param = useParams();
  if (!param) {
    throw new Error('No Params')
  }
  console.log(changeType)
  const goToBack = () => {
    navigate(-1)
  }
  const  {data}  = detailQueryData(param?.id as unknown as number)
  return (
    <div>
      <PageCommon />
      <div className="grid place-items-center mt-56" >
        <div className="w-4/5 h-full border-2 p-10" >

          <div className="text-bold text-xl font-semibold mb-5">{data?.title}</div>
          <div className="text-md">{data?.content}</div>
        </div>
        <div className='w-4/5 h-full mt-5'>
          <div className='w-32 h-12 bg-sky-600 grid place-items-center rounded-lg text-white cursor-pointer ' onClick={goToBack}>뒤로가기</div>
        </div>
      </div>
    </div>
  )
}

export default Detail