import style from './Header.module.scss';
import logoSvg from './assets/logo.svg';
import { HeaderLinks } from './links';
import signupSvg from './assets/signupSvg';
import loginSvg from './assets/loginSvg';
import { useMediaQuery } from 'usehooks-ts';
import { useState } from 'react';

const Header = () => {
  const isMobile = useMediaQuery('(max-width:991px)');
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  const toSection = (sectionId) => {
    setBurgerOpen(false);

    const section = document.querySelector(`${sectionId}`);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={style.header}>
      <div className='container'>
        <div className={style.headerBody}>
          <div className={style.headerBody__logo}>
            <img src={logoSvg} alt='' />
          </div>
          {isMobile ? (
            <>
              <div
                onClick={() => setBurgerOpen(!isBurgerOpen)}
                className={`${style.headerBody__burger} ${
                  isBurgerOpen ? style.open : ''
                }`}
              >
                <span></span>
                <span></span>
                <span></span>

                <div
                  className={`${style.headerBody__menu} ${
                    isBurgerOpen ? style.open : ''
                  }`}
                >
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://portal.vymediagroup.com/login'
                    className={style.headerBody__btn}
                  >
                    {loginSvg}
                    Log In
                  </a>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://portal.vymediagroup.com/affiliate/signup'
                    className={style.headerBody__btn}
                  >
                    {signupSvg}
                    Sign Up
                  </a>
                  {HeaderLinks.map((item, index) => (
                    <div
                      onClick={() => toSection(item.to)}
                      key={index}
                      className={style.headerBody__menuItem}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={style.headerBody__links}>
                {HeaderLinks.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => toSection(item.to)}
                    className={style.headerBody__linksItem}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
              <div className={style.headerBody__btns}>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://portal.vymediagroup.com/affiliate/signup'
                  className={style.headerBody__btnsItem}
                >
                  {signupSvg}
                  Sign Up
                </a>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://portal.vymediagroup.com/login'
                  className={style.headerBody__btnsItem}
                >
                  {loginSvg}
                  Log In
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
