import React from 'react';
import { useNavigate } from 'react-router';

import './style.scss';

import work from '../assets/work.png';
import bigBlock from '../assets/big-block.svg';
import rightBlockUp from '../assets/big-block-right-up.svg';
import rightBlockDown from '../assets/big-block-right-down.svg';
import blockMbTop from '../assets/block-mb-3.svg';
import blockMbCenter from '../assets/block-mb-4.svg';
import blockMbBottom from '../assets/block-mb-5.svg';
import illustration from '../assets/third-image.png';

import Button from '../components/button';
import Switcher from '../components/switcher';
import { Blocks, FormSection } from '../components/section';

import { ITEMS_ONE, ITEMS_TWO, BLOCKS_ONE, BLOCKS_ONE_MB, BLOCKS_TWO, BLOCKS_TWO_MB } from '../constants';

const Home = () => {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/contact');
  }

  const isMobile = window.screen.width < 750;

  return (
    <div className='home'>
      <section className='first'>
        <div className='bg padding'>
          <div className='left'>
            <div>
              <h1>Simplify Your Remote Tech Projects!</h1>
              <p>Optimize your resources with our remote expert team, collaborate efficiently using advanced communication tools, and innovate without limits. <br />
                Transform your ideas into reality, accelerate your growth, and propel your business to new heights with our remote support!</p>
            </div>
            <Button color='secondary' onClick={navigateToContact}>Send Message</Button>
          </div>

          <div className='right'>
            <div className='leftBox'>
              <h4>Tech Consulting Services</h4>
            </div>
            <div className="rightBox">
              <h4>Custom Software Development</h4>
            </div>
          </div>
        </div>
      </section>

      <section className='second padding'>
        <div className='top'>
          <img src={work} alt="" />
          <div>
            <h3>Are you looking for Full Remote profiles?<br />We're ready to take on this challenge.</h3>
            <p>The Perfect Teams for the Optimal Solution. Every Time.</p>

            <Button onClick={navigateToContact}>Get Profiles</Button>
          </div>
        </div>

        <div className='center'>
          <Blocks
            data={isMobile ? BLOCKS_ONE_MB : BLOCKS_ONE}
            ExtraInfo={() => (
              <div className='extraInfo'>
                <Button onClick={navigateToContact}>
                  {isMobile ? 'Contact Us' : 'Contact With Us'}
                </Button>
              </div>
            )}
          />
        </div>

        <div className="bottom">
          <h2>Our services</h2>

          <div className='info'>
            <div className='bigBlockBox'>
              <img src={isMobile ? blockMbTop : bigBlock} alt='' />
              <h4 className='substract'>Your Remote Team !</h4>
              <p>"Either we take the helm of your projects, or you steer remote teams."<br /><br />
                We offer the option to provide dedicated teams or to recruit specific profiles based on our clients' needs.
                Our consultants are carefully selected to meet your needs, whether you're managing remotely or entrusting us with developing your project.</p>
            </div>
            <div className='bigBlocks'>
              <div className="rightBlock">
                <img src={isMobile ? blockMbCenter : rightBlockUp} alt="" />
                <div className='blockText'>
                  <h4>Tech Consulting Services</h4>
                  <p>Our remote services give you access to a pool of talents. Whether you're looking for developers, cybersecurity experts, or other IT profiles, our dedicated team employs innovative methods to find the best-suited candidates for your needs. With an agile and efficient approach, we're here to help you build a high-performing team.</p>
                </div>
              </div>
              <div className="rightBlock">
                <img src={isMobile ? blockMbBottom : rightBlockDown} alt="" />
                <div className='blockText'>
                  <h4>Custom Software Development</h4>
                  <p>Every business is unique, we understand the importance of customization. We embrace your enterprise challenges, whether it's process automation, integration, optimization, or R&D. Our agile approach to software development, ensures that we deliver solutions that meet your specific needs and drive your business forward.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='third padding'>
        <div className='left'>
          <h2>Advanced technologies</h2>
          <div>
            <p>Abnex Remote harnesses cutting-edge technology, agile collaboration, and flexibility to tackle any challenge and deliver customized solutions to our clients.</p>
            <p>With the latest technologies, dynamic delivery teams, and adaptable pricing structures, Abnex Remote is ready to tackle any business challenge.</p>
            <p>We offer a team of developers skilled in the latest technologies such as ReactJS, Swift, Kotlin, TypeScript, Go, NodeJS, as well as Python, JavaScript, and many more...</p>
          </div>
        </div>
        <div className='right'>
          <img src={illustration} alt="" />
          <Button
            color='secondary'
            onClick={navigateToContact}
          >
            Send Message
          </Button>
        </div>
      </section>

      <section className='fourth padding'>
        <div className='container'>
          <div className='title'>
            <h2>Receive the service or product delivery </h2>
            <p>You receive customized software solutions designed to address your technical issues and challenges, offering tailored services continually enhanced with new tools and techniques.Complete software development lifecycle:</p>
          </div>

          <Switcher items={ITEMS_ONE} />
        </div>

        <div>
          <div className='title two'>
            <h2>Need a Remote team ?</h2>
            <p>You oversee a Tech department and are seeking an expert consultant with great agility suited for remote work. Your project involves adapting innovative projects with FullRemote consultants.</p>
          </div>

          <Switcher items={ITEMS_TWO} reverse={true} />
        </div>
      </section>

      <section className='fifth padding'>
        <Blocks
          data={isMobile ? BLOCKS_TWO_MB : BLOCKS_TWO}
          ExtraInfo={() => !isMobile ? (
            <div className='extraInfo'>
              <p>Work with full remote profiles.</p>
              <Button onClick={navigateToContact} color='secondary'>Contact With Us</Button>
            </div>
          ) : (
            <div className='extraInfo'>
              <Button onClick={navigateToContact}>Contact Us</Button>
            </div>
          )}
        />
      </section>

      <FormSection />
    </div>
  )
}

export default Home;