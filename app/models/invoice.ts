import { Schema, model, models } from "mongoose";

const InvoiceSchema = new Schema(
  {
    // name: {
    //   type: String,
    //   required: [true, 'Please provide a name'],
    // },
    invoiceName: {
      type: String,
      required: [true, "Please provide an invoice name"],
      unique: true,
    },
    clientName: {
      type: String,
      required: [true, "Please provide a client name"],
    },
    invoiceDate: {
      type: Date,
      required: [true, "Please provide an invoice date"],
    },
    status: {
      type: String,
      required: [true, "Please provide an invoice status"],
    },
    product: {
      type: String,
      required: [true, "Please provide a product"],
    },
    amount: {
      type: Number,
      required: [true, "Please provide an amount"],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt timestamps
  }
);

// Check if the model exists to avoid overwriting in development
const Invoice = models.Invoice || model("Invoice", InvoiceSchema);

export default Invoice;
