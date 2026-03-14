mylist2 = [12, 33, 52, 11]

mySecondList = [88,55,22,99]
mylist2.extend(mySecondList)

print("List after extend ", mylist2)

mylist2.pop()
print("List after removed 1 elem ", mylist2)
mylist2.insert(3, 100)
print("List after insert 1 elem ", mylist2)

# print("List after extend ", mylist2)
# print("List after reversed ", mylist2)

# data = str(["Red", "Green", "Blue"])
# newData = ", ".join(data)
# print(newData)