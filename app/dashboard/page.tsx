'use client';
import { addFreshInvoice } from "../api/invoice";
import { useState } from "react";
// import addInvoice from "./api/invoice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
export default function Dashboard() {


  const [addNewinvoice, setAddNewinvoice] = useState(false);
  const [viewExistingInvoice, setViewExistingInvoice] = useState(false);
  function handleAddInvoiceClick() {
    setAddNewinvoice(true);
  }

  function handleViewInvoiceClick() {
    setViewExistingInvoice(true);
  }
  function handleCloseInvoice() {
    setViewExistingInvoice(false);
  }

  function handleCloseModal() {
    setAddNewinvoice(false);
  }

  //event handler to handle submission of invoice
  // eslint-disable-next-line @typescript-eslint/no-explicit-any


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* <!-- Header Section --> */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-700">Invoice Dashboard</h1>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700" onClick={handleAddInvoiceClick}>
          Add New Invoice
        </button>
        {addNewinvoice && <AddNewInvoicceForm closeModal={handleCloseModal} />}
      </div>
      <ToastContainer 
        position="top-right"          // Position of the toast
        autoClose={4000}              // Auto close after 5 seconds
        hideProgressBar={false}       // Show or hide the progress bar
        newestOnTop={false}           // Stack newest toasts on top
        closeOnClick                  // Close the toast when clicked                   // Pause timer on hover
        draggable                      // Allow dragging toasts to dismiss
      />

      {/* <!-- Overview Cards Section --> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* <!-- Total Invoices --> */}
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700">Total Invoices</h2>
          <p className="mt-4 text-2xl font-bold text-indigo-600">54</p>
        </div>
        {/* <!-- Paid Invoices --> */}
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700">Paid Invoices</h2>
          <p className="mt-4 text-2xl font-bold text-green-600">34</p>
        </div>
        {/* <!-- Pending Invoices --> */}
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700">Pending Invoices</h2>
          <p className="mt-4 text-2xl font-bold text-yellow-500">20</p>
        </div>
      </div>

      {/* <!-- Invoice Table Section --> */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Invoices</h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border-b py-2 text-left text-gray-700">Invoice #</th>
              <th className="border-b py-2 text-left text-gray-700">Client</th>
              <th className="border-b py-2 text-left text-gray-700">Date</th>
              <th className="border-b py-2 text-left text-gray-700">Status</th>
              <th className="border-b py-2 text-left text-gray-700">Amount</th>
              <th className="border-b py-2 text-left text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- Example Row 1 --> */}
            <tr>
              <td className="border-b py-2">#INV-001</td>
              <td className="border-b py-2">Client A</td>
              <td className="border-b py-2">2024-10-01</td>
              <td className="border-b py-2">
                <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                  Paid
                </span>
              </td>
              <td className="border-b py-2">$500.00</td>
              <td className="border-b py-2">
                <button className="text-blue-600 hover:underline">View</button>
              </td>
            </tr>
            {/* <!-- Example Row 2 --> */}
            <tr>
              <td className="border-b py-2">#INV-002</td>
              <td className="border-b py-2">Client B</td>
              <td className="border-b py-2">2024-10-02</td>
              <td className="border-b py-2">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">
                  Pending
                </span>
              </td>
              <td className="border-b py-2">$300.00</td>
              <td className="border-b py-2">
                <button className="text-blue-600 hover:underline" onClick={handleViewInvoiceClick}>View</button>
                {viewExistingInvoice && <ViewInvoiceModal closeModal={handleCloseInvoice} />}
              </td>
            </tr>
            {/* <!-- Example Row 3 --> */}
            <tr>
              <td className="border-b py-2">#INV-003</td>
              <td className="border-b py-2">Client C</td>
              <td className="border-b py-2">2024-10-03</td>
              <td className="border-b py-2">
                <span className="px-2 py-1 bg-red-100 text-red-600 rounded-full text-sm">
                  Overdue
                </span>
              </td>
              <td className="border-b py-2">$700.00</td>
              <td className="border-b py-2">
                <button className="text-blue-600 hover:underline">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* <!-- Add Invoice Section --> */}
      {/* <div className="bg-white rounded-lg shadow-lg p-6">
    <h2 className="text-xl font-bold mb-4">Add New Invoice</h2>
    <form className="space-y-4">
      <div>
        <label htmlFor="client" className="block text-sm font-medium text-gray-700">
          Client Name
        </label>
        <input
          type="text"
          id="client"
          name="client"
          className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter client name"
        />
      </div>
      <div>
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter amount"
        />
      </div>
      <div>
        <label htmlFor="status" className="block text-sm font-medium text-gray-700">
          Status
        </label>
        <select
          id="status"
          name="status"
          className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="paid">Paid</option>
          <option value="pending">Pending</option>
          <option value="overdue">Overdue</option>
        </select>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700"
      >
        Submit Invoice
      </button>
    </form>
  </div> */}
    </div>

  );
}

const AddNewInvoicceForm = ({ closeModal }: { closeModal: () => void }) => {


  async function newProductInvoice(e: any){
    const invoiceData = {
      invoiceName: e.target.invoiceName.value,
      clientName: e.target.clientName.value,
      invoiceDate: e.target.invoiceDate.value,
      status: e.target.status.value,
      product: e.target.product.value,
      amount: e.target.invoiceAmount.value,
      action: 'Add-invoice'
    }
    const res = await addFreshInvoice(invoiceData)
    if(res.status === 200){
      toast.success('Invoice Added Successfully')
    }
    else{
      toast.error('Something went wrong')
  }
}
function handleSubmit(e: any){
  newProductInvoice(e)
  e.preventDefault();
}
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md shadow-md w-96">
        <h2 className="text-xl text-gray-700 font-bold mb-4">Add New Invoice</h2>

        {/* Add New Invoice Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="invoiceName">
              Invoice Name
            </label>
            <input
              type="text"
              id="invoiceName"
              name="invoiceName"
              placeholder="Enter invoice name"
              className="w-full text-gray-700 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="clientName">
              Client Name
            </label>
            <input
              type="text"
              id="clientName"
              name="clientName"
              placeholder="Enter client name"
              className="w-full text-gray-700 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="invoiceDate">
              Invoice Date </label>
            <input type="date" id="invoiceDate" name="invoiceDate" className="w-full text-gray-700 px-4 py-2 border border-gray-300 rounded-md focus:outline-none" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="status">Status</label>
            <select id="status" className="w-full text-gray-700 px-4 py-2 border border-gray-300 rounded-md focus:outline-none" name="status">
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
              <option value="Overdue">Overdue</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="clientName">
              Product
            </label>
            <input
              type="product"
              id="product"
              name="product"
              placeholder="Enter product name"
              className="w-full text-gray-700 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="invoiceAmount">
              Amount
            </label>
            <input
              type="number"
              id="invoiceAmount"
              name="invoiceAmount"
              placeholder="Enter amount"
              className="w-full text-gray-700 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>

          {/* Other form fields can go here */}

          <div className="flex justify-end">
            <button
              type="button"
              className="px-4 py-2 bg-gray-500 text-white rounded-md mr-2"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

const ViewInvoiceModal = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md shadow-md w-full max-w-3xl h-auto relative">

        <h1 className="text-2xl font-bold mb-4 text-center">Invoice Details</h1>

        {/* Invoice Header */}
        <div className="flex justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold">Invoice #12345</h2>
            <p className="text-gray-600">Issued: October 8, 2024</p>
            <p className="text-gray-600">Due: October 22, 2024</p>
          </div>
          <div className="text-right">
            <h3 className="text-md font-bold">Company Name</h3>
            <p className="text-gray-600">123 Main St</p>
            <p className="text-gray-600">City, State, ZIP</p>
            <p className="text-gray-600">Email: company@example.com</p>
          </div>
        </div>

        {/* Billed To and Bill From */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <h4 className="text-md font-bold mb-2">Billed To:</h4>
            <p className="text-gray-700">John Doe</p>
            <p className="text-gray-600">456 Another St</p>
            <p className="text-gray-600">City, State, ZIP</p>
            <p className="text-gray-600">Email: johndoe@example.com</p>
          </div>
          <div>
            <h4 className="text-md font-bold mb-2">Bill From:</h4>
            <p className="text-gray-700">Company XYZ</p>
            <p className="text-gray-600">789 Corporate Rd</p>
            <p className="text-gray-600">City, State, ZIP</p>
            <p className="text-gray-600">Email: billing@companyxyz.com</p>
          </div>
        </div>

        {/* Invoice Items Table */}
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border">Item</th>
                <th className="px-4 py-2 border">Quantity</th>
                <th className="px-4 py-2 border">Price</th>
                <th className="px-4 py-2 border">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">Product 1</td>
                <td className="px-4 py-2 border">2</td>
                <td className="px-4 py-2 border">₹500</td>
                <td className="px-4 py-2 border">₹1000</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Service 1</td>
                <td className="px-4 py-2 border">1</td>
                <td className="px-4 py-2 border">₹2000</td>
                <td className="px-4 py-2 border">₹2000</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Invoice Total */}
        <div className="flex justify-end mt-4">
          <div className="text-right">
            <h4 className="text-md font-bold">Subtotal: ₹3000</h4>
            <h4 className="text-md font-bold">Tax (10%): ₹300</h4>
            <h2 className="text-xl font-bold mt-2">Total: ₹3300</h2>
          </div>
        </div>

        {/* Change Status Dropdown */}
        <div className="mt-4">
          <label className="block text-md font-bold mb-2">Change Status:</label>
          <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
            <option value="overdue">Overdue</option>
          </select>
        </div>

        {/* Footer Actions */}
        <div className="flex justify-between items-center mt-6">
          <div>
            <button className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
              Download PDF
            </button>
          </div>
          <div>
            <button
              type="button"
              className="px-4 py-2 bg-gray-500 text-white rounded-md mr-2"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Pay Now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}