import React from 'react'
import sessions from './data'
import MeditationSession from './MaditationSession'

const App = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h1 className='text-center my-2'>Meditation Session</h1>
          {
            sessions.map((ele)=>{
              const {id,name,image,category,isLocked,isPremium,duration,description}=ele
              console.log(ele)
              return <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                <MeditationSession
                Aid={id}
                Aname={name}
                Aimage={image}
                Acategory={category}
                AisLocked={isLocked}
                AisPremium={isPremium}
                Aduration={duration}
                Adescription={description}
                />
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App