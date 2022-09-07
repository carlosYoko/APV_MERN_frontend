import usePacientes from "../hooks/usePacientes"
import Paciente from "./Paciente"

const ListadoPacientes = () => {

  const {pacientes} = usePacientes()

  return (
            <>
                {pacientes.length ? 
                (
                  <>
                  <h2 className="font-black text-center text-3xl">Listado de pacientes</h2>

                  <p className="text-xl mt-5 mb-10 text-center">
                      Administra tus  {""}
                      <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                  </p>

                  {pacientes.map(paciente => (
                    <Paciente
                        key={paciente._id}
                        paciente={paciente}
                    />
                  ))}
              </>
          ) : 
          (
              <>
                  <h2 className="font-black text-center text-3xl"> No hay pacientes</h2>

                  <p className="text-xl mt-5 mb-10 text-center">
                      Comienza agregando pacientes {""}
                      <span className="text-indigo-600 font-bold">y apareceran en este espacio</span>
                  </p>
              </>
          )}
      </>
    )
}

export default ListadoPacientes