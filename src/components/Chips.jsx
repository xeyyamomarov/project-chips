import "./style.css"
const Chips=({chipsData,handleSubmit})=>{
    return(
        <div className="chips">
            {chipsData.map(item=>{
                return(
                    <div className="main" key={item.id}>
                    <div className="div">{item.value}</div>
                    <span onClick={()=>handleSubmit(item)}>X</span>
                    </div>
                )
            })}
        </div>
    )
}
export default Chips