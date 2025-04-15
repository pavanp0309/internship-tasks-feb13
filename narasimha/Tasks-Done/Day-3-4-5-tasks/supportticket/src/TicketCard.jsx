import React from 'react'

const TicketCard = ({ ticket }) => {

  const { orderId, customerName, isPremium, issueDescription, createdDate, isHigh, status
  } = ticket


  const statusData = (status) => {

    switch (status) {

      case "Open":
        return { bg: 'green' };
      case "In Progress":
        return { bg: 'grey' };
      case "Closed":
        return { bg: 'red' };
      default:
        return {};
    }
  }

  const { bg } = statusData(status);


  return (
    <div className="container d-flex justify-content-center">
      <div class="card shadow my-2" style={{ width: '700px' }}>
        <div class="card-body" >
          <div className='d-flex justify-content-between'>
            <h5 class="card-title fs-2">Ticket{orderId}</h5>
            <p class="card-text fw-bold rounded-pill" style={{ backgroundColor: isPremium ? "blue" : "white", color: isPremium ? "white" : "dark", padding: '5px 20px', fontSize: '20px' }}>{isPremium ? "Premium" : ""}</p>
          </div>
          <h3 class="card-title">{customerName}</h3>

          <div className='d-flex justify-content-between my-2'>
            <h5 class="card-text">{issueDescription}</h5>
            <h6 class="card-text rounded my-2 mx-4" style={{ backgroundColor: isHigh ? "#ffe5e5" : "", padding: '2px 5px' }}>{isHigh ? "🔥High" : ""}</h6>
          </div>
          <div className='d-flex justify-content-between'>
            <h5 class="card-text">Dated {createdDate}</h5>
            <p class="card-text rounded fw-bold " style={{ backgroundColor: bg, color: 'white', padding: '5px 25px', fontSize: '22px' }}>{status}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketCard
