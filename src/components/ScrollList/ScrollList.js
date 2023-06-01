import "./ScrollList.scss";

export default function ScrollList({dataArray, status, handleDelete}) {

    console.log("data", dataArray);
  return <ul className="scroll-menu">
    
    {dataArray.filter(item => item.status===status).map((item) => {
        return <div className="scroll-menu__card" >
            <img className="scroll-menu__card-img" src={item.poster} alt="" />
            <h2 className="scroll-menu__card-title">{item.title}</h2>
            {console.log(item.title)}
            <img onClick={() => handleDelete(item.id)} src="https://thumbs.dreamstime.com/b/close-button-vector-icon-flat-illustration-iconic-design-isolated-white-background-228588736.jpg" className="scroll-menu__delete-button" />
        </div>


    })
}
  </ul>
}