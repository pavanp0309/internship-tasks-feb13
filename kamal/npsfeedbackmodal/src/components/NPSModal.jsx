import React, { useState } from 'react';

const NPSModal = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedScore, setSelectedScore] = useState(null);
  const [wouldRecommend, setWouldRecommend] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    if (selectedScore && wouldRecommend) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setStep(1);
    setSelectedScore(null);
    setWouldRecommend('');
    setFeedback('');
    setIsSubmitted(false);
  };

  const getEmoji = (score) => {
    if (score >= 1 && score <= 4) return '😞';
    if (score >= 5 && score <= 7) return '😐';
    if (score >= 8 && score <= 10) return '😊';
    return '';
  };

  return (
    <div className="modal d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content p-4" style={{ border: '2px solid #007bff', boxShadow: '0px 4px 10px rgba(0, 123, 255, 0.3)'}}>
          {!isSubmitted ? (
            <>
             {step === 1 && (
  <>
    <div className="text-center mb-3">
      <h4
        className="fw-bold"
        style={{ color: '#007bff', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}
      >
        Net Promoter Score (NPS) Survey
      </h4>
    </div>

    <h5 className="modal-title mb-4 text-center">
      How likely are you to recommend us to a friend or colleague?
    </h5>

    <div className="position-relative mb-3">
      <div className="d-flex justify-content-center gap-3 flex-wrap">
        {[...Array(10)].map((_, index) => {
          const score = index + 1;  // s just the number from 1 to 10 in this loop.
          let scoreClass = '';
          let borderClass = '';

          // Set initial background color (very light) based on the score
          if (score >= 1 && score <= 3) {
            scoreClass = 'bg-danger text-white';  // Very light red
            borderClass = selectedScore === score ? 'border-3 border-dark' : ''; // If selectedScore is equal to score, assign 'border-3 border-dark' to borderClass ; Otherwise, assign an empty string ''
          }
          if (score >= 4 && score <= 6) {
            scoreClass = 'bg-warning text-dark';  // Very light yellow
            borderClass = selectedScore === score ? 'border-3 border-dark' : '';
          }
          if (score >= 7 && score <= 10) {
            scoreClass = 'bg-success text-white';  // Very light green
            borderClass = selectedScore === score ? 'border-3 border-dark' : '';
          }

          return (
            <div key={score}> {/* key={score} helps React identify which item in the loop is which  */}
              <input
                type="radio" // creates a radio button
                className="btn-check"  // btn-check hides those dots (we style the <label> instead)
                name="score"
                id={`score-${score}`}  // gives a unique ID to each input (score-1, score-2, …)
                autoComplete="off"
                value={score}  // Sets the value of the radio input
                checked={selectedScore === score}  // “Only mark this radio button as selected (checked) if the value of selectedScore is equal to this button's score.”
                onChange={(e) => setSelectedScore(Number(e.target.value))}  // if the user selects radio 2 → e.target.value becomes "2" → Number("2") becomes 2 → and we store 2 in selectedScore.
              />
              <label
                className={`btn px-3 py-2 rounded-2 fw-bold ${scoreClass} ${borderClass} ${
                  selectedScore === score ? 'shadow-lg' : ''
                }`}
                htmlFor={`score-${score}`}  // links this label to the hidden input with same ID (score-1, etc.)
                style={{ minWidth: '40px', textAlign: 'center' }}
              >
                {score}   {/* The actual number thats displayed inside the box */}
              </label>
            </div>
          );
        })}
      </div>

      {/* Emoji label row under radio buttons */}
      <div
        className="d-flex justify-content-between mt-2 px-4 text-muted"
        style={{ maxWidth: '630px', margin: '0 auto' }}
      >
        <div className="text-start">
          <span role="img" aria-label="sad">😞</span><strong>0 - Not likely</strong>
        </div>
        <div className="text-end">
          <strong>10 - Very likely</strong> <span role="img" aria-label="happy">😊</span>
        </div>
      </div>
    </div>

    <div className="d-flex justify-content-end gap-2">
      <button
        className="btn btn-primary"
        onClick={handleNext}
        disabled={!selectedScore}  // Disable the button if no score has been selected yet
      >
        Next
      </button>
      
    </div>
  </>
)}

              {step === 2 && (  // in 124 line -> onClick={handleNext} -> since now step becomes 2, this div block will render and previous div wont
                <>
                <div className="text-center mb-3">
      <h4
        className="fw-bold"
        style={{ color: '#007bff', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}
      >
        Net Promoter Score (NPS) Survey
      </h4>
    </div>
                  <h5 className="modal-title mb-3">Would you use our service again?</h5>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="recommend"
                      id="yes"
                      value="yes"
                      checked={wouldRecommend === 'yes'}
                      onChange={(e) => setWouldRecommend(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="yes">Yes</label>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="recommend"
                      id="no"
                      value="no"
                      checked={wouldRecommend === 'no'}
                      onChange={(e) => setWouldRecommend(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="no">No</label>
                  </div>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-secondary" onClick={handlePrevious}>Back</button>
                    <button
                      className="btn btn-primary"
                      onClick={handleNext}
                      disabled={!wouldRecommend}
                    >
                      Next
                    </button>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                <div className="text-center mb-3">
      <h4
        className="fw-bold"
        style={{ color: '#007bff', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}
      >
        Net Promoter Score (NPS) Survey
      </h4>
    </div>
                  <h5 className="modal-title mb-3">Any additional feedback?</h5>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Your feedback..."
                      value={feedback} // the latest feedback that is last updated due to below line becomes the value here
                      onChange={(e) => setFeedback(e.target.value)} // This listens for any change the user makes inside the textarea — like typing — and updates the state feedback with the latest input.
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-secondary" onClick={handlePrevious}>Back</button>
                    <button className="btn btn-success" onClick={handleSubmit}>
                      Submit
                    </button>
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="container">
              <div className="bg-light p-4 rounded shadow-sm border text-center">
                <h4 className="mb-3 text-primary fw-bold">
                  🎉 Thank you for your feedback!
                </h4>
          
                <div className="mb-3">
                  <h5 className="text-muted">
                    Here's what you shared with us {getEmoji(selectedScore)}
                  </h5>
                </div>
          
                <div className="row justify-content-center text-start mb-3">
                  <div className="col-md-6">
                    <p className="mb-2">
                      <strong>Your rating:</strong>{' '}
                      <span className="badge bg-primary fs-6">{selectedScore}</span>
                    </p>
                    <p className="mb-2">
                      <strong>Would use again:</strong>{' '}
                      <span className={`badge ${wouldRecommend === 'yes' ? 'bg-success' : 'bg-danger'} fs-6`}>
                        {wouldRecommend}
                      </span>
                    </p>
                    <p>
                      <strong>Comments:</strong>{' '}
                      {feedback ? (
                        <span className="text-dark">{feedback}</span>
                      ) : (
                        <em className="text-muted">No additional comments.</em>
                      )}
                    </p>
                  </div>
                </div>
          
                <div className="d-flex justify-content-center gap-3 mt-4">
                  <button className="btn btn-outline-primary" onClick={handleReset}>
                    🔁 Give Another Feedback
                  </button>
                  <button className="btn btn-danger" onClick={onClose}>
                    ✖ Close
                  </button>
                </div>
              </div>
            </div>
          )
          }
        </div>
      </div>
    </div>
  );
};

export default NPSModal;
