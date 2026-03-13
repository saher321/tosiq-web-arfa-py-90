mytuple = (1,2,4,5,6,6,8)
# print(mytuple)

mysets = {1,2,4,5,6,6,8}
# print(mysets)

mydictionary = {
    'name': 'Ali',
    'age': 45
}

# print(mydictionary['name'],mydictionary['age'])

students = [
    {'id': 101, 'name': 'Jack', 'age': 20},
    {'id': 102, 'name': 'Martha', 'age': 23},
    {'id': 103, 'name': 'Samantha', 'age': 24},
    {'id': 104, 'name': 'Alice', 'age': 19},
]
# print(students)

for std in students:
    print("-----Student information-------")
    print("Info: Student id", std['id'])
    print("Info: Student id", std['name'])
    print("Info: Student id", std['age'])
    print("-------------------------------")