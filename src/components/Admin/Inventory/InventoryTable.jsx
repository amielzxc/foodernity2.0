import { Chip, Typography, withStyles } from "@material-ui/core";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
function InventoryTable() {
  const inventory = useSelector((state) => state.inventory.value);

  return (
    <div style={{ height: 600, width: "100%" }}>
      <StyledDataGrid
        rows={inventory.map((row, index) => {
          const { ...rest } = row;
          return { id: index, ...rest };
        })}
        columns={columns}
        pagination={10}
      />
    </div>
  );
}

export default InventoryTable;

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
    type: "number",
  },
  {
    field: "categories",
    headerName: "Product Name",
    width: 250,
    renderCell: (params) => {
      return <StyledChip label={params.row.categories} />;
    },
  },
  {
    field: "receivedDonations",
    headerName: "Received",
    width: 200,
    type: "number",
    renderCell: (params) => {
      return <Typography>{params.row.receivedDonations} pcs</Typography>;
    },
  },
  {
    field: "donatedDonations",
    headerName: "Donated",
    width: 200,
    type: "number",
    renderCell: (params) => {
      return <Typography>{params.row.donatedDonations} pcs</Typography>;
    },
  },
  {
    field: "stocks",
    headerName: "Balance",
    width: 200,
    type: "number",
    renderCell: (params) => {
      return (
        <Typography style={{ color: params.row.stocks < 30 ? "red" : "green" }}>
          {params.row.stocks} pcs left
        </Typography>
      );
    },
  },
];

function StyledChip(props) {
  const colorArray = [
    {
      category: "Canned goods",
      color: "#EF5350",
    },
    {
      category: "Instant Noodles",
      color: "#FBC02D",
    },
    {
      category: "Tea/Coffee/Milk/Sugar",
      color: "#66BB6A",
    },
    {
      category: "Eggs",
      color: "#E0E0E0",
    },
    {
      category: "Rice",
      color: "#F5F5F5",
    },
    {
      category: "Bread & Pastry",
      color: "#8D6E63",
    },
    {
      category: "Fruits",
      color: "#FFA726",
    },
    {
      category: "Condiments and sauces",
      color: "#BA68C8",
    },
    {
      category: "Beverages",
      color: "#42A5F5",
    },
    {
      category: "Snacks",
      color: "#90A4AE",
    },
    {
      category: "Biscuits",
      color: "black",
    },
    {
      category: "Cereals",
      color: "black",
    },
  ];
  const color = colorArray.filter((e) => e.category === props.label);

  return (
    <Chip
      label={props.label}
      style={{
        margin: "0",
        backgroundColor: color[0].color,
        color: "white",
      }}
    />
  );
}

const StyledDataGrid = withStyles({
  root: {
    "& .MuiDataGrid-renderingZone": {
      maxHeight: "none !important",
    },
    "& .MuiDataGrid-cell": {
      lineHeight: "unset !important",
      maxHeight: "none !important",
      whiteSpace: "normal",
      justifyContent: "flex-start",
      alignItems: "center",
      display: "flex",
    },
    "& .MuiDataGrid-row": {
      maxHeight: "none !important",
    },
    "& .MuiDataGrid-columnHeaderTitle": {
      fontWeight: "bold",
      textAlign: "center",
    },
  },
})(DataGrid);
