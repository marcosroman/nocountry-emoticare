import { useEffect, useState } from "react";
import { getAvailableConsult } from "../../../api/auth";
import Calendar from "react-calendar";
import PointIcon from "../../../icons/Point";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type infoDays = {
  hora_inicio: string;
  hora_fin: string;
  id_medico: number;
  dia_semana: number;
  especialidad: string;
  nombre_completo: string;
  fecha: string;
};

type Especialidad = number;

function ScheduleConsult() {
  const [value, onChange] = useState<Value>(new Date()); // Estado que viene con React-calendar

  const [especialidad, setEspecialidad] = useState<Especialidad>(); // Estado que almacena el valor seleccionado en el Select de cada especialidad. Puede ser 1 o 2

  const [infoDays, setInfoDays] = useState<infoDays[] | []>([]); // Estado que almacena un arreglo con todos los horarios que corresponden con la especialidad

  const [daysAvailable, setDaysAvailable] = useState([]); // Estado que almacena un arreglo con unicamente la fecha en formato string de cada horario que corresponde con la especialidad

  const [daySelected, setDaySelected] = useState<infoDays[] | []>([]); // Estado que almacena un arreglo con los horarios que correspondan con la fecha seleccionada por el usuario


  // Función que recibe el dia de la semana como un numero y devuelve la fecha más próxima de ese dia
  const whatDayIs = (day: number) => { 
    const date = new Date();
    const Nday = date.getDay() == 0 ? 7 : date.getDay();
    const SumDay = 7 - Nday;
    date.setDate(date.getDate() + SumDay + day + 1);
    return date.toDateString();
  };

  // UseEffect que se dispara cada vez que se selecciona una especialidad. En el mismo se realiza la petición al Backend para que devuelva los horarios que correspondan con la especialidad seleccionada
  useEffect(() => {
    if (especialidad) {
      const getData = async () => {
        const response = await getAvailableConsult(especialidad);
        return response;
      };

      getData().then((res) => {
        const horarios = res.data.map((element: infoDays) => {
          return whatDayIs(element.dia_semana);
        });
        const infoWithDate = res.data.map((element: infoDays) => {
          return { ...element, fecha: whatDayIs(element.dia_semana) };
        });
        setDaysAvailable(horarios);
        setInfoDays(infoWithDate);
      });
    }
  }, [especialidad]);

  // Función propia de React Calendar que permite cambiar el estilo de ciertos días en el calendario. Recibe como parámetros el día y la vista del calendario, y, si se cumple determinada condición, se estiliza el día
  const stylingAvailableDays = ({
    date,
    view,
  }: {
    date: string;
    view: string;
  }) => {
    return view === "month" && daysAvailable.includes(date.toDateString())
      ? "relative selection:bg-red-600"
      : null;
  };

  
  // Función propia de React Calendar que permite agregar un elemento a ciertos días en el calendario. Recibe como parámetros el día y la vista del calendario, y, si se cumple determinada condición, agrega el elemento en el día
  const pointAvailableDays = ({
    date,
    view,
  }: {
    date: string;
    view: string;
  }) => {
    return view === "month" && daysAvailable.includes(date.toDateString()) ? (
      <PointIcon className="text-blue-600 peer absolute -top-1 right-4 size-4" />
    ) : null;
  };


  // Función propia de React Calendar que permite ejecutar una determinada lógica cuando se hace click a ciertos días en el calendario. Recibe como parámetros el valor del día y, si se cumple determinada condición, se ejecuta la lógica establecida
  const showInfoAvailableDays = (value: { toDateString: () => string; }) => {
    if (daysAvailable.includes(value.toDateString())) {
      const infodeldia = infoDays.filter(
        (element) => element.fecha === value.toDateString()
      );
      setDaySelected(infodeldia);
    }
  };

  // Función que se ejecuta cuando se hace click en uno de los horarios que se muestran tras seleccionar la especialidad y el día
  const agendar = (cita: infoDays) => {
    alert(
      `¿Desea agendar una cita con ${cita.nombre_completo} el día ${cita.fecha} desde las ${cita.hora_inicio} hasta las ${cita.hora_fin}?`
    );
  };

  return (
    <main className="flex flex-col gap-4 items-center justify-center py-2 ">
      <h1 className="text-center text-2xl">Prueba Agendar Cita</h1>
      <select
        className="p-2 text-lg border border-blue-600"
        defaultValue=""
        onChange={(e) => setEspecialidad(Number(e.target.value))}
        name=""
        id=""
      >
        <option disabled value="">
          Especialidad
        </option>
        <option value={1}>Psicología</option>
        <option value={2}>Psiquiatría</option>
      </select>
      <div>
        <Calendar
          tileClassName={stylingAvailableDays}
          tileContent={pointAvailableDays}
          onClickDay={showInfoAvailableDays}
          minDate={new Date()}
          onChange={onChange}
          value={value}
        />
      </div>
      <ul className="grid grid-cols-4 gap-4">
        {daySelected.length > 0 &&
          daySelected.map((disponibilidad, id) => {
            return (
              <li
                onClick={() => agendar(disponibilidad)}
                className="bg-blue-600 text-white p-4 rounded-lg flex flex-col gap-2"
                key={id}
              >
                <h2>{disponibilidad.nombre_completo}</h2>
                <span>{disponibilidad.fecha}</span>
                <span>
                  {disponibilidad.hora_inicio} - {disponibilidad.hora_fin}
                </span>
              </li>
            );
          })}
      </ul>
    </main>
  );
}

export default ScheduleConsult;
