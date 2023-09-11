import AdvantagesCard from '../../components/AdvantagesCard';
import Button from '../../components/Button';
import SectionTitle from '../../components/SectionTitle';
import style from './Affilates.module.scss';
import { AffilatesContent } from './content';
import bgImg from './assets/bg.png';
import bgImg2x from './assets/bg@2x.png';
import bgImgMobile from './assets/bg-mobile.png';
import bgImgMobile2x from './assets/bg-mobile@2x.png';
import { useMediaQuery } from 'usehooks-ts';
import { Fade } from 'react-reveal';

const AffilatesSection = () => {
  const isMobile = useMediaQuery('(max-width:767px)');

  return (
    <section id='affiliates' className={style.affilates}>
      <div className={style.affilates__bg}>
        <img
          src={isMobile ? bgImgMobile : bgImg}
          srcSet={`${isMobile ? bgImgMobile : bgImg} 1x, ${
            isMobile ? bgImgMobile2x : bgImg2x
          } 2x`}
          alt=''
        />
      </div>

      <div className={`${style.con} container`}>
        <SectionTitle className={style.affilates__title}>
          <Fade bottom>Affiliates</Fade>
        </SectionTitle>
        <Fade>
          <div className={style.affilatesBody}>
            {AffilatesContent.map((item, index) => (
              <AdvantagesCard
                key={index}
                icon={item.icon}
                title={item.title}
                text={item.text}
                className={style.affilatesBody__item}
              />
            ))}
          </div>
        </Fade>
        <Fade bottom>
          <Button
            target='_blank'
            rel='noreferrer'
            href='https://portal.vymediagroup.com/affiliate/signup'
            className={style.affilates__btn}
            title={'Sign Up As An Affiliate Today'}
          />
        </Fade>
      </div>
    </section>
  );
};

export default AffilatesSection;
