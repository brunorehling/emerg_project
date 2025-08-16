import { useEffect, useState } from "react"
import type {MedicoType} from "../utils/MedicoType"
import { CardMedico } from "../components/CardMedico"


function Medicos() {
  const [medicos, setMedicos] = useState<MedicoType[]>([])

  useEffect(() => {
    async function buscaDados() {
      const response = await fetch("http://localhost:3000/carros")
      const dados = await response.json()
      console.log(dados)
      setMedicos(dados)
    }
    buscaDados()
  }, [])

  const listaMedicos = medicos.map( medico => (
    <CardMedico data={medico} key={medico.id} />
  ))
  return (
    <>
      {listaMedicos}
    </>
  )
}

export default Medicos