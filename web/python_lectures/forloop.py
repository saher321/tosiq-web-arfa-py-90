# evenList = []
# oddList = []
# for i in range(1, 11):
#     if i%2 == 0:
#         evenList.append(i)
#     else:
#         oddList.append(i)

# # evenList.extend(oddList)  
# # evenList.sort()  
# print("Even list:", evenList)
# print("Odd list:", oddList)

num = int(input("Enter table number: "))
print("*******Printing table of", num, "*******")

# 2 * 1 = 2
for i in range(1, 21):
    print(num, " * ", i, " = ", num*i)



