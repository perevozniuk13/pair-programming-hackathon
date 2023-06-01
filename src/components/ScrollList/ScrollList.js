import "./ScrollList.scss";

export default function ScrollList({dataArray, status, setClickedCardFlag}) {

  return <ul className="scroll-menu">
    
    {dataArray.filter(item => item.status===status).map((item) => {
        return <div className="scroll-menu__card" onClick={()=> setClickedCardFlag(true)}>
            <img className="scroll-menu__card-img" src={item.poster} alt="" />
            <h2 className="scroll-menu__card-title">{item.title}</h2>
        </div>

    })
}
  </ul>
}