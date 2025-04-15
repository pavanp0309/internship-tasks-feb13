import React from 'react'
import ticketDetails from './ticketDetails'
import TicketCard from './TicketCard'

const TicketList = () => {
  return (
    <div className='container'>
      <div className="row">
        {
          ticketDetails.map((ele) => (
            <div className="col col-sm-12 col-md-12 col-lg-12">
              <TicketCard ticket={ele} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TicketList
