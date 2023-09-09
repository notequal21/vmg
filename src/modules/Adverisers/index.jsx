import { Fade } from 'react-reveal';
import AdvantagesCard from '../../components/AdvantagesCard';
import Button from '../../components/Button';
import SectionTitle from '../../components/SectionTitle';
import style from './Adverisers.module.scss';
import { AdverisersContent } from './content';

const AdverisersSection = () => {
  return (
    <section id='advertisers' className={style.adverisers}>
      <div className={`${style.con} container`}>
        <SectionTitle className={style.adverisers__title}>
          <Fade bottom>Advertisers</Fade>
        </SectionTitle>
        <div className={style.adverisersBody}>
          {AdverisersContent.map((item, index) => (
            <AdvantagesCard
              key={index}
              icon={item.icon}
              title={item.title}
              text={item.text}
              className={style.adverisersBody__item}
            />
          ))}
        </div>
        <Fade bottom>
          <Button
            className={style.adverisers__btn}
            title={'Sign Up As An Adverstiser Today'}
          />
        </Fade>
      </div>
    </section>
  );
};

export default AdverisersSection;
