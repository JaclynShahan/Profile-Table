INSERT INTO patients ("patientid", "firstname", "lastname", "doctor", "insurance", "amountowed")
VALUES ($1, $2, $3, $4, $5, $6)
RETURNING *