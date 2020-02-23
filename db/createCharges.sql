INSERT INTO patient_charges ("date", "charge", "amountdue", "amountpaid", "balance")
VALUES ($1, $2, $3, $4, $5)
RETURNING *
