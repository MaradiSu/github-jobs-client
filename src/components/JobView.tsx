import classNames from 'classnames'
import { useRouter } from 'next/router'
import { Job } from '../types'
import { formatDate, getRandomColor } from '../utils'

export default function JobView({ job }: { job: Job }) {
  const router = useRouter()
  return (
    <>
      <div
        className='p-8 pt-0 mx-auto bg-white rounded-md cursor-pointer w-76 md:w-full min-h-card'
        onClick={() => router.push(`/jobs/${job.id}`)}
      >
        <div
          className={classNames(
            'text-white font-brand font-bold absolute grid w-12 h-12 p-2 transform -translate-y-1/2 place-items-center rounded-2xl',
            getRandomColor()
          )}
        >
          {job.company[0]}
        </div>
        <div className='flex items-center pt-12 text-base font-normal leading-5 text-dark-grey font-brand'>
          <p>{formatDate(new Date(job.created_at))} ago</p>
          <p className='ml-6 text-4xl'>&middot;</p>
          <p className='ml-3'>{job.type}</p>
        </div>
        <div className='mt-3'>
          <h2 className='text-lg font-bold leading-6 font-brand text-very-dark-blue'>
            {job.title}
          </h2>
        </div>
        <div>
          <p className='mt-3 text-base font-normal leading-5 font-brand text-dark-grey'>
            {job.company}
          </p>
        </div>
        <div>
          <p className='mt-10 text-sm font-bold font-brand text-violet'>
            {job.location}
          </p>
        </div>
      </div>
    </>
  )
}