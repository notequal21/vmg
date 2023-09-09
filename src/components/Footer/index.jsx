import Button from '../Button';
import style from './Footer.module.scss';
import logo from './assets/logo.svg';
import mailSvg from './assets/mail.svg';
import addressSvg from './assets/address.svg';
import bgImg from './assets/bg.png';
import bgImg2x from './assets/bg@2x.png';
import bgImgMobile from './assets/bg-mobile.png';
import bgImgMobile2x from './assets/bg-mobile@2x.png';
import { HeaderLinks } from '../Header/links';
import { useMediaQuery } from 'usehooks-ts';
import { Fade } from 'react-reveal';

const Footer = () => {
  const isMobile = useMediaQuery('(max-width:767px)');

  const toSection = (sectionId) => {
    const section = document.querySelector(`${sectionId}`);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={style.footer}>
      <div className={style.footer__bg}>
        <img
          src={isMobile ? bgImgMobile : bgImg}
          srcSet={`${isMobile ? bgImgMobile : bgImg} 1x, ${
            isMobile ? bgImgMobile2x : bgImg2x
          } 2x`}
          alt=''
        />
      </div>
      <div className='container'>
        <div id='contact' className={style.footerBody}>
          <div className={style.footerBody__logo}>
            <Fade>
              <img src={logo} alt='' />
            </Fade>
          </div>
          <div className={style.footerBody__title}>
            <Fade>Contact Us</Fade>
          </div>
          <div className={style.footerBody__address}>
            <Fade>
              <img src={addressSvg} alt='' />
              <span>
                1819 SW 5th Ave Suite 120 <br /> Portland, OR 97201 USA
              </span>
            </Fade>
          </div>
          <Fade>
            <Button
              isMail
              className={style.footerBody__btn}
              href='info@vymediagroup.com'
              title={'info@vymediagroup.com'}
            >
              <img src={mailSvg} alt='' />
            </Button>
          </Fade>
        </div>
        <div className={style.footerLinks}>
          {HeaderLinks.map((item, index) => (
            <div
              key={index}
              onClick={() => toSection(item.to)}
              className={style.footerLinks__item}
            >
              <Fade cascade>{item.name}</Fade>
            </div>
          ))}
        </div>
        <div className={style.footer__cr}>
          <Fade cascade>VMG © 2023</Fade>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
