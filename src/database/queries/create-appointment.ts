const createAppointmentQuery = `INSERT INTO IDentistry.
    Appointments(
                 id, 
                 start_time, 
                 end_time, 
                 patient_id, 
                 dentist_id, 
                 service_id, 
                 status, 
                 clinic_id
                 ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

export default createAppointmentQuery;
