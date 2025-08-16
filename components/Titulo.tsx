

function Titulo() {

  return (
    <>
        <div className="flex justify-between">
            <div>
                <img src="Logo.png" alt=""  className="w-60"/>
            </div>
            <div className="flex justify-center m-15">
                <ul className="flex gap-10 ">
                    <li><a href="#">login</a></li>
                    <li><a href="#">Conheça nossos medicos</a></li>
                    <li><a href="#">Sobre nós</a></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Titulo
