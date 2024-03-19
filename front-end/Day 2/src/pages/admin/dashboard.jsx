import React, { useState } from "react";
import { Button, Chip } from "@nextui-org/react";

export default function AdminDashboard() {
  // Dummy loan data
  const [loans, setLoans] = useState([
    {
      id: 1,
      name: "John Doe",
      phone: "+1234567890",
      PAN: "ABCDE1234F",
      address: "123 Main Street, City, Country",
      loanId: "L123456",
      salary: "50000",
      email: "john.doe@example.com",
      aadhar: "123456789012",
      status: "Pending",
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "+9876543210",
      PAN: "FGHIJ5678K",
      address: "456 Oak Avenue, Town, Country",
      loanId: "L789012",
      salary: "60000",
      email: "jane.smith@example.com",
      aadhar: "987654321098",
      status: "Approved",
    },
  ]);

  // Function to update loan status
  const updateLoanStatus = (id, newStatus) => {
    const updatedLoans = loans.map((loan) =>
      loan.id === id ? { ...loan, status: newStatus } : loan
    );
    setLoans(updatedLoans);
  };

  return (
    <div className="flex">
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Loan Applications</h1>
        <div className="grid grid-cols-1 gap-4">
          {loans.map((loan) => (
            <div key={loan.id} className="p-4 bg-white shadow-md rounded-lg">
              <div className="text-lg font-semibold">Name: {loan.name}</div>
              <div>Phone: {loan.phone}</div>
              <div>PAN: {loan.PAN}</div>
              <div>Address: {loan.address}</div>
              <div>Loan ID: {loan.loanId}</div>
              <div>Salary: Rs. {loan.salary}</div>
              <div>Email: {loan.email}</div>
              <div>Aadhar: {loan.aadhar}</div>
              <div className="mt-2">
                Status:{" "}
                <Chip
                  color={
                    loan.status === "Pending"
                      ? "warning"
                      : loan.status === "Approved"
                      ? "success"
                      : "danger"
                  }
                >
                  {loan.status}
                </Chip>
              </div>
              <div className="flex mt-4">
                {loan.status !== "Approved" && (
                  <Button
                    color="success"
                    onClick={() => updateLoanStatus(loan.id, "Approved")}
                  >
                    Approve
                  </Button>
                )}
                <div className="ml-5"> 
                {loan.status !== "Rejected" && (
                  <Button
                    color="danger"
                    onClick={() => updateLoanStatus(loan.id, "Rejected")}
                  >
                    Reject
                  </Button>
                )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
