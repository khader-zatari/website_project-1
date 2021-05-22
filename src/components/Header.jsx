/** @format */

import { BsSearch } from 'react-icons/bs';
import MoblieHeader from './MobHeader';
import '../style/Header.css';

const Header = () => {
  return (
    <>
      <div className='Header'>
        <div className='HeaderContanier'>
          <div className='HeaderUpperSection'>
            <a href='./'>
              <img src={`${process.env.PUBLIC_URL}/imges/LOGONEW.jpg`} alt='' />
            </a>
            <div>
              <input type='text' placeholder='חיפוש' />
              <button>
                <BsSearch size='20px' color='white' />
              </button>
            </div>
          </div>
          {/*    <Nav /> */}
        </div>
      </div>
      <MoblieHeader />
    </>
  );
};

export default Header;
