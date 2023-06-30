import React from 'react';
import support from "./../banner/support.png";
import choose from "./../banner/7Lg6xtn5.jpg";
import competitive from "./../banner/competition.jpg";
import "./Plans.css";

function Plans() {
  return (
    <>
      <div className="heading text-center" style={{paddingTop: "20px"}}>
        <h3>Why Choose Us</h3>
      </div>
      <div className="row row-cols- row-cols-md-3 g-4 cards-state-1">
        <div className="col">
          <div className="card h-100">
            <img src={support} style={{paddingTop: "10px", width: "200px", margin: "0 auto" }} className="card-img" alt="Image is too big" />
            <div className="card-body">
              <h5 className="card-title text-center" >24/7 Customer Support</h5>
              <p className="card-text text-justify">Our commitment to excellent customer service extends to our round-the-clock support. Whether you have questions about your policy, need assistance with a claim, or require guidance on making changes to your coverage, our knowledgeable and friendly customer support team is available 24/7 to provide reliable and timely assistance.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={choose} style ={{paddingTop: "15px", width: "300px", margin: "0 auto", borderRadius: "20px"}} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Comprehensive Coverage</h5>
              <p className="card-text text-justify">Drive with confidence knowing our comprehensive insurance plan provides extensive protection for your vehicle, including coverage for accidents, theft, natural disasters, and third-party liabilities. Our goal is to ensure you have peace of mind on the road, knowing you're fully protected in any situation that may arise.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={competitive} style ={{paddingTop: "15px", width: "350px", margin: "0 auto", borderRadius: "20px"}} className="card-img-top responsive-image" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Competitive Premiums</h5>
              <p className="card-text text-justify">Benefit from our competitive premiums that offer excellent value for your money. We understand that affordability is important, and we strive to provide cost-effective insurance plans without compromising on coverage or service quality. Save money without compromising on protection.</p>
            </div>
          </div>
        </div>
      </div>
      {/* New Card */}
      <div className="row row-cols-1 row-cols-md-3 g-4 cards-state-2">
        <div className="col">
          <div className="card h-100">
            <img src={support} style={{paddingTop: "10px", width: "200px", margin: "0 auto" }} className="card-img" alt="Image is too big" />
            <div className="card-body">
              <h5 className="card-title text-center" >Fast and Efficient Claim Processing</h5>
              <p className="card-text text-justify">At our company, we prioritize prompt and efficient claim settlement. Our dedicated claims team works diligently to process and resolve claims as quickly as possible, ensuring a seamless experience for our policyholders. We understand the importance of getting you back on the road without unnecessary delays or hassles.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={choose} style ={{paddingTop: "15px", width: "300px", margin: "0 auto", borderRadius: "20px"}} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Added Benefits and Features</h5>
              <p className="card-text text-justify">Enhance your insurance coverage with our valuable additional benefits. From roadside assistance to rental car coverage and optional add-ons, we offer a range of features to customize your policy to suit your unique needs. We believe in going the extra mile to provide comprehensive protection and added convenience for our policyholders.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={competitive} style ={{paddingTop: "15px", width: "350px", margin: "0 auto", borderRadius: "20px"}} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Trusted and Reliable</h5>
              <p className="card-text text-justify">Trust is the foundation of our insurance offerings. With a proven track record of financial stability, industry expertise, and a solid reputation, we are a trusted and reliable insurance provider. We pride ourselves on delivering exceptional service and coverage you can rely on when it matters most.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Plans;
