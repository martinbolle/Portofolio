import React from 'react'
// Change projects to my own.
import { projects } from '@/data'
import { PinContainer } from './ui/3d-pin'

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of {''}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-20">
        {projects.map(({ id, title, des, img, iconLists, link, }) => (
          <div key={id} 
          className="lg:min-h-[32.5rem] h-[25-rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
           <PinContainer title={title} href={link}>
            <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh]">
              <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#12162d]'>
                <img src="/bg.png" alt="bg-img" />

              </div>
              <img
                src={img}
                alt={title}
                className="z-10 absolute bottom-0"

              />
            </div>

            {title}
           </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects