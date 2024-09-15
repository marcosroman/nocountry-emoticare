import { ChangeEvent, useState } from "react";
import SearchIcon from "../../icons/Search";

function AllDoctorsSection() {
  const exampleData = [
    {
      nombre: "Douglas",
      apellido: "Jerez",
      email: "email@example.com",
      telefono: "+5262132641",
      especialidad: "Psicología",
      nro_registro: "13851389",
    },
    {
      nombre: "Daniel",
      apellido: "Michelena",
      email: "nosoyunmichi@example.com",
      telefono: "+631381641",
      especialidad: "Psiquiatría",
      nro_registro: "13851389",
    },
    {
      nombre: "Adriana",
      apellido: "Carvajal",
      email: "carvajaladri@example.com",
      telefono: "+54564641",
      especialidad: "Psiquiatría",
      nro_registro: "5141389",
    },
    {
      nombre: "Isaac",
      apellido: "Colmenarez",
      email: "mentecolmena@example.com",
      telefono: "+59316441",
      especialidad: "Psicología",
      nro_registro: "12551389",
    },
    {
      nombre: "José",
      apellido: "Vargas",
      email: "joseito@example.com",
      telefono: "+6613231",
      especialidad: "Psiquiatría",
      nro_registro: "13851389",
    },
    {
      nombre: "Sofía",
      apellido: "Aguirre",
      email: "sofiagui@example.com",
      telefono: "+5262132641",
      especialidad: "Psiquiatría",
      nro_registro: "13851389",
    },
    {
      nombre: "Sandra",
      apellido: "Ramirez",
      email: "sandramirez@example.com",
      telefono: "+5262132641",
      especialidad: "Psicología",
      nro_registro: "13851389",
    },
    {
      nombre: "Marcos",
      apellido: "Urdaneta",
      email: "urdamarcos@example.com",
      telefono: "+5262132641",
      especialidad: "Psiquiatría",
      nro_registro: "1384125",
    },
    {
      nombre: "Victoria",
      apellido: "Zabala",
      email: "vickyzabala@example.com",
      telefono: "+5732213854",
      especialidad: "Psiquiatría",
      nro_registro: "1384125",
    },
    {
      nombre: "Javier",
      apellido: "Gutierrez",
      email: "javiguti@example.com",
      telefono: "+5262132641",
      especialidad: "Psicología",
      nro_registro: "5134125",
    },
    {
      nombre: "Juan",
      apellido: "Magallanes",
      email: "magajuan@example.com",
      telefono: "+585312641",
      especialidad: "Psiquiatría",
      nro_registro: "316515",
    },
    {
      nombre: "Julio",
      apellido: "Mavarez",
      email: "mastevalejulio@example.com",
      telefono: "+5262132641",
      especialidad: "Psiquiatría",
      nro_registro: "23816",
    },
    {
      nombre: "Henry",
      apellido: "Ford",
      email: "toyotajaja@example.com",
      telefono: "0800312641",
      especialidad: "Psicología",
      nro_registro: "2381546",
    },
    {
      nombre: "Erick",
      apellido: "Ríos",
      email: "loqueelriosellevo@example.com",
      telefono: "+1235412641",
      especialidad: "Psiquiatría",
      nro_registro: "391816",
    },
    {
      nombre: "Pedro",
      apellido: "Gomez",
      email: "pegomez@example.com",
      telefono: "+5712424211",
      especialidad: "Psiquiatría",
      nro_registro: "3923466",
    },
    {
        nombre: "Erich",
        apellido: "Armijo",
        email: "erich@example.com",
        telefono: "+126344211",
        especialidad: "Psiquiatría",
        nro_registro: "31646",
      },
      {
        nombre: "Dan",
        apellido: "Expositor",
        email: "daaan@example.com",
        telefono: "+461242527",
        especialidad: "Psicología",
        nro_registro: "43186",
      },
  ];
  const consults = exampleData;
  const lastPage = consults.length;
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const filterData = () => {
    if (search.length === 0 || filter === "") {
      return consults.slice(currentPage, currentPage + 15);
    }
    const filtered = consults
      .filter((element) =>
        element[
          filter as
            | "nombre"
            | "apellido"
            | "email"
            | "telefono"
            | "especialidad"
            | "nro_registro"
        ].includes(search)
      )
      .slice(currentPage, currentPage + 15);
    return filtered;
  };

  const nextPage = () => {
    if (currentPage + 15 < lastPage && filter === "") {
      setCurrentPage(currentPage + 15);
    }
    const filtered = consults.filter((element) =>
      element[
        filter as
          | "nombre"
          | "apellido"
          | "email"
          | "telefono"
          | "especialidad"
          | "nro_registro"
      ]?.includes(search)
    );

    if (filtered && currentPage + 15 < filtered.length) {
      setCurrentPage(currentPage + 15);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 15);
    }
  };

  const onSearchCharge = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(0);
    setSearch(target.value);
  };

  const tableClasses = {
    0: "bg-white whitespace-nowrap p-1 border-x border-black text-center",
    1: "bg-sky-100 whitespace-nowrap p-1 border-x border-black text-center",
  };

  return (
    <section className="flex flex-col items-center justify-start min-h-full py-6">
      <h1 className="text-2xl font-medium tracking-wider">Lista de Médicos</h1>
      <header className="flex flex-col md:flex-row md:items-center w-full gap-y-2 gap-x-8 p-4  md:py-4 md:px-10 transition-all duration-300">
        <select
          defaultValue=""
          onChange={(e) => setFilter(e.target.value)}
          className="ps-4 pe-8 py-2 border-2 border-black rounded-xl"
        >
          <option value="" disabled>
            Filtrar por...
          </option>
          <option value="nombre">Nombre</option>
          <option value="apellido">Apellido</option>
          <option value="email">Email</option>
          <option value="telefono">Teléfono</option>
          <option value="especialidad">Especialidad</option>
          <option value="nro_registro">Nro de Registro</option>
        </select>
        <label className="relative flex items-center flex-1 gap-4">
          <input
            title="Selecciona un filtro y escribe tu búsqueda..."
            type="text"
            placeholder="Selecciona un filtro y escribe tu búsqueda..."
            className=" ps-4 pe-8 py-2 w-full border-2 border-black rounded-xl"
            value={search}
            onChange={onSearchCharge}
          />
          <SearchIcon className="absolute right-2" />
        </label>
        <article className="text-white flex items-center justify-center gap-4 lg:gap-8 transition-all duration-300">
          <button
            onClick={prevPage}
            className="py-2 px-4 rounded-lg shadow-lg border-2 border-black bg-white text-black hover:bg-gray-200 transition-all duration-300"
          >
            Anterior
          </button>
          <button
            onClick={nextPage}
            className="py-2 px-4 rounded-lg shadow-lg border-2 border-black bg-white text-black hover:bg-gray-200 transition-all duration-300"
          >
            Siguiente
          </button>
        </article>
      </header>

      {filterData().length > 0 ? (
        <article className="flex justify-center min-w-full py-4 md:py-8 px-16 overflow-x-auto">
          <table className="flex-1 border border-black text-lg">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="whitespace-nowrap p-1">Nombre</th>
                <th className="whitespace-nowrap p-1">Apellido</th>
                <th className="whitespace-nowrap p-1">Email</th>
                <th className="whitespace-nowrap p-1">Teléfono</th>
                <th className="whitespace-nowrap p-1">Especialidad</th>
                <th className="whitespace-nowrap p-1">Nro de Registro</th>
              </tr>
            </thead>
            <tbody>
              {filterData().map((element, id) => {
                return (
                  <tr key={id}>
                    <td className={tableClasses[(id % 2) as 0 | 1]}>
                      {element.nombre}
                    </td>
                    <td className={tableClasses[(id % 2) as 0 | 1]}>
                      {element.apellido}
                    </td>
                    <td className={tableClasses[(id % 2) as 0 | 1]}>
                      {element.email}
                    </td>
                    <td className={tableClasses[(id % 2) as 0 | 1]}>
                      {element.telefono}
                    </td>
                    <td className={tableClasses[(id % 2) as 0 | 1]}>
                      {element.especialidad}
                    </td>
                    <td className={tableClasses[(id % 2) as 0 | 1]}>
                      {element.nro_registro}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </article>
      ) : (
        <p className="text-lg font-semibold text-center mt-4">
          No se encontró ningún médico
        </p>
      )}
    </section>
  );
}

export default AllDoctorsSection;
