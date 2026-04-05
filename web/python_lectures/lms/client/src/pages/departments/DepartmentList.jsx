import React, { useEffect, useState } from "react";
import WebLayout from "../../layouts/WebLayout";
import { DEPTS_URL } from "../../utils/api.js";
import axios from "axios";


function DepartmentList() {
  const [ departments, setDepartments ] = useState([]);

  const getDepartments = async () => {
    try {
      const response = await axios.get(DEPTS_URL);
      console.log("Departments fetched successfully:", response.data.data);
      if (response.data) {
        setDepartments(response.data.data);
      } else {
        console.error("No data received from the server.");
      }
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  }

  useEffect(() => {
    getDepartments()
  }, [])
  return (
    <WebLayout>
      <section className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Departments</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-900">Explore your academic units</h1>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-600">
            A clean overview of each department so learners can quickly jump to the right curriculum.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {departments.map((department) => {
          return (
            <article key={department.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <p className="text-xs uppercase tracking-[0.26em] text-slate-500">Department</p>
            <h2 className="mt-4 text-xl font-semibold text-slate-900">{department.name}</h2>
            <p className="mt-3 text-sm text-slate-600">15 available students</p>
            <a href="#" className="mt-6 inline-flex text-sm font-medium text-slate-900 decoration-slate-900 underline-offset-4 transition hover:text-slate-700">
              View students
            </a>
          </article>
          )
        })}
      </div>
    </section>
    </WebLayout>
  );
}

export default DepartmentList;
