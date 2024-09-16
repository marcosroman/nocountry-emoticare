import "./ScheduleAppointment.css"

// const availableTimes = [
//   '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
// ];

const ScheduleAppointments = () => {
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedTime, setSelectedTime] = useState('');


  return (
    <div className="schedule-container">
      <h2>Programar Nueva Cita</h2>
      <div className="form-group">
        <label htmlFor="date">Seleccionar Fecha:</label>
        <input 
          type="date" 
          id="date" 
          name="date" 
        />
      </div>
        <div className="form-group">
          <label htmlFor="time">Seleccionar Hora:</label>
          <select 
            id="time" 
            name="time" 
          >
          </select>
        </div>
      <button 
        className="submit-btn"
      >
        Programar Cita
      </button>
    </div>
  );
};

export default ScheduleAppointments;
