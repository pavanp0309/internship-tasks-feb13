import React from 'react';

const Price = () => {
  return (
    <div className='container py-5' style={{ backgroundColor: '#f0f8ff' }}>
  <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
    <h1 className="display-4 fw-bold text-primary">API Pricing</h1>
    <p className="fs-5 text-secondary">
      Choose the right API plan to suit your business needs. Our plans are flexible and crafted for developers, startups, and enterprises.
    </p>
  </div>

  {/* Pricing Cards */}
  <div className="row row-cols-1 row-cols-md-3 mb-5 text-center">
    {/* Free Plan */}
    <div className="col mb-4">
      <div className="card h-100 d-flex flex-column shadow-sm border-info">
        <div className="card-header py-3 bg-info text-white">
          <h4 className="my-0 fw-normal">Free</h4>
        </div>
        <div className="card-body flex-grow-1 d-flex flex-column">
          <h1 className="card-title pricing-card-title">$0<small className="text-muted">/month</small></h1>
          <ul className="list-unstyled mt-3 mb-4 text-start">
            <li>✅ 1,000 API requests/month</li>
            <li>✅ Basic API support</li>
            <li>✅ Public endpoints</li>
            <li>✅ Developer documentation</li>
          </ul>
          <div className="mt-auto">
            <button type="button" className="w-100 btn btn-outline-info">Start for free</button>
          </div>
        </div>
      </div>
    </div>

    {/* Pro Plan */}
    <div className="col mb-4">
      <div className="card h-100 d-flex flex-column shadow-sm border-indigo">
        <div className="card-header py-3 bg-primary text-white">
          <h4 className="my-0 fw-normal">Pro</h4>
        </div>
        <div className="card-body flex-grow-1 d-flex flex-column">
          <h1 className="card-title pricing-card-title">$15<small className="text-muted">/month</small></h1>
          <ul className="list-unstyled mt-3 mb-4 text-start">
            <li>✅ 10,000 API requests/month</li>
            <li>✅ Premium endpoints access</li>
            <li>✅ Advanced analytics dashboard</li>
            <li>✅ Rate limit increase</li>
            <li>✅ Usage notifications</li>
          </ul>
          <div className="mt-auto">
            <button type="button" className="w-100 btn btn-primary">Get started</button>
          </div>
        </div>
      </div>
    </div>

    {/* Enterprise Plan */}
    <div className="col mb-4">
      <div className="card h-100 d-flex flex-column shadow-sm border-dark">
        <div className="card-header py-3 bg-dark text-white">
          <h4 className="my-0 fw-normal">Enterprise</h4>
        </div>
        <div className="card-body flex-grow-1 d-flex flex-column">
          <h1 className="card-title pricing-card-title">$49<small className="text-muted">/month</small></h1>
          <ul className="list-unstyled mt-3 mb-4 text-start">
            <li>✅ 100,000 API requests/month</li>
            <li>✅ 24/7 priority support</li>
            <li>✅ Custom API endpoints</li>
            <li>✅ SLA & uptime guarantees</li>
            <li>✅ Dedicated technical account manager</li>
            <li>✅ Team access & collaboration</li>
            <li>✅ API call analytics export</li>
          </ul>
          <div className="mt-auto">
            <button type="button" className="w-100 btn btn-outline-light bg-dark text-white">Contact us</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Compare Plans */}
  <div className="p-4 rounded" style={{ backgroundColor: '#e8f4ff' }}>
    <h2 className="text-center mb-4 text-primary">📊 Compare API Plans</h2>
    <div className="table-responsive mb-5">
      <table className="table table-bordered text-center align-middle shadow-sm">
        <thead className="table-primary">
          <tr>
            <th></th>
            <th>Free</th>
            <th>Pro</th>
            <th>Enterprise</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <th className="text-start">Monthly API Requests</th>
          <td>1,000</td>
          <td>10,000</td>
          <td>100,000</td>
        </tr>
        <tr>
          <th className="text-start">Public Endpoints</th>
          <td>✅</td>
          <td>✅</td>
          <td>✅</td>
        </tr>
        <tr>
          <th className="text-start">Premium Endpoints</th>
          <td>❌</td>
          <td>✅</td>
          <td>✅</td>
        </tr>
        <tr>
          <th className="text-start">Custom Endpoints</th>
          <td>❌</td>
          <td>❌</td>
          <td>✅</td>
        </tr>
        <tr>
          <th className="text-start">Advanced Analytics</th>
          <td>❌</td>
          <td>✅</td>
          <td>✅</td>
        </tr>
        <tr>
          <th className="text-start">Support Level</th>
          <td>Basic</td>
          <td>Priority Email</td>
          <td>24/7 Priority + Manager</td>
        </tr>
        <tr>
          <th className="text-start">Team Collaboration</th>
          <td>❌</td>
          <td>❌</td>
          <td>✅</td>
        </tr>        </tbody>
      </table>
    </div>
  </div>

  {/* FAQ Section */}
  <div className="mt-5 p-4 rounded" style={{ backgroundColor: '#f5faff' }}>
    <h2 className="text-center text-success mb-4">❓ Frequently Asked Questions</h2>
    <div className="accordion" id="faqAccordion">
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
            What happens if I exceed my API limit?
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div className="accordion-body">
            You will receive a notification and your API calls will be rate-limited or temporarily paused until the next billing cycle or upgrade.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
            Can I switch plans anytime?
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div className="accordion-body">
            Yes, you can upgrade or downgrade your plan anytime from your account dashboard without losing data.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
            Do you offer custom pricing for high-volume use?
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div className="accordion-body">
            Absolutely! Contact our sales team and we’ll craft a tailored plan to suit your specific needs.
          </div>
        </div>
      </div>    </div>
  </div>
</div>

  );
};

export default Price;
