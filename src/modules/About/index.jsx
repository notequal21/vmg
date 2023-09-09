import { Fade } from 'react-reveal';
import Button from '../../components/Button';
import SectionTitle from '../../components/SectionTitle';
import style from './About.module.scss';
import { useRef, useState } from 'react';

const AboutSection = () => {
  const contentEl = useRef(null);
  const [clicked, setClicked] = useState(false);
  const handleToggle = () => {
    setClicked((prev) => !prev);
  };

  return (
    <section id='about' className={style.about}>
      <div className='container'>
        <div className={style.aboutBody}>
          <SectionTitle className={style.aboutBody__title}>
            <Fade bottom>
              About <i>VMG</i>
            </Fade>
          </SectionTitle>
          <div className={style.aboutBody__text}>
            <Fade bottom>
              <p>
                Vy Media Group also known as VMG Network was founded by a Super
                Affiliate for Super Affiliates.
              </p>
              <p>
                We have spent the past decade in the Affiliate Marketing
                trenches as successful Media Buyers, Marketers, Network Owners
                and we know first hand what it takes to succeed in this
                industry.
              </p>
              <p>
                We bridge the relationships and connections into one platform
                both on the Affiliate side and Advertiser side to create a
                successful venture.
              </p>
            </Fade>
            <div
              style={
                clicked
                  ? { height: contentEl.current.scrollHeight }
                  : { height: '0px' }
              }
              ref={contentEl}
              className={`${style.more} ${clicked ? style.open : ''}`}
            >
              <p>
                VMG is the most sought after boutique Performance Network in the
                Industry.
              </p>
              <p>
                We exclusively hand select offers in all the other major
                verticals in the space and have been rapidly expanding
                strategically.
              </p>
              <p>
                With so many Networks and Affiliates to choose from nowadays we
                here at VMG have a different approach to business which is to
                remain extremely high quality and boutique.
              </p>
              <p>
                This ensures that availability to the highest converting offers
                remain accessible to our Affiliate base as well as greatly
                improving the lead quality and Return On Investment for our
                Advertisers.
              </p>
              <p>We are not looking to work with everyone…</p>
              <p>We only want to work with the best.</p>
              <p>
                At Vy Media Group we strive for excellence and professionalism
                and with a proven track record we will greatly contribute to
                your business success and growth overall.
              </p>
              <p>
                We look forward to serving you and providing value here at Vy
                Media Group.
              </p>
            </div>
          </div>
          <Fade bottom>
            <Button
              onClick={handleToggle}
              className={style.aboutBody__btn}
              title={clicked ? 'Less' : 'Read more'}
            />
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
