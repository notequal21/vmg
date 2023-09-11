import { useEffect, useState } from 'react';
import style from './Button.module.scss';

const Button = ({
  isMail,
  onClick,
  className,
  href,
  title,
  children,
  ...props
}) => {
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
        {...props}
        href={isMail ? `mailto:${mail}` : href}
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
