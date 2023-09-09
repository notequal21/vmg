import style from './SectionTitle.module.scss';

const SectionTitle = ({ className, children }) => {
  return <div className={`${style.title} ${className}`}>{children}</div>;
};

export default SectionTitle;
