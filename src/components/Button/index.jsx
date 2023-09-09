import { useEffect, useState } from 'react';
import style from './Button.module.scss';

const Button = ({ isMail, onClick, className, href, title, children }) => {
  const [mail, setMail] = useState('');

  useEffect(() => {
    if (isMail) {
      const timer = setTimeout(() => {
        const login = href.split('@')[0];
        const domain = href.split('@')[1];
        setMail(`${login}@${domain}`);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (href) {
    return (
      <a
        href={`${isMail && 'mailto:'}${mail}`}
        onClick={onClick}
        className={`${style.button} ${className}`}
      >
        {children && children}
        {title}
      </a>
    );
  } else {
    return (
      <div onClick={onClick} className={`${style.button} ${className}`}>
        {children && children}
        {title}
      </div>
    );
  }
};

export default Button;
