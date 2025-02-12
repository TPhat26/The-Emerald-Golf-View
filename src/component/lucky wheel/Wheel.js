import { useEffect, useRef, useState } from "react";
import anh2 from "../../image/anh2.jpg";
import anh2_xs from "../../image/anh2-xs.jpg"
import muiten from "../../image/mui ten.png";
import vongquay from "../../image/VongQuay.png";
import quayngay from "../../image/nutquay.png";
import "./Wheel.scss";
const Wheel = (props) => {
  const { handleQuay, getResult } = props;
  const [isSpinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const wheelRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const values = [
    { gift: "VOUCHER 50% DỊCH VỤ LƯU TRÚ TẠI NOVAWORLD PHAN THIẾT", pct: 2 },
    { gift: "VOUCHER 10% DỊCH VỤ LƯU TRÚ TẠI THE EMERALD GOLF VIEW", pct: 5 },
    { gift: "Tặng Bạn 02 ly Trà Ổi Hồng", pct: 18 },
    { gift: "Tặng Bạn 02 ly Trà Hoa Đậu Biếc", pct: 20 },
    { gift: "VOUCHER 20% DỊCH VỤ LƯU TRÚ TẠI NOVAWORLD PHAN THIẾT", pct: 10 },
    { gift: "Tặng Bạn 02 ly Trà Hoa Đậu Biếc", pct: 20 },
    { gift: "VOUCHER30% DỊCH VỤ LƯU TRÚ TẠI NOVAWORLD PHAN THIẾT ", pct: 5 },
    { gift: "Tặng Bạn 02 ly Trà Ổi Hồng", pct: 20 },
  ];
  const sliceSize = 360 / 8;
  const spinWheel = () => {
    if (isSpinning) return;
    const cookieValue = localStorage.getItem("TMWheel");

    if (cookieValue === null) {
      setSpinning(true);
      const fullRots = 4;
      const targetAngle = 1800 * fullRots;
      const expanded = values.flatMap((user) => Array(user.pct).fill(user));
      let indexRandom = Math.floor(Math.random() * expanded.length); // arr
      const winner = expanded[indexRandom]; // get element
      let findIndexGift = values.findIndex((item) => item.gift === winner.gift);
      getResult(values[findIndexGift].gift);
      
      let initialRotation = 360;
      wheelRef.current.style.transition = "none";
      wheelRef.current.style.transform = `rotate(${initialRotation}deg)`;

      const randomAngle =
        Math.random() *
          ((findIndexGift + 1) * sliceSize - findIndexGift * sliceSize + 1) +
        findIndexGift * sliceSize;
      setTimeout(() => {
        wheelRef.current.style.transition = "all ease-out 5s";
        wheelRef.current.style.transform = `rotate(${
          randomAngle + targetAngle
        }deg)`;

        setTimeout(() => {
          setIsOpen(true);
          setSpinning(false);
          handleQuay(true);
          //localStorage.setItem("TMWheel", "OK");
        }, 6000);
      }, 0);
    } else {
      handleQuay(true);
      getResult("Bạn hết lượt quay !");
    }
  };

  const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
      const updateScreenSize = () => {
        setIsMobile(window.innerWidth < 1024); // Adjust to your mobile breakpoint
      };
  
      updateScreenSize(); // Set initial screen size
      window.addEventListener('resize', updateScreenSize); // Listen to resize events
  
      return () => {
        window.removeEventListener('resize', updateScreenSize); // Cleanup
      };
    }, []);

  return (
    <>
      <div className="vongquay-container">
        <img  src={isMobile ? anh2_xs : anh2} alt="anh" className="anh_2" />

        <div className="vongquay">
          <img src={muiten} alt="vong quay" className="arrow" />
          <img
            src={vongquay}
            alt="vong quay"
            ref={wheelRef}
            className="anh_vongquay"
          />
          <div className="btXoay cursor-pointer " onClick={() => spinWheel()}>
            QUAY
            {/* <img src={quayngay} alt="btn-quay" className="anh_btn-quay" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Wheel;
