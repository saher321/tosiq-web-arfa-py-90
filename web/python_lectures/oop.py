# class is created named Student

# class Student:
#   name = "Sam"
#   age = 23

# class object
# s1 = Student()
# print(s1.name, s1.age)

# class Student:
#   def __init__(self, name, age):
#     self.name = name
#     self.age = age

# s1 = Student(input("Enter your name: "), input("Enter your age: "))

# print(s1.name, s1.age)
class Animals:
  def voice(self):
    print("Voice is running")

class Cat(Animals):
  pass

c1 = Cat()
c1.voice()