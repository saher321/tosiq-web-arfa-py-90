import users from "./data.js"; // users data

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