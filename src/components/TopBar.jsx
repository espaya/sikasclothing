import '../assets/css/style.css';
import '..//assets/css/plugins/swiper.min.css';


export default function TopBar(){
    return (<div classname="header-top d-flex bg-black color-white align-items-center">
  <ul classname="list-unstyled d-flex flex-1 gap-3 m-0">
    <li>
      <a href="#" classname="menu-link menu-link_us-s color-white">
        Shipping
      </a>
    </li>
    <li>
      <a href="#" classname="menu-link menu-link_us-s color-white">
        FAQ
      </a>
    </li>
    <li>
      <a href="#" classname="menu-link menu-link_us-s color-white">
        Contact
      </a>
    </li>
    <li>
      <a href="#" classname="menu-link menu-link_us-s color-white">
        Track Order
      </a>
    </li>
  </ul>
  <p classname="mx-auto mb-0">FREE SHIPPING WORLDWIDE</p>
  <div classname="heeader-top__right flex-1 d-flex gap-1 justify-content-end">
    <ul classname="social-links list-unstyled d-flex flex-wrap mb-0">
      <li>
        <a href="#" classname="footer__social-link d-block color-white">
          <svg
            classname="svg-icon svg-icon_facebook"
            width={9}
            height={15}
            viewBox="0 0 9 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use href="#icon_facebook" />
          </svg>
        </a>
      </li>
      <li>
        <a href="#" classname="footer__social-link d-block color-white">
          <svg
            classname="svg-icon svg-icon_twitter"
            width={14}
            height={13}
            viewBox="0 0 14 13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use href="#icon_twitter" />
          </svg>
        </a>
      </li>
      <li>
        <a href="#" classname="footer__social-link d-block color-white">
          <svg
            classname="svg-icon svg-icon_instagram"
            width={14}
            height={13}
            viewBox="0 0 14 13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use href="#icon_instagram" />
          </svg>
        </a>
      </li>
      <li>
        <a href="#" classname="footer__social-link d-block color-white">
          <svg
            classname="svg-icon svg-icon_pinterest"
            width={14}
            height={15}
            viewBox="0 0 14 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use href="#icon_pinterest" />
          </svg>
        </a>
      </li>
    </ul>
    <select
      classname="form-select form-select-sm bg-transparent color-white"
      name="store-language"
    >
      <option value="english" defaultvalue="">
        English
      </option>
      <option value="german">German</option>
      <option value="french">French</option>
      <option value="swedish">Swedish</option>
    </select>
    <select
      classname="form-select form-select-sm bg-transparent color-white"
      name="store-currency"
    >
      <option value="usd" defaultvalue="">
        $ USD
      </option>
      <option value="gbp">£ GBP</option>
      <option value="eur">€ EURO</option>
    </select>
  </div>
</div>
)
}