import { ChangeEvent, useState } from "react";
import ConsultCard from "../Card/ConsultCard";
import SearchIcon from "../../icons/Search";

export type Consult = {
  fecha: string;
  horaInicio: string;
  horaFin: string;
  medico: string;
  paciente: string;
  estado: "Reservado" | "Finalizado" | "Cancelado";
};

function AllConsultSection() {
  const exampleData = [
    {
      fecha: "13-09-2024",
      horaInicio: "09:00",
      horaFin: "10:00",
      medico: "Juan Miguel",
      paciente: "José Gutierrez",
      estado: "Reservado",
    },
    {
      fecha: "12-09-2024",
      horaInicio: "11:00",
      horaFin: "12:00",
      medico: "Rosa Dolores",
      paciente: "Zack Jordan",
      estado: "Finalizado",
    },
    {
      fecha: "09-09-2024",
      horaInicio: "08:00",
      horaFin: "09:30",
      medico: "Coby Bryan",
      paciente: "Diana Ramirez",
      estado: "Cancelado",
    },
    {
      fecha: "13-09-2024",
      horaInicio: "15:00",
      horaFin: "16:00",
      medico: "Roberto Velasquez",
      paciente: "Ariana Sanchez",
      estado: "Reservado",
    },
    {
      fecha: "10-09-2024",
      horaInicio: "12:00",
      horaFin: "13:00",
      medico: "Lucas Lozada",
      paciente: "Emmanuel Diaz",
      estado: "Finalizado",
    },
    {
      fecha: "20-09-2024",
      horaInicio: "17:00",
      horaFin: "18:00",
      medico: "Lionel Messi",
      paciente: "Cristiano Ronaldo",
      estado: "Cancelado",
    },
    {
      fecha: "13-09-2024",
      horaInicio: "07:00",
      horaFin: "08:00",
      medico: "Juana Miranda",
      paciente: "Sonia Magallanes",
      estado: "Reservado",
    },
    {
      fecha: "15-09-2024",
      horaInicio: "09:00",
      horaFin: "10:00",
      medico: "Jandro Salas",
      paciente: "Miguel Cumare",
      estado: "Finalizado",
    },
    {
      fecha: "12-09-2024",
      horaInicio: "20:00",
      horaFin: "21:00",
      medico: "Maria Carvajal",
      paciente: "Petra Missisipi",
      estado: "Finalizado",
    },
    {
      fecha: "25-09-2024",
      horaInicio: "07:00",
      horaFin: "08:00",
      medico: "Lionel Messi",
      paciente: "Gareth Bale",
      estado: "Cancelado",
    },
    {
      fecha: "13-09-2024",
      horaInicio: "12:00",
      horaFin: "13:00",
      medico: "Lucas Lozada",
      paciente: "Maria Missisipi",
      estado: "Reservado",
    },
    {
      fecha: "11-09-2024",
      horaInicio: "15:00",
      horaFin: "16:00",
      medico: "Jandro Salas",
      paciente: "Roberto Gomez",
      estado: "Finalizado",
    },
    {
      fecha: "24-09-2024",
      horaInicio: "17:00",
      horaFin: "18:00",
      medico: "Juan Duarte",
      paciente: "Lidia Michelini",
      estado: "Cancelado",
    },
    {
      fecha: "13-09-2024",
      horaInicio: "10:00",
      horaFin: "11:00",
      medico: "Coby Bryan",
      paciente: "Cristiano Ronaldo",
      estado: "Reservado",
    },
  ];

  const consults = exampleData;
  const lastPage = consults.length;
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const filterData = () => {
    if (search.length === 0 || filter === "") {
      return consults.slice(currentPage, currentPage + 12);
    }
    const filtered = consults
      .filter((element) =>
        element[
          filter as
            | "fecha"
            | "horaInicio"
            | "horaFin"
            | "medico"
            | "paciente"
            | "estado"
        ].includes(search)
      )
      .slice(currentPage, currentPage + 12);
    return filtered;
  };

  const nextPage = () => {
    if (currentPage + 12 < lastPage && filter === "") {
      setCurrentPage(currentPage + 12);
    }
    const filtered = consults.filter((element) =>
      element[
        filter as
          | "fecha"
          | "horaInicio"
          | "horaFin"
          | "medico"
          | "paciente"
          | "estado"
      ]?.includes(search)
    );

    if (filtered && currentPage + 12 < filtered.length) {
      setCurrentPage(currentPage + 12);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 12);
    }
  };

  const onSearchCharge = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(0);
    setSearch(target.value);
  };

  return (
    <section className="flex flex-col items-center justify-start min-h-full py-6">
      <h1 className="text-2xl font-medium tracking-wider">Citas Médicas</h1>
      <header className="flex flex-col md:flex-row md:items-center w-full gap-y-2 gap-x-8 p-4  md:py-4 md:px-10 transition-all duration-300">
        <select
          defaultValue=""
          onChange={(e) => setFilter(e.target.value)}
          className="ps-4 pe-8 py-2 border-2 border-black rounded-xl"
        >
          <option value="" disabled>
            Filtrar por...
          </option>
          <option value="fecha">Fecha</option>
          <option value="horaInicio">Hora Inicio</option>
          <option value="horaFin">Hora Fin</option>
          <option value="paciente">Paciente</option>
          <option value="medico">Médico</option>
          <option value="estado">Estado</option>
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
        <ul className="px-4 min-w-full grid gap-8 sm:grid-cols-2 md:p-8 lg:p-10 lg:grid-cols-3 xl:py-10 xl:px-20 xl:grid-cols-4 ">
          {filterData().map((element, id) => {
            return (
              <ConsultCard
                key={element.paciente + id}
                consult={element as Consult}
              />
            );
          })}
        </ul>
      ) : (
        <p className="text-lg font-semibold text-center mt-4">
          No se encontró ninguna cita
        </p>
      )}
    </section>
  );
}

export default AllConsultSection;
