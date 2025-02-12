import "./finalResult.scss";
import { MdOutlineCancel } from "react-icons/md";

const InfoResult = (props) => {
  const { result, setModalFinalResult, handleSetModalButton } = props;

  return (
    <div className="final">
      <div className="blur"></div>
      <div className="content-final">
        <div className="group">
          <p className="a">Cảm ơn bạn đã xác nhận!</p>
          <p style={{ marginTop: "10px" }}>
            <span>{result}</span>
          </p>
          <p style={{ marginTop: "20px" }}>
            Chúc bạn có những giây phút vui vẻ tại Lapola Jewelry!
          </p>
          <div
            className="btn-off"
            onClick={() => {
              setModalFinalResult(false);
              handleSetModalButton(false);
            }}
          >
            <MdOutlineCancel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoResult;
