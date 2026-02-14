const users = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    designation: "Software Engineer",
    department: "IT"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    designation: "HR Manager",
    department: "Human Resources"
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    designation: "Financial Analyst",
    department: "Finance"
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    designation: "Marketing Executive",
    department: "Human Resources"
  },
  {
    id: 5,
    name: "David Wilson",
    email: "david.wilson@example.com",
    designation: "Sales Manager",
    department: "Finance"
  },
  {
    id: 6,
    name: "Jessica Martinez",
    email: "jessica.martinez@example.com",
    designation: "Product Manager",
    department: "Design"
  },
  {
    id: 7,
    name: "Daniel Anderson",
    email: "daniel.anderson@example.com",
    designation: "UX Designer",
    department: "Design"
  },
  {
    id: 8,
    name: "Olivia Thomas",
    email: "olivia.thomas@example.com",
    designation: "Data Scientist",
    department: "Data Analytics"
  },
  {
    id: 9,
    name: "James Taylor",
    email: "james.taylor@example.com",
    designation: "Operations Manager",
    department: "Operations"
  },
  {
    id: 10,
    name: "Sophia Moore",
    email: "sophia.moore@example.com",
    designation: "Customer Support Lead",
    department: "Customer Service"
  }
];

printData();
function printData(){
    let list = document.getElementById("user-list");

    users.map((user) => {
        list.innerHTML +=
            `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.designation}</td>
                <td>${user.department}</td>
            </tr>
            `;
    });
}

let departmentName = "Design";

const filteredData = users.filter((user) => user.department == departmentName)

console.log(filteredData);

function filterUsers(){
    let searchedText = document.getElementById("searchedText").value;
    console.log(searchedText);
}