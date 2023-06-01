import "./ScrollList.scss";

export default function ScrollList({dataArray, status, handleDelete}) {

  return <ul className="scroll-menu">
    {dataArray.filter(item => item.status===status).map((item) => {
        return (
        <div className="scroll-menu__card" >
            <img className="scroll-menu__card-img" src={item.poster} alt="" />
            <h2 className="scroll-menu__card-title">{item.title}</h2>
            <img onClick={() => handleDelete(item.id)} src="https://www.emoji.co.uk/files/microsoft-emojis/symbols-windows10/10163-cross-mark.png" className="scroll-menu__delete-button" />
        </div>
        );
        })
    }
  </ul>
}