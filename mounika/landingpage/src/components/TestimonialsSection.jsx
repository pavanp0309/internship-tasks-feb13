import React from 'react';

function TestimonialsSection() {
  const testimonials = [
    { name: 'Aarav S.', quote: 'Study Sync transformed the way I prepare for exams!', avatar: 'https://i.pravatar.cc/50?img=1' },
    { name: 'Sneha R.', quote: 'A must-have for every student. Simple, powerful, and effective.', avatar: 'https://i.pravatar.cc/50?img=2' },
    { name: 'Kiran M.', quote: 'Helped me stay consistent with my schedule.', avatar: 'https://i.pravatar.cc/50?img=3' }
  ];

  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">What Our Users Say</h2>
        <div className="row g-4">
          {testimonials.map((t, index) => (
            <div className="col-md-4" key={index}>
              <div className="p-4 border rounded shadow-sm h-100">
                <p className="fst-italic">“{t.quote}”</p>
                <div className="d-flex align-items-center mt-3">
                  <img src={t.avatar} alt="avatar" className="rounded-circle me-3" />
                  <strong>{t.name}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;