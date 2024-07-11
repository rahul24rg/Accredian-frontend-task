import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import ReferralBenefits from './components/ReferralBenefits';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ReferModal from './components/ReferModal';
import ContactSection from './components/ContactSection';

const App = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
    courseID: '',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    handleClose();
  };

  return (
    <>
   
    <HeroSection onOpenModal={handleOpen} />
    <HowItWorks />
    <ReferralBenefits onOpenModal={handleOpen} />
    <FAQ />
    <Footer />
    <ContactSection />
    <ReferModal
      open={open}
      onClose={handleClose}
      form={form}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  </>
  );
};

export default App;
