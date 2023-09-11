import { Fade } from 'react-reveal';
import Accordion from '../../components/Accordion';
import { FaqContent } from '../../components/Accordion/content';
import Button from '../../components/Button';
import SectionTitle from '../../components/SectionTitle';
import style from './Faq.module.scss';

const FaqSection = () => {
  return (
    <section id='faq' className={style.faq}>
      <div className={`${style.con} container`}>
        <SectionTitle className={style.faq__title}>
          <Fade bottom>Frequently Asked Questions</Fade>
        </SectionTitle>
        <Fade>
          <div className={style.faqBody}>
            {FaqContent.map((item, index) => (
              <Accordion
                key={index}
                faq={{ question: item.question, answer: item.answer }}
              />
            ))}
          </div>
        </Fade>
        <Fade bottom>
          <Button
            target='_blank'
            rel='noreferrer'
            href='https://portal.vymediagroup.com/affiliate/signup'
            className={style.faq__btn}
            title='Become An Affiliate'
          />
        </Fade>
      </div>
    </section>
  );
};

export default FaqSection;
