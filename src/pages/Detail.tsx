import React from 'react'
import PageCommon from '../components/PageCommon'
import { useNavigate,useParams } from 'react-router-dom'
import { useQuery } from "@tanstack/react-query";
import { detailQueryData } from '../api/axios';

const Detail = () => {
  const navigate = useNavigate()
  const param = useParams();
  console.log(param)
  const goToBack = () => {
    navigate(-1)
  }
  // const {data} = detailQueryData()
  return (
    <div>
      <PageCommon />
      <div className="grid place-items-center mt-56" >
        <div className="w-4/5 h-full border-2 " >

          <div className="text-bold text-xl font-semibold ml-3">title</div>
          <div className="text-md">content</div>
        </div>
        <div className='w-4/5 h-full mt-5'>
          <div className='w-32 h-12 bg-sky-600 grid place-items-center rounded-lg text-white cursor-pointer ' onClick={goToBack}>뒤로가기</div>
        </div>
      </div>
    </div>
  )
}

export default Detail