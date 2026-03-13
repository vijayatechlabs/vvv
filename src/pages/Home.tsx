import { useEffect } from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Companies from '../sections/Companies';
import Numbers from '../sections/Numbers';
import Careers from '../sections/Careers';
import Contact from '../sections/Contact';

function Divider() {
  return <div className="h-px bg-[rgba(201,168,76,0.12)] w-full" />;
}

export default function Home() {
  useEffect(() => {
    document.title = "ViswaVardhan Vyapara — Building India's Next Generation of Companies";
  }, []);

  return (
    <>
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Companies />
      <Divider />
      <Numbers />
      <Divider />
      <Careers />
      <Divider />
      <Contact />
    </>
  );
}
