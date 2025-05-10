import { FaTruck,FaCheckCircle,FaTimesCircle } from "react-icons/fa";
import "bootstrap-icons/font/bootstrap-icons.css";

const DeliveryCard = ({
  Aid,
  AcustomerName,
  Aitems,
  ApaymentStatus,
  AdeliveryAddress,
  AcurrentStatus,
}) => {
  const getStatusColor = () => {
    switch (AcurrentStatus) {
        case 'Delivered':
            return { backgroundColor: '#28a745', textColor: '#ffffff' }; // Green with white text
        case 'Placed':
            return { backgroundColor: '#007bff', textColor: '#ffffff' }; // Blue with white text
        case 'Out for Delivery':
            return { backgroundColor: '#ffc107', textColor: '#000000' }; // Yellow with black text
        case 'Cancelled':
            return { backgroundColor: '#dc3545', textColor: '#ffffff' }; // Red with white text
        default:
            return { backgroundColor: '#dc3545', textColor: '#ffffff' }; // Default to red with white text
    }
};      
const { backgroundColor, textColor } = getStatusColor();

const trackingStages = [
    { status: 'Order Placed', icon: <FaCheckCircle />, isActive: AcurrentStatus === 'Placed' || AcurrentStatus === 'Out for Delivery' || AcurrentStatus === 'Delivered' },
    { status: 'Out for Delivery', icon: <FaTruck />, isActive: AcurrentStatus === 'Out for Delivery' || AcurrentStatus === 'Delivered' },
    { status: 'Delivered', icon: <FaCheckCircle />, isActive: AcurrentStatus === 'Delivered' },
    { status: 'Cancelled', icon: <FaTimesCircle />, isActive: AcurrentStatus === 'Cancelled'},
];
  return (
    <div className="mb-4">
      <div className="card shadow border-0 rounded-4">
        <div className="card-body px-4 py-4">
          <h5 className="card-title mb-2 fw-bold">📦 Order ID: {Aid}</h5>
          <h6 className="card-subtitle mb-3 text-muted">
            👤 Customer: {AcustomerName}
          </h6>

          <div className="mb-3">
            <p className="mb-2">
              <FaTruck className="me-2" />
              <strong>Items:</strong> {Aitems}
            </p>

            <p className="mb-2">
              <i className="bi bi-credit-card me-2"></i>
              <strong>Payment Status:</strong>{" "}
              <span
                style={{ color: textColor, backgroundColor, padding: "4px 8px" }}
                className="rounded text-light fw-semibold"
              >
                {ApaymentStatus}
              </span>
            </p>

            <p className="mb-2">
              <i className="bi bi-geo-alt me-2"></i>
              <strong>Delivery Address:</strong> {AdeliveryAddress}
            </p>

            <p className="mb-0">
              <i
                className={`me-2 ${
                  AcurrentStatus === "Delivered"
                    ? "bi bi-check-circle text-success"
                    : "bi bi-exclamation-circle text-warning"
                }`}
              ></i>
              <strong>Current Status:</strong>{" "}
              <span
                style={{ backgroundColor, padding: "4px 8px" }}
                className="rounded text-white fw-semibold"
              >
                {AcurrentStatus}
              </span>
            </p>
          </div>

          <hr className="my-4" />

          <div>
            <h6 className="fw-bold mb-3">🚚 Tracking Information:</h6>
            <ul className="list-group">
              {trackingStages.map((stage, index) => {
                let listItemClass = "list-group-item d-flex align-items-center";
                if (stage.isActive) {
                  listItemClass +=
                    stage.status === "Cancelled"
                      ? " list-group-item-danger"
                      : " list-group-item-success";
                }

                return (
                  <li key={index} className={listItemClass}>
                    <i className={`${stage.icon} me-2`}></i>
                    {stage.status}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryCard;
