import "./body.css";

const Body = () => {
  return (
    <div className="container">
      <div className="item-a">
        <div className="box">
          <img
            src="https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
            alt=""
          />
          <div>
            <p>
              <span>Get This</span>
            </p>
          </div>
        </div>
      </div>
      <div className="item-b">
        <div className="box">
          <img
            src="https://i.picsum.photos/id/1029/4887/2759.jpg?hmac=uMSExsgG8_PWwP9he9Y0LQ4bFDLlij7voa9lU9KMXDE"
            alt=""
          />
          <div>
            <p>
              <span>Or This</span>
            </p>
          </div>
        </div>
      </div>
      <div className="item-c">
        <div className="box">
          <img
            src="https://i.picsum.photos/id/1062/5092/3395.jpg?hmac=o9m7qeU51uOLfXvepXcTrk2ZPiSBJEkiiOp-Qvxja-k"
            alt=""
          />
          <div>
            <p>
              <span>
                Using Grid can be a really useful tool for placing content!
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="item-d">
        <div className="box">
          <img
            src="https://i.picsum.photos/id/113/4168/2464.jpg?hmac=p1FqJDS9KHL70UWqUjlYPhJKBdiNOI_CIH0Qo-74_fU"
            alt=""
          />
          <p>We can also use indexes to create a collage!</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
