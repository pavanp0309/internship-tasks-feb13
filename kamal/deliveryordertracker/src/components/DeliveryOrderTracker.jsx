import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

import {FaLaptop,FaMobileAlt,FaHeadphones,FaBatteryThreeQuarters,FaGamepad,FaBox,} from "react-icons/fa";
import { MdCable } from "react-icons/md";
import { BsMouse } from "react-icons/bs"; 

const DeliveryOrderTracker = (props) => {
  const{id,customerName,items,address,paymentStatus,deliveryStatus,deliveryInstructions,deliveryPartner,eta} = props

  // Payment status badge
  const paymentBadge = {
    Paid: <span className="badge bg-success"><FaCheckCircle className="me-1" /> Paid</span>,
    COD: <span className="badge bg-primary">COD</span>,
    Failed: <span className="badge bg-danger"><FaTimesCircle className="me-1" /> Failed</span>,
  };

  // Delivery progress mapping
  const statusSteps = ["Placed", "Shipped", "Out for Delivery", "Delivered"];
  const currentStepIndex = statusSteps.indexOf(deliveryStatus);

  // Icon map based on item name
  const itemIcons = {
    laptop: <FaLaptop className="me-2 text-primary" />,
    "wireless mouse": <BsMouse className="me-2 text-secondary" />,
    smartphone: <FaMobileAlt className="me-2 text-info" />,
    headphones: <FaHeadphones className="me-2 text-warning" />,
    "power bank": <FaBatteryThreeQuarters className="me-2 text-success" />,
    "usb cable": <MdCable className="me-2 text-danger" />,
    "gaming console": <FaGamepad className="me-2 text-purple" />,
    default: <FaBox className="me-2 text-muted" />,
  };
  
  

  return (
    <div className="card shadow-sm border-0 rounded-4 p-4 mb-4">
      <div className="d-flex justify-content-between align-items-start mb-3">
        <div>
          <h5 className="fw-bold mb-1">Order #{id}</h5>
          <p className="mb-1"><strong>Customer:</strong> {customerName}</p>
          <p className="mb-1"><strong>Address:</strong> {address}</p>
          {deliveryInstructions && (
            <p className="text-muted small mb-1">
              <em>Note: {deliveryInstructions}</em>
            </p>
          )}
          {deliveryPartner && (
            <p className="text-muted small mb-1">
              <i className="bi bi-person-badge me-1"></i> Partner: {deliveryPartner}
            </p>
          )}
          {eta && deliveryStatus !== "Delivered" && (
            <p className="text-muted small mb-1">
              <i className="bi bi-clock-history me-1"></i> ETA: {eta}
            </p>
          )}
        </div>
        <div className="text-end">
          {paymentBadge[paymentStatus]}
        </div>
      </div>

      <div className="mb-3">
        <h6 className="fw-semibold">Items Ordered:</h6>
        <ul className="list-unstyled">
          {items?.map((item, index) => (
            <li key={index} className="d-flex align-items-center mb-1 text-capitalize">
              {itemIcons[item.toLowerCase()] || itemIcons.default} {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-3">
        <h6 className="fw-semibold">Delivery Progress:</h6>
        <div className="d-flex justify-content-between">
          {statusSteps.map((step, index) => (
            <div key={index} className="text-center flex-fill">
              <div
                className={`rounded-circle mx-auto mb-1 ${
                  index <= currentStepIndex ? "bg-success" : "bg-secondary"
                }`}
                style={{ width: 30, height: 30, lineHeight: "30px", color: "white" }}
              >
                {index + 1}
              </div> {/* this div is round circle with number */}
              <small
                className={index <= currentStepIndex ? "text-success" : "text-muted"}
              >
                {step}
              </small>  {/* this is for the text like placed, out for delivery */}
            </div>
          ))}
        </div>
      </div>

      {/* Actions based on delivery status */}
      <div className="text-end">
        {deliveryStatus === "Placed" && (
          <button className="btn btn-outline-primary btn-sm">Cancel Order</button>
        )}
        {deliveryStatus === "Out for Delivery" && (
          <button className="btn btn-outline-success btn-sm">Track Delivery</button>
        )}
        {deliveryStatus === "Delivered" && (
          <button className="btn btn-outline-secondary btn-sm">Rate Experience</button>
        )}
      </div>
    </div>
  );
};

export default DeliveryOrderTracker;
