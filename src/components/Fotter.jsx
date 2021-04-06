import 'bootstrap/dist/css/bootstrap.min.css';

import location from "../imges/Location.png"
import { AiFillFacebook } from 'react-icons/ai';
import logo from "../imges/Logo3.jpg"
const Fotter = () => {
    return (
		<footer className="footer">
		<div className="container bottom_border">
		<div className="row">
		<div className=" col-sm-4 col-md col-sm-4  col-12 col">
		<h5 className="headin5_amrc col_white_amrc pt2  logoFotter">חפש אותנו</h5>
		<img src={logo}  className="logoFotter1  pt2" alt=""/>
		<p className="mb10">המרכז הירושלמי לבריאות הנפש (כפר שאול-איתנים) משרת את אוכלוסיית הערים ירושלים, בית שמש, מעלה אדומים ומבשרת ציון כמו גם את אוכלוסיית יישובי פרוזדור ירושלים. המרכז הירושלמי כולל שלושה קמפוסים לאשפוז ותחנות לטיפול בבריאות הנפש הפרושות ברחבי העיר ובסביבותיה.</p>
		<p><i className=""></i>ירושלים -אבו טור </p>
		<p><i className=""></i> 0584999430 </p>
		<p><i className=""></i>motaztamimi82@gmail.com</p>
		
		
		</div>


		<div className=" col-sm-4 col-md  col-6 col">
		<h5 className="headin5_amrc col_white_amrc pt2">קישורים מהירים</h5>
		
		<ul className="footer_ul_amrc">
		<li><a href="#">צילומים</a></li>
		<li><a href="#">צילומים </a></li>
		<li><a href="#">צילומים </a></li>
		<li><a href="#">צילומים</a></li>
		<li><a href="#">צילומים</a></li>
		<li><a href="#">צילומים</a></li>
		</ul>
		
		</div>
		
		<div className=" col-sm-4 col-md col-sm-4  col-12 col">
		<h5 className="headin5_amrc col_white_amrc pt2">המיקום שלנו</h5>
		<img src={location} className="location" alt=""/>	
		</div>
		
		
		
		</div>
		</div>
		
		
		<div className="container">
		<ul className="foote_bottom_ul_amrc">
		<li><a href="#">דף הבית</a></li>
		<li><a href="#">ף הבית</a></li>
		<li><a href="#">ף הבית</a></li>
		<li><a href="#">ף הבית</a></li>
		<li><a href="#">ף הבית</a></li>
		<li><a href="#">ף הבית</a></li>
		</ul>
	
		<p className="text-center ">מועתז תמימי | קובי ראית 2017<a href="#">Samsung</a></p>
		
		<ul className="social_footer_ul">
		<li><a href="#"><i ><AiFillFacebook /></i></a></li>
		<li><a href="#"><i ><AiFillFacebook /></i></a></li>
		<li><a href="#"><i ><AiFillFacebook /></i></a></li>
		<li><a href="#"><i ><AiFillFacebook /></i></a></li>
		</ul>
		
		</div>
		
		</footer>
        
    )
}

export default Fotter