
import random
import csv

with open("fraud_data.csv", "w", newline="") as file:

    writer = csv.writer(file)

    writer.writerow([
        "request_count",
        "failed_logins",
        "login_velocity",
        "is_fraud"
    ])

    for _ in range(1000):

        request_count = random.randint(1, 100)
        failed_logins = random.randint(0, 20)
        login_velocity = random.randint(1, 30)

        is_fraud = 0

        if (
            request_count > 70
            or failed_logins > 8
            or login_velocity > 15
        ):
            is_fraud = 1

        writer.writerow([
            request_count,
            failed_logins,
            login_velocity,
            is_fraud
        ])

print("Dataset Generated Successfully")