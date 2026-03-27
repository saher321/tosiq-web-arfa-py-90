# class assignment: make 3 products
# (id, name, category, price, descripton, tags)
users = [
  {'id': 101, 'name': "Adam", "role": "user"},
  {'id': 102, 'name': "Ali", "role": "admin"},
  {'id': 103, 'name': "Zain", "role": "user"},
  {'id': 104, 'name': "Ahmad", "role": "vendor"},
  {'id': 105, 'name': "Alex", "role": "user"}
]

for item in users:
  print("User ID: ", item['id'])
  print("User name: ", item['name'])
  print("User role: ", item['role'])
  print("------------ END OF USER LIST --------")