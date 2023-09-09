import { Fade } from 'react-reveal';
import style from './AdvantagesCard.module.scss';

const AdvantagesCard = ({ icon, title, text, className }) => {
  return (
    <Fade bottom>
      <div className={`${style.card} ${className}`}>
        <div className={style.card__icon}>{icon}</div>
        <div className={style.card__title}>
          <Fade bottom>{title}</Fade>
        </div>
        <div className={style.card__text}>
          <Fade bottom>{text}</Fade>
        </div>
      </div>
    </Fade>
  );
};

export default AdvantagesCard;
