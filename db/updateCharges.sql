UPDATE patient_charges
SET date = $2, charge = $3, amountdue = $4, amountpaid = $5 , balance = $6
WHERE id = $1