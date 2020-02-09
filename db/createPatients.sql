INSERT INTO patients ("patient_id", "first_name", "last_name", "doctor", "insurance", "amount_owed")
VALUES ($1, $2, $3, $4, $5, $6)
RETURNING *