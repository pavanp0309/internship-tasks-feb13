import React, { useState } from 'react';

export default function NPSModal({ show, onClose, onFeedbackSubmit }) {
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleScoreChange = (e) => setScore(Number(e.target.value));
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (score) {
      setSubmitted(true);
      onFeedbackSubmit(score);
    }
  };

  const handleReset = () => {
    setScore(null);
    setSubmitted(false);
  };

  const getEmoji = () => {
    if (score >= 1 && score <= 4) return '😢';
    if (score >= 5 && score <= 7) return '😐';
    if (score >= 8 && score <= 10) return '😊';
    return '';
  };

  const getScoreColor = (value) => {
    if (value === score) {
      if (value >= 9) return 'bg-success text-white';
      if (value >= 7) return 'bg-warning text-dark';
      if (value >= 1) return 'bg-danger text-white';
    }
    return 'bg-light';
  };

  if (!show) return null;

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg">
          <div className="modal-header border-0">
            <h5 className="modal-title fw-bold">How likely are you to recommend us?</h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="modal-body py-4">
                <div className="d-flex justify-content-between mb-3 px-2">
                  {[...Array(10)].map((_, i) => {
                    const value = i + 1;
                    return (
                      <div key={value} className="text-center">
                        <input
                          type="radio"
                          id={`score-${value}`}
                          name="score"
                          value={value}
                          checked={score === value}
                          onChange={handleScoreChange}
                          className="d-none"
                        />
                        <label 
                          htmlFor={`score-${value}`} 
                          className={`d-flex align-items-center justify-content-center rounded-circle ${getScoreColor(value)}`}
                          style={{
                            width: '40px',
                            height: '40px',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            fontSize: '1.1rem',
                            fontWeight: '600'
                          }}
                        >
                          {value}
                        </label>
                      </div>
                    );
                  })}
                </div>
                <div className="d-flex justify-content-between text-muted small px-2">
                  <span>Not likely</span>
                  <span>Extremely likely</span>
                </div>
              </div>
              <div className="modal-footer border-0">
                <button 
                  type="submit" 
                  className="btn btn-primary px-4 py-2 rounded-pill w-100"
                  disabled={!score}
                >
                  Submit Rating
                </button>
              </div>
            </form>
          ) : (
            <div className="modal-body text-center py-5">
              <div className="mb-4">
                <div 
                  className={`d-inline-flex align-items-center justify-content-center rounded-circle ${getScoreColor(score)}`}
                  style={{
                    width: '80px',
                    height: '80px',
                    fontSize: '2rem'
                  }}
                >
                  {score}
                </div>
              </div>
              <h4 className="mb-3">Thank you for your feedback! {getEmoji()}</h4>
              <p className="text-muted mb-4">
                Your opinion helps us improve our service
              </p>
              <button 
                className="btn btn-outline-primary px-4 py-2 rounded-pill me-2"
                onClick={handleReset}
              >
                Rate Again
              </button>
              <button 
                className="btn btn-primary px-4 py-2 rounded-pill"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}