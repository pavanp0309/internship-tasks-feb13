import React, { useState } from 'react';
import NPSModal from './components/NpsModal';
import '/node_modules/bootstrap/dist/css/bootstrap.css';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [feedbackData, setFeedbackData] = useState({
    count: 0,
    detractors: 0,
    passives: 0,
    promoters: 0,
    nps: 0
  });

  const handleFeedbackSubmit = (score) => {
    let detractors = feedbackData.detractors;
    let passives = feedbackData.passives;
    let promoters = feedbackData.promoters;

    if (score >= 1 && score <= 6) detractors++;
    else if (score >= 7 && score <= 8) passives++;
    else if (score >= 9 && score <= 10) promoters++;

    const totalResponses = detractors + passives + promoters;
    const nps = Math.round(((promoters - detractors) / totalResponses) * 100);

    setFeedbackData({
      count: totalResponses,
      detractors,
      passives,
      promoters,
      nps
    });
  };

  const getNpsStatus = (nps) => {
    if (nps > 50) return 'text-success';
    if (nps > 0) return 'text-warning';
    return 'text-danger';
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-gradient">
          Customer Feedback
        </h1>
        <p className="lead text-muted">
          We value your opinion! Share your experience with us
        </p>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-md-3">
          <div className="card border-0 shadow-lg h-100 hover-scale">
            <div className="card-body text-center p-4">
              <h2 className="display-5 mb-3 text-primary">{feedbackData.count}</h2>
              <p className="text-uppercase small text-muted mb-0">Total Responses</p>
            </div>
          </div>
        </div>
        
        <div className="col-md-3">
          <div className="card border-0 shadow-lg h-100 hover-scale">
            <div className="card-body text-center p-4">
              <h2 className={`display-5 mb-3 ${getNpsStatus(feedbackData.nps)}`}>
                {feedbackData.nps}
              </h2>
              <p className="text-uppercase small text-muted mb-0">NPS Score</p>
              <div className="progress mt-3" style={{ height: '6px' }}>
                <div 
                  className={`progress-bar ${getNpsStatus(feedbackData.nps)}`} 
                  style={{ width: `${Math.abs(feedbackData.nps)}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-3">
          <div className="card border-0 shadow-lg h-100 hover-scale bg-success bg-opacity-10">
            <div className="card-body text-center p-4">
              <h2 className="display-5 mb-3 text-success">{feedbackData.promoters}</h2>
              <p className="text-uppercase small text-muted mb-0">Promoters (9-10)</p>
              <p className="mb-0 text-success">
                {feedbackData.count > 0 ? Math.round((feedbackData.promoters / feedbackData.count) * 100) : 0}%
              </p>
            </div>
          </div>
        </div>
        
        <div className="col-md-3">
          <div className="card border-0 shadow-lg h-100 hover-scale bg-danger bg-opacity-10">
            <div className="card-body text-center p-4">
              <h2 className="display-5 mb-3 text-danger">{feedbackData.detractors}</h2>
              <p className="text-uppercase small text-muted mb-0">Detractors (0-6)</p>
              <p className="mb-0 text-danger">
                {feedbackData.count > 0 ? Math.round((feedbackData.detractors / feedbackData.count) * 100) : 0}%
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <button 
          className="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow-sm hover-scale"
          onClick={() => setModalVisible(true)}
        >
          <i className="bi bi-chat-square-text me-2"></i>
          Share Your Feedback
        </button>
      </div>

      <NPSModal 
        show={modalVisible} 
        onClose={() => setModalVisible(false)}
        onFeedbackSubmit={handleFeedbackSubmit}
      />
    </div>
  );
}