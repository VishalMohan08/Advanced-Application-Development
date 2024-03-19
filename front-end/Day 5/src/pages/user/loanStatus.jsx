import React, { useState } from "react";
import NavBar from "../../assets/static/navbar";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spacer,
  Chip,
} from "@nextui-org/react";
import backgroundImage from "../../assets/images/AuthBG.jpg";

export default function LoanStatus() {
  // Dummy loan data
  const loans = [
    {
      id: 1,
      amount: 50000,
      status: "Approved",
    },
    {
      id: 2,
      amount: 10000,
      status: "Pending",
    },
    {
      id: 3,
      amount: 15000,
      status: "Rejected",
    },
  ];

  // Modal state variables
  const [viewDetailsModalOpen, setViewDetailsModalOpen] = useState(false);
  const [processingModalOpen, setProcessingModalOpen] = useState(false);
  const [rejectionModalOpen, setRejectionModalOpen] = useState(false);

  return (
    <>
      <NavBar />
      <div
        className="min-h-screen flex flex-col items-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        {" "}
        <div className="bg-white border-lg mt-[8%] p-4 border-8 opacity-90 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-center">Loan Status</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {loans.map((loan) => (
              <div key={loan.id} className="p-4 rounded-lg bg-white shadow-md">
                <div className="text-lg font-semibold">Loan ID: {loan.id}</div>
                <Spacer y={1} />
                <div>Amount: Rs.{loan.amount}</div>
                <Spacer y={1} />
                <div>
                  Status:{" "}
                  <Chip
                    color={
                      loan.status === "Approved"
                        ? "success"
                        : loan.status === "Pending"
                        ? "warning"
                        : "danger"
                    }
                    variant="bordered"
                  >
                    {loan.status}
                  </Chip>
                </div>
                <Spacer y={1} />
                <div className=" text-center mt-2">
                  {loan.status === "Approved" && (
                    <Button
                      color="success"
                      onClick={() => setViewDetailsModalOpen(true)}
                    >
                      View Details
                    </Button>
                  )}
                </div>
                <div className=" text-center mt-2">
                  {loan.status === "Pending" && (
                    <Button
                      color="warning"
                      onClick={() => setProcessingModalOpen(true)}
                    >
                      Processing
                    </Button>
                  )}
                </div>
                <div className=" text-center mt-2">
                  {loan.status === "Rejected" && (
                    <Button
                      color="danger"
                      onClick={() => setRejectionModalOpen(true)}
                    >
                      Reason for Rejection
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* View Details Modal */}
      <Modal
        backdrop="blur"
        isOpen={viewDetailsModalOpen}
        onClose={() => setViewDetailsModalOpen(false)}
      >
        <ModalContent>
          <ModalHeader>View Details</ModalHeader>
          <ModalBody>
            This section contains the details of your approved loan.
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              auto
              onClick={() => setViewDetailsModalOpen(false)}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Processing Modal */}
      <Modal
        backdrop="blur"
        isOpen={processingModalOpen}
        onClose={() => setProcessingModalOpen(false)}
      >
        <ModalContent>
          <ModalHeader>Processing</ModalHeader>
          <ModalBody>
            Your loan is currently being processed. Please wait for further
            updates.
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              auto
              onClick={() => setProcessingModalOpen(false)}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Rejection Modal */}
      <Modal
        backdrop="blur"
        isOpen={rejectionModalOpen}
        onClose={() => setRejectionModalOpen(false)}
      >
        <ModalContent>
          <ModalHeader color="danger">Reason for Rejection</ModalHeader>
          <ModalBody>
            Unfortunately, your loan application has been rejected. Please
            review the reason below:
            <br />
            <br />
            Reason: Your credit score does not meet the required criteria.
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              auto
              onClick={() => setRejectionModalOpen(false)}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
