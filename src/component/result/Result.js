import "./Result.scss";
import { MdOutlineCancel } from "react-icons/md";

import image_1 from "../../image/1.png";
import image_2 from "../../image/2.png";
import image_3 from "../../image/3.png";
import image_4 from "../../image/4.png";
import image_5 from "../../image/5.png";
import image_6 from "../../image/6.png";

const giftImages = {
  "Giảm Giá 50%: Lưu Trú Tại NovaWorld Phan Thiết": image_1,
  "Giảm Giá 20%: Lưu Trú Tại NovaWorld Phan Thiết": image_2,
  "Giảm Giá 30%: Lưu Trú Tại NovaWorld Phan Thiết": image_3,
  "Bạn Đã Được Tặng 02 Ly Trà Hoa Đậu Biếc tại Emerald Cafe": image_4,
  "Bạn Đã Được Tặng 02 Ly Trà Ổi Hồng tại Emerald Cafe": image_5,
  "Giảm Giá 10%: Lưu Trú Tại NovaWorld Phan Thiết": image_6,
};

const Result = (props) => {
  const { handleQuay, result, hanleOffModalButton, handleSetModalButton } = props;
  const normalizedResult = result.trim();

  return (
    <div className="modal">
      <div className="blur"></div>
      <div className="content">
        <div
          className="btn-cancel"
          onClick={() => {
            handleQuay(false);
            hanleOffModalButton();
            handleSetModalButton(false);
          }}
        >
          <MdOutlineCancel />
        </div>

        {normalizedResult === "Bạn hết lượt quay !" ? (
          <>
            <div className="hetluot">
              <p>Bạn hết lượt quay !</p>
            </div>
            <p className="trangchu" onClick={() => window.open("https://www.facebook.com/lapolajewelry?locale=vi_VN", "_blank")}>
              Đến trang chủ
            </p>
          </>
        ) : (
          <>
            <div className="gift-container">
              {giftImages[normalizedResult] && (
                <img src={giftImages[normalizedResult]} alt="Phần quà" className="gift-image" />
              )}
              <div className="gift-info">
                <p className="gift__g">
                  🎉 Chúc mừng bạn đã trúng phần quà: <br />
                  <span className="congratulations">{normalizedResult}</span>
                </p>
                <p className="gift-description">
                  Đây là phần quà đặc biệt dành tặng bạn! Hãy tận hưởng niềm vui này và chia sẻ cùng The Emerald Golf View nhé! 💖
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Result;