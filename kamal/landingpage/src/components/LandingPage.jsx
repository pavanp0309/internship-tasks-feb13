import React from 'react'


const LandingPage = () => {
  return (
    <div>
        {/* Hero Section */}
<section className="py-5" style={{ backgroundColor: "#eaf4fc" }}>
    <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
        <img src="https://acropolium.com/img/articles/saas-app-architecture/img01.jpg" className="d-block mx-lg-auto img-fluid rounded shadow-sm" alt="SaaS Dashboard Preview" width="700" height="500" loading="lazy" />
        </div>
        <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-primary lh-1 mb-3">Boost Your Productivity with CloudFlow</h1>
        <p className="lead text-muted">CloudFlow is your all-in-one SaaS solution for team collaboration, task automation, and project tracking — designed to streamline your workflow and scale with your business.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Get Started Free</button>
            <button type="button" className="btn btn-outline-primary btn-lg px-4">View Demo</button>
        </div>
        </div>
    </div>
    </div>
</section>


      {/* Features Grid */}
<section id="features" className="py-5" style={{ backgroundColor: "#f4faff" }}>
  <div className="container">
    <h2 className="text-center text-primary fw-bold mb-5">Core Features</h2>
    <div className="row text-center">
      <div className="col-md-4 mb-4">
        <div className="card h-100 p-4 shadow-sm border-0">
          <div className="mb-3">
            <i className="bi bi-cloud-arrow-up fs-1 text-primary"></i>
          </div>
          <h4 className="text-primary">Cloud Sync</h4>
          <p className="text-muted">Access your data anytime, anywhere with real-time cloud synchronization across all devices.</p>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card h-100 p-4 shadow-sm border-0">
          <div className="mb-3">
            <i className="bi bi-speedometer2 fs-1 text-primary"></i>
          </div>
          <h4 className="text-primary">Performance Analytics</h4>
          <p className="text-muted">Track performance metrics with our detailed analytics dashboard and make data-driven decisions.</p>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card h-100 p-4 shadow-sm border-0">
          <div className="mb-3">
            <i className="bi bi-shield-lock fs-1 text-primary"></i>
          </div>
          <h4 className="text-primary">Advanced Security</h4>
          <p className="text-muted">Secure your business with end-to-end encryption, 2FA, and robust user management tools.</p>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card h-100 p-4 shadow-sm border-0">
          <div className="mb-3">
            <i className="bi bi-gear-wide-connected fs-1 text-primary"></i>
          </div>
          <h4 className="text-primary">Custom Integrations</h4>
          <p className="text-muted">Connect your existing tools and platforms easily with our seamless API integrations.</p>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card h-100 p-4 shadow-sm border-0">
          <div className="mb-3">
            <i className="bi bi-people fs-1 text-primary"></i>
          </div>
          <h4 className="text-primary">Collaboration Tools</h4>
          <p className="text-muted">Enable real-time team collaboration with built-in chat, file sharing, and task assignments.</p>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card h-100 p-4 shadow-sm border-0">
          <div className="mb-3">
            <i className="bi bi-graph-up-arrow fs-1 text-primary"></i>
          </div>
          <h4 className="text-primary">Growth Reports</h4>
          <p className="text-muted">Generate visual reports and forecasts to track your growth and future-proof your strategy.</p>
        </div>
      </div>
    </div>
  </div>
</section>


     {/* Testimonials Section */}
     <section className="py-5" style={{ backgroundColor: "#eaf4fc" }}>
        <div className="container">
          <h2 className="text-center mb-5 text-primary">What Our Users Say</h2>
          <div className="row">
            <div className="col-md-4 mb-4" >
              <div className="card h-100 p-4 border-2 rounded-4 border-primary shadow-sm bg-white">
                <p>“SuperSaaS has revolutionized the way we manage our projects. It’s intuitive, fast, and reliable.”</p>
                <div className="d-flex align-items-center mt-4">
                  <img src="https://i.pravatar.cc/60?img=1" className="rounded-circle me-3" alt="User" />
                  <div>
                    <strong>Emily Thompson</strong>
                    <p className="mb-0 text-muted">Project Manager</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 p-4 border-2 rounded-4 border-primary shadow-sm bg-white">
                <p>“I love the real-time analytics and seamless integrations. We’ve increased productivity by 40%.”</p>
                <div className="d-flex align-items-center mt-4">
                  <img src="https://i.pravatar.cc/60?img=2" className="rounded-circle me-3" alt="User" />
                  <div>
                    <strong>David Park</strong>
                    <p className="mb-0 text-muted">CTO</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 p-4 border-2 rounded-4 border-primary shadow-sm bg-white">
                <p>“The interface is beautiful and extremely user-friendly. Highly recommended for any size business.”</p>
                <div className="d-flex align-items-center mt-4">
                  <img src="https://i.pravatar.cc/60?img=3" className="rounded-circle me-3" alt="User" />
                  <div>
                    <strong>Sophie Lin</strong>
                    <p className="mb-0 text-muted">Startup Founder</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 p-4 border-2 rounded-4 border-primary shadow-sm bg-white">
                <p>“This SaaS tool has changed the way our team collaborates. It's intuitive, fast, and reliable.”</p>
                <div className="d-flex align-items-center mt-4">
                  <img src="https://i.pravatar.cc/60?img=4" className="rounded-circle me-3" alt="User" />
                  <div>
                    <strong>Rahul Mehta</strong>
                    <p className="mb-0 text-muted">Product Manager, TechEdge</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 p-4 border-2 rounded-4 border-primary shadow-sm bg-white">
                <p>“After trying several platforms, we finally found a perfect fit. The support team is amazing too!”</p>
                <div className="d-flex align-items-center mt-4">
                  <img src="https://i.pravatar.cc/60?img=5" className="rounded-circle me-3" alt="User" />
                  <div>
                    <strong>Emily Carter</strong>
                    <p className="mb-0 text-muted">CTO, FlowSync</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 p-4 border-2 rounded-4 border-primary shadow-sm bg-white">
                <p>“Super clean UI and powerful features. It's been a game-changer for our business operations.”</p>
                <div className="d-flex align-items-center mt-4">
                  <img src="https://i.pravatar.cc/60?img=6" className="rounded-circle me-3" alt="User" />
                  <div>
                    <strong>Javier Gomez</strong>
                    <p className="mb-0 text-muted">CEO, NovaSoft</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* More About Platform */}
<section className="py-5" style={{ backgroundColor: "#f4faff" }}>
  <div className="container">
    <h2 className="text-center mb-5" style={{ color: "#1e3a8a" }}>More About Our Platform</h2>
    <p className="lead" style={{ color: "#0d47a1" }}>
      Our SaaS platform is crafted with cutting-edge technologies to ensure high performance, scalability, and security. Whether you're a startup or a large enterprise, our tools are tailored to meet your needs. With detailed onboarding and 24/7 support, success is just a click away.
    </p>
  </div>
</section>

{/* Why Choose SuperSaaS */}
<section className="py-5" style={{ backgroundColor: "#eaf4fc", color: "#0d47a1" }}>
  <div className="container">
    <h2 className="text-center mb-5" style={{ color: "#0d47a1" }}>Why Choose SuperSaaS?</h2>
    <ul className="list-group list-group-flush" style={{ color: "#0d47a1" }}>
      <li className="list-group-item" style={{ backgroundColor: "#b3e5fc", color: "#0d47a1" }}>✔️ Enterprise-grade reliability</li>
      <li className="list-group-item" style={{ backgroundColor: "#b3e5fc", color: "#0d47a1" }}>✔️ Fast onboarding and migration</li>
      <li className="list-group-item" style={{ backgroundColor: "#b3e5fc", color: "#0d47a1" }}>✔️ Outstanding customer support</li>
      <li className="list-group-item" style={{ backgroundColor: "#b3e5fc", color: "#0d47a1" }}>✔️ Transparent pricing with no hidden fees</li>
    </ul>
  </div>
</section>


{/* Pricing Section */}
<section className="py-5" style={{ backgroundColor: "#e3f2fd" }}>
  <div className="container text-center">
    <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1 className="display-4 fw-normal" style={{ color: "#0d47a1" }}>SaaS Pricing Plans</h1>
      <p className="fs-5 text-body-secondary">
        Choose a plan that suits your business needs. Whether you're just starting or scaling fast, we have a plan for you.
      </p>
    </div>

    <main>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {/* Starter Plan */}
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm" style={{ borderColor: "#0288d1" }}>
            <div className="card-header py-3" style={{ backgroundColor: "#0288d1", color: "#ffffff" }}>
              <h4 className="my-0 fw-normal">Starter</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $0 <small className="text-body-secondary fw-light">/mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4" style={{ color: "#0d47a1" }}>
                <li>1 project</li>
                <li>Basic analytics</li>
                <li>Email support</li>
                <li>Community access</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-outline-primary" style={{ borderColor: "#0288d1", color: "#0288d1" }}>
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Growth Plan */}
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm" style={{ borderColor: "#0288d1" }}>
            <div className="card-header py-3" style={{ backgroundColor: "#0288d1", color: "#ffffff" }}>
              <h4 className="my-0 fw-normal">Growth</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $29 <small className="text-body-secondary fw-light">/mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4" style={{ color: "#0d47a1" }}>
                <li>10 projects</li>
                <li>Advanced analytics</li>
                <li>Priority email support</li>
                <li>Custom branding</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-primary">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>

        {/* Scale Plan */}
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm" style={{ borderColor: "#0288d1" }}>
            <div className="card-header py-3" style={{ backgroundColor: "#0288d1", color: "#ffffff" }}>
              <h4 className="my-0 fw-normal">Scale</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $99 <small className="text-body-secondary fw-light">/mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4" style={{ color: "#0d47a1" }}>
                <li>Unlimited projects</li>
                <li>Team collaboration</li>
                <li>Phone & email support</li>
                <li>Enterprise-grade security</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-primary">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Compare Plans */}
      <h2 className="display-6 text-center mb-4" style={{ color: "#0d47a1" }}>Compare Features</h2>

      <div className="table-responsive">
        <table className="table text-center" style={{ color: "#0d47a1" }}>
          <thead>
            <tr>
              <th style={{ width: "34%" }}></th>
              <th style={{ width: "22%" }}>Starter</th>
              <th style={{ width: "22%" }}>Growth</th>
              <th style={{ width: "22%" }}>Scale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="text-start">Projects</th>
              <td>1</td>
              <td>10</td>
              <td>Unlimited</td>
            </tr>
            <tr>
              <th scope="row" className="text-start">Analytics</th>
              <td>Basic</td>
              <td>Advanced</td>
              <td>Advanced</td>
            </tr>
            <tr>
              <th scope="row" className="text-start">Support</th>
              <td>Email</td>
              <td>Priority Email</td>
              <td>Phone & Email</td>
            </tr>
            <tr>
              <th scope="row" className="text-start">Custom Branding</th>
              <td></td>
              <td><i className="bi bi-check2"></i></td>
              <td><i className="bi bi-check2"></i></td>
            </tr>
            <tr>
              <th scope="row" className="text-start">Team Collaboration</th>
              <td></td>
              <td></td>
              <td><i className="bi bi-check2"></i></td>
            </tr>
            <tr>
              <th scope="row" className="text-start">Security</th>
              <td>Standard</td>
              <td>Standard</td>
              <td>Enterprise-grade</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</section>


{/* FAQ'S */}
<section className="py-5" style={{ backgroundColor: "#eaf4fc" }}>
  <div className="container">
    <h2 className="text-center mb-4"  style={{ color: "#0d47a1" }}>Frequently Asked Questions</h2>
    <div className="accordion" id="faqAccordion">

      <div className="accordion-item">
        <h2 className="accordion-header" id="faq1">
          <button className="accordion-button text-body-emphasis" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1">
            Is there a free trial?
          </button>
        </h2>
        <div id="collapse1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
          <div className="accordion-body">Yes! Every new user gets a 14-day free trial with full access to all features.</div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="faq2">
          <button className="accordion-button collapsed text-body-emphasis" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2">
            Can I change my plan later?
          </button>
        </h2>
        <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div className="accordion-body">Absolutely. You can upgrade or downgrade your plan anytime from your dashboard.</div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="faq3">
          <button className="accordion-button collapsed text-body-emphasis" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3">
            Do you offer refunds?
          </button>
        </h2>
        <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div className="accordion-body">We offer a 7-day money-back guarantee for annual subscriptions only.</div>
        </div>
      </div>

    </div>
  </div>
</section>



{/* Footer Section */}
<div className="container-fluid bg-dark text-light">
  <footer className="py-5">
    <div className="row mx-5 px-5">
      <div className="col-6 col-md-2 mb-3">
        <h5>Product</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Overview</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Integrations</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Updates</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Company</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">About</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Careers</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Blog</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Contact</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Press</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Resources</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Docs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">API</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Community</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Help Center</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Status</a></li>
        </ul>
      </div>

      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Get updates on features, product news, and SaaS industry trends.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="email" className="form-control" placeholder="Email address" />
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top border-light mx-5 px-5">
      <p>© 2025 SaaSify Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3">
          <a className="link-light" href="#" aria-label="Instagram">
            <svg className="bi" width="24" height="24">
              <use xlinkHref="#instagram" />
            </svg>
          </a>
        </li>
        <li className="ms-3">
          <a className="link-light" href="#" aria-label="Facebook">
            <svg className="bi" width="24" height="24">
              <use xlinkHref="#facebook" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</div>


</div>
  )
}

export default LandingPage
