import React from "react";
import styles from "./style";
import {
  Navbar,
  Billing,
  Business,
  Button,
  Testimonials,
  Stats,
  Hero,
  GetStarted,
  Footer,
  FeedbackCard,
  Clients,
  CardDeal,
  CTA,
} from "./components/index.js";
const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        {" "}
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX}  ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Billing />
        <Business />
        <Button />
        <Testimonials />
        <Stats />
        <Footer />
        <FeedbackCard />
        <Clients />
        <CardDeal />
        <CTA />
      </div>
    </div>
  </div>
);

export default App;
