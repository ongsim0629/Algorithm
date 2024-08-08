score = int(input())

if score <= 100 and score >= 90:
    grade = 'A'
elif score < 90 and score >= 80:
    grade = 'B'
elif score < 80 and score >= 70:
    grade = 'C'
elif score < 70 and score >= 60:
    grade = 'D'
else:
    grade = 'F'

print(grade)