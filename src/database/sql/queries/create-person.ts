const createPersonQuery = `INSERT INTO IDentistry
.Person(
        id,
        first_name,
        last_name,
        phone_number,
        street1,
        street2,
        city,
        state,
        zip_code,
        documents,
        gender,
        date_of_birth,
        medical_history,
        medication_list
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

export default createPersonQuery;
