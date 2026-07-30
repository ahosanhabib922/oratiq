import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  { id: "INV-001", plan: "Ultimate Workout", status: "Paid", amount: "$20.00" },
  { id: "INV-002", plan: "Premium Workout", status: "Pending", amount: "$20.00" },
  { id: "INV-003", plan: "Hybrid Athlete", status: "Paid", amount: "$35.00" },
];

export default function TableDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Plan</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-end">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell>{invoice.plan}</TableCell>
            <TableCell>
              <Badge
                variant={invoice.status === "Paid" ? "success" : "warning"}
                size="sm"
              >
                {invoice.status}
              </Badge>
            </TableCell>
            <TableCell numeric>{invoice.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
