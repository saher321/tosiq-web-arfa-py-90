# clear(), extend(), pop(), count(), remove()
# sort(), reverse(), max(), min(), copy(), insert()
# remaining function extend(), pop(), reverse(), insert()
myList = [1, 6, -31, 110, 2, 200, 6, 6, 3, 4]

removedList = myList.remove(-31)
print("After removed 1 value", myList)
maxNumber = max(myList)

minNumber = min(myList)
# print("Max number is", maxNumber, "\nMin number is", minNumber)
# print("Orignal List:", myList)
# print("List is copying...")
copiedList = myList.copy()
# print("Your list has been copied", copiedList)


countNumber = myList.count(-3)
# print("Number -3 coming count:", countNumber)

# print(myList)
# print("List in clearing...")
# clearedList = myList.clear()
# print("List has been cleared: ",clearedList)
sortedList = sorted(myList)
# print("Data after sorting", sortedList)

reversedList = sortedList.reverse()
# print("The reverse list is", reversedList)

# ----------------------------
#           ASSIGNMENT        
# marks = [34, 27, 90, 66, 54, 79, 81]
# output: 
# First heighest marks is 90
# Second heighest marks is 81

# hint: max, remove, temp