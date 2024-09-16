
import './AppointmentList.css';

const appointmentsData = [
  {
    id: 1,
    patient: 'Juan Pérez',
    date: '2024-09-12',
    time: '10:00 AM',
    type: 'Consulta general',
    status: 'Confirmada'
  },
  {
    id: 2,
    patient: 'María López',
    date: '2024-09-13',
    time: '12:30 PM',
    type: 'Consulta psicológica',
    status: 'Pendiente'
  },
  {
    id: 3,
    patient: 'Carlos Gómez',
    date: '2024-09-14',
    time: '2:00 PM',
    type: 'Revisión anual',
    status: 'Cancelada'
  }
];

const AppointmentsList = () => {
  return (
    <div className="appointments-container">
      <h2>Listado de Citas</h2>
      <table className="appointments-table">
        <thead>
          <tr>
            <th>Paciente</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Tipo de Cita</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {appointmentsData.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.patient}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.type}</td>
              <td>{appointment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsList;

