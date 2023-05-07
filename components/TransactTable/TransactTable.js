import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "sender", headerName: "Sender", width: 360 },
  { field: "amount", headerName: "Amount", width: 90 },
  { field: "date", headerName: "Date", width: 100 },
  {
    field: "blockNumber",
    headerName: "Block number",
    type: "number",
    width: 130,
  },
];

export function TransactTable({ rows }) {
  return (
    <div style={{ height: 370, maxWidth: 700, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 25]}
      />
    </div>
  );
}

export default TransactTable;
