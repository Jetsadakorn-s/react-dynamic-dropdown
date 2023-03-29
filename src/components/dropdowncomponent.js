const DropDownComponent = () =>{
    return(
        <nav>
            <h2>
                DropDownComponent
            </h2>
            <select className="menu">
                <option value="เมนูทั้งหมด">เมนูทั้งหมด</option>
                <option value="ผัด-ทอด">ผัด-ทอด</option>
                <option value="แกง-ต้มยำ">แกง-ต้มยำ</option>
                <option value="เครื่องดื่ม">เครื่องดื่ม</option>
                <option value="เสต็ก">เสต็ก</option>
            </select>
        </nav>
    )
}
export default DropDownComponent