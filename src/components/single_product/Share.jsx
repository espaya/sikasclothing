export default function Share() {
  const handleOnChange = () => {};
  return (
    <>
      <share-button className="share-button">
        <button className="menu-link menu-link_us-s to-share border-0 bg-transparent d-flex align-items-center">
          <svg
            width="16"
            height="19"
            viewBox="0 0 16 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use href="#icon_sharing"></use>
          </svg>
          <span>Share</span>
        </button>
        <details
          id="Details-share-template__main"
          className="m-1 xl:m-1.5"
          hidden=""
        >
          <summary className="btn-solid m-1 xl:m-1.5 pt-3.5 pb-3 px-5">
            +
          </summary>
          <div
            id="Article-share-template__main"
            className="share-button__fallback flex items-center absolute top-full left-0 w-full px-2 py-4 bg-container shadow-theme border-t z-10"
          >
            <div className="field grow mr-4">
              <label className="field__label sr-only" htmlFor="url">
                Link
              </label>
              <input
                type="text"
                className="field__input w-full"
                id="url"
                value="https://uomo-crystal.myshopify.com/blogs/news/go-to-wellness-tips-for-mental-health"
                placeholder="Link"
                onClick={() => null}
                readOnly=""
                onChange={handleOnChange}
              />
            </div>
            <button className="share-button__copy no-js-hidden">
              <svg
                className="icon icon-clipboard inline-block mr-1"
                width="11"
                height="13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 11 13"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 1a1 1 0 011-1h7a1 1 0 011 1v9a1 1 0 01-1 1V1H2zM1 2a1 1 0 00-1 1v9a1 1 0 001 1h7a1 1 0 001-1V3a1 1 0 00-1-1H1zm0 10V3h7v9H1z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="sr-only">Copy link</span>
            </button>
          </div>
        </details>
      </share-button>
      <script src="/assets/js/details-disclosure.js" defer="defer"></script>
      <script src="/assets/js/share.js" defer="defer"></script>
    </>
  );
}
