UPDATE patients
SET patientid = $2, firstname = $3, lastname = $4, doctor = $5, insurance = $6, amountowed = $7
WHERE id = $1