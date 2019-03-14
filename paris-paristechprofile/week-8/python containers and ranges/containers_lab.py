# exercise 1
students = ["jessie", "alex", "zoe"]
print("here's the second student's name", students[1])
print("here's the last student's name", students[1])

# exercise 2
foods = 'pizza', 'broccoli', 'ice-cream',
print(foods)
print(foods[0])
for i, food in enumerate(foods):
    print(i, "food goes", (food), "is a good food")
    print(foods)
#exercise 3

for foods in range(1, 3, 1):
    print(foods)
# HELP! Empty string

# exercise 4
home_town = {
    "city": "Columbus",
    "state": "Ohio",
    "population": "actually, I don't know the population"
}
print("I was born in {}, {} - population of {}".format(home_town["city"], home_town["state"], home_town["population"]))

#exercise 5
for k,v in home_town.items():
    print(str(k)+': '  + str(v))

# exercise 6
cohort = []
print(cohort)

# student= {
#     'student': 'Tina',
#     'fav_food': 'Cheeseburger'
# }
# print(student)
# for student in students:
#     cohort.append({
#         student:students[i]
#     })
for i in range(0,3):
    cohort.append({
        "student": students[i],
        "fav_food": foods[i]
    })
print(cohort)