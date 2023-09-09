import style from './Accordion.module.scss';
import { useRef, useState } from 'react';
import arrowSvg from './assets/arrow.svg';
import { Fade, Zoom } from 'react-reveal';

const Accordion = ({ faq, index }) => {
  const { question, answer } = faq;
  const contentEl = useRef(null);
  const [clicked, setClicked] = useState(false);
  const handleToggle = () => {
    setClicked((prev) => !prev);
  };

  return (
    <Fade bottom>
      <div className={`${style.accordion} ${clicked && style.active}`}>
        <button onClick={handleToggle} className={style.accordion__btn}>
          <Fade>
            <p>{question}</p>
          </Fade>
          <span className={style.accordion__arrow}>
            <Zoom>
              <img src={arrowSvg} alt='' />
            </Zoom>
          </span>
        </button>
        <div
          ref={contentEl}
          style={
            clicked
              ? { height: contentEl.current.scrollHeight }
              : { height: '0px' }
          }
          className={style.accordion__content}
        >
          <div className={style.accordion__answer}>
            {answer.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Accordion;
