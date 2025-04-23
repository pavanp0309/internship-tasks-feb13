import React, { useState } from 'react';

const Feedback = () => {
    const [tick, setTick] = useState(null);
    const [buyAgain, setBuyAgain] = useState('');
    const [comment, setComment] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleTick = (e) => setTick(Number(e.target.value));
    const handleBuyAgain = (e) => setBuyAgain(e.target.value);
    const handleComment = (e) => setComment(e.target.value);

    const handleSubmit = () => {
        if (tick && buyAgain) {
            setIsSubmitted(true);
        } else {
            alert('Please fill all required fields');
        }
    };

    const handleEmoji = (inp) => {
        if (inp >= 1 && inp <= 4) return '☹️';
        if (inp > 4 && inp <= 8) return '😐';
        if (inp > 8 && inp <= 10) return '😄';
        return '';
    };

    return (
        <div className="container py-5">
            {!isSubmitted ? (
                <div className="card shadow-lg border-1  rounded-5 p-4" style={{ backgroundColor: '#ffffff' }}>
                    <h2 className="text-center fw-bold mb-4" style={{ fontSize: '2.2rem' }}>💬 We Value Your Feedback</h2>
                    <p className="text-muted text-center fs-5 mb-4">
                        How likely are you to recommend our product to a friend or colleague?
                    </p>

                    <div className="d-flex flex-wrap justify-content-center gap-3 fs-5 mb-3">
                        {[...Array(10)].map((_, i) => (
                            <div className="form-check form-check-inline" key={i + 1}>
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="nps"
                                    id={`nps-${i + 1}`}
                                    value={i + 1}
                                    onChange={handleTick}
                                />
                                <label className="form-check-label" htmlFor={`nps-${i + 1}`}>
                                    {i + 1}
                                </label>
                            </div>
                        ))}
                        {tick && <div className="ms-3 fs-3">{handleEmoji(tick)}</div>}
                    </div>

                    <hr className="my-4" />

                    <div className="mb-4">
                        <h5 className="mb-2 fw-semibold">Would you buy our product again?</h5>
                        <div className="d-flex gap-4 ">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="buyAgain"
                                    id="buyYes"
                                    value="Yes"
                                    onChange={handleBuyAgain}
                                />
                                <label className="form-check-label" htmlFor="buyYes">Yes</label>
                            </div>

                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="buyAgain"
                                    id="buyNo"
                                    value="No"
                                    onChange={handleBuyAgain}
                                />
                                <label className="form-check-label" htmlFor="buyNo">No</label>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <h5 className="mb-2 fw-semibold">How should we improve our product?</h5>
                        <textarea
                            className="form-control rounded-4 shadow-sm"
                            rows="5"
                            placeholder="Tell us what could be better..."
                            value={comment}
                            onChange={handleComment}
                            style={{ resize: 'none' }}
                        ></textarea>
                    </div>

                    <div className="text-center">
                        <button className="btn btn-dark px-5 py-2 fs-5 rounded-pill" onClick={handleSubmit}>
                            Submit Feedback
                        </button>
                    </div>
                </div>
            ) : (
                <div className="card shadow-lg border-1 rounded-5 text-center p-5" style={{ backgroundColor: '#f9f9ff' }}>
                    <h2 className="text-success mb-3" style={{ fontSize: '2.5rem' }}>🎉 Thank You!</h2>
                    <p className="lead text-muted mb-4">Your response has been recorded.</p>

                    <div className="bg-white shadow-sm rounded-4 p-4 mx-auto" style={{ maxWidth: '600px' }}>
                        <p className="mb-3 fs-5">
                            <strong>Rating:</strong> {tick} <span className="ms-2 fs-4">{handleEmoji(tick)}</span>
                        </p>
                        <p className="mb-3 fs-5">
                            <strong>Would Buy Again:</strong> {buyAgain}
                        </p>
                        <p className="fs-5">
                            <strong>Your Feedback:</strong><br />
                            <span className="text-muted">{comment || 'No additional comments provided.'}</span>
                        </p>
                    </div>

                    <div className="mt-4">
                        <button
                            className="btn btn-outline-secondary rounded-pill px-4"
                            onClick={() => {
                                setTick(null);
                                setBuyAgain('');
                                setComment('');
                                setIsSubmitted(false);
                            }}
                        >
                            Submit Another Response
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Feedback;
