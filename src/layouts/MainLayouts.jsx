import { Outlet } from "react-router-dom"; // ตัวแทนของสิ่งที่อยู่กึ่งกลาง(สิ่งที่อยู่ใน Main)

const Main = () => {
  return (
    <>
        <main>
            <div className="main">
                <Outlet />
            </div>
        </main>
    </>
  )
}


export default Main