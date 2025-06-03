import { BeatLoader } from "react-spinners" // โหลดเดอร์


const Spinner = ({loading}) => {
  return (
  <BeatLoader // ชื่อโหลดเดอร์
    color="#3b82f6" // สี
    size={20} // ขนาด
    cssOverride={{margin: "48px", textAlign: "center"}} // css
    loading={loading}/>
  );
};


export default Spinner