import React from 'react';

function FeaturesSection() {
  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">Features That Empower You</h2>
      <div className="row g-4">
        <div className="col-12 col-md-4">
          <div className="border p-4 h-100 text-center shadow-sm">
            <div className="display-4 mb-3">🗂️</div>
            <h5>Organized Notes</h5>
            <p className="text-muted">Keep all your study materials in one place.</p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="border p-4 h-100 text-center shadow-sm">
            <div className="display-4 mb-3">⏰</div>
            <h5>Time Management</h5>
            <p className="text-muted">Track your study time with built-in timers.</p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="border p-4 h-100 text-center shadow-sm">
            <div className="display-4 mb-3">📅</div>
            <h5>Study Planner</h5>
            <p className="text-muted">Plan your study sessions by day, week, or month.</p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="border p-4 h-100 text-center shadow-sm">
            <div className="display-4 mb-3">📈</div>
            <h5>Progress Tracking</h5>
            <p className="text-muted">Visualize your learning progress.</p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="border p-4 h-100 text-center shadow-sm">
            <div className="display-4 mb-3">📚</div>
            <h5>Resources Hub</h5>
            <p className="text-muted">Access learning resources instantly.</p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="border p-4 h-100 text-center shadow-sm">
            <div className="display-4 mb-3">🔔</div>
            <h5>Reminders</h5>
            <p className="text-muted">Get notified to stay on track.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
