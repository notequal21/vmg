import SectionTitle from '../../components/SectionTitle';
import Button from '../../components/Button';
import style from './Main.module.scss';
import bg from './assets/bg.png';
import bg2x from './assets/bg@2x.png';
import bgMobile from './assets/bg-mobile.png';
import bgMobile2x from './assets/bg-mobile@2x.png';
import img from './assets/img.png';
import img2x from './assets/img@2x.png';
import { useMediaQuery } from 'usehooks-ts';
import { Fade } from 'react-reveal';

const MainSection = () => {
  const isMobile = useMediaQuery('(max-width:991px)');
  return (
    <main className={style.main}>
      <div className={style.main__bg}>
        <img
          src={isMobile ? bgMobile : bg}
          srcSet={`${isMobile ? bgMobile : bg} 1x, ${
            isMobile ? bgMobile2x : bg2x
          } 2x`}
          alt=''
        />
      </div>
      <div className={style.main__inner}>
        <div className='container'>
          <div className={style.mainBody}>
            <SectionTitle className={style.mainBody__title}>
              <Fade bottom>Trusted By Super Affiliates</Fade>
              <i>
                <Fade bottom>All Around The World</Fade>
              </i>
            </SectionTitle>
            <div className={style.mainBody__subtitle}>
              <span>
                <Fade bottom>We Strive For Nothing</Fade>
              </span>
              <span>
                <Fade bottom>Less Than Excellence</Fade>
              </span>
            </div>
            <Fade bottom>
              <Button
                target='_blank'
                rel='noreferrer'
                href='https://portal.vymediagroup.com/affiliate/signup'
                className={style.mainBody__btn}
                title='Become an Affiliate'
              />
            </Fade>

            <div className={style.mainBody__img}>
              <Fade right>
                <img src={img} srcSet={`${img} 1x, ${img2x} 2x`} alt='' />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
