import { Chip, withStyles } from "@material-ui/core";
import { DataGrid } from "@mui/x-data-grid";

function RecordsTable() {
  return (
    <div style={{ height: 600, width: "100%" }}>
      <StyledDataGrid
        // autoPageSize
        rows={data}
        columns={column}
        pagination={10}
        checkboxSelection={false}
      />
    </div>
  );
}

export default RecordsTable;

const column = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
    type: "number",
  },
  {
    field: "imgLoc",
    headerName: "Image",
    sortable: false,
    width: 100,
    // disableClickEventBubbling: true,

    renderCell: (params) => {
      return (
        <img
          src={params.row.imgLoc}
          alt="donation"
          style={{ width: "50px", height: "50px", margin: "10px" }}
        />
      );
    },
  },
  {
    field: "donationName",
    headerName: "Donation",
    width: 170,
  },
  {
    field: "donorName",
    headerName: "Donor",
    width: 170,
  },
  {
    field: "recipient",
    headerName: "Recipient",
    width: 160,
  },
  {
    field: "category",
    headerName: "Category",
    width: 170,
    renderCell: (params) => {
      return (
        // <Chip label={params.row.category} style={{ margin: '0 auto' }} />
        <Category label={params.row.category} />
      );
    },
  },
  {
    field: "quantity",
    headerName: "Qty.",
    width: 105,
    type: "number",
  },
  {
    field: "dateClaimed",
    headerName: "Claimed on",
    width: 160,
  },
  {
    field: "dateDonated",
    headerName: "Donated on",
    width: 160,
  },
];

function Category(props) {
  const colorArray = [
    {
      category: "Canned Goods",
      color: "#EF5350",
    },
    {
      category: "Instant Noodles",
      color: "#FBC02D",
    },
    {
      category: "Vegetables",
      color: "#66BB6A",
    },
    {
      category: "Eggs",
      color: "#E0E0E0",
    },
    {
      category: "Uncooked Rice",
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
      category: "Biscuits & Snacks",
      color: "#BA68C8",
    },
    {
      category: "Beverages",
      color: "#42A5F5",
    },
    {
      category: "Others",
      color: "#90A4AE",
    },
  ];

  const color = colorArray.filter((e) => e.category === props.label);

  return (
    <Chip
      label={props.label}
      style={{
        margin: "0",
        backgroundColor: color[0].color,
        color: props.label === "Eggs" ? "black" : "white",
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
    // '& .MuiDataGrid-columnHeaderTitleContainer': {
    //    display: 'flex',
    //    justifyContent: 'center',
    // },
    "& .MuiDataGrid-columnHeaderTitle": {
      fontWeight: "bold",
      textAlign: "center",
    },
  },
})(DataGrid);

const data = [
  {
    id: 1,
    imgLoc: "https://c1.staticflickr.com/5/4158/33593402264_bedafb79d1_c.jpg",
    donationName: "Pancit Canton Noodles",
    donorName: "Fhillip Bagsic",
    category: "Instant Noodles",
    quantity: 7,
    expiryDate: "10/05/2021",

    location:
      "National University-Manila, M.F. Jhocson Street, Sampaloc, Manila, Metro Manila",
    pickupDate: "October 10, 2021",
    dateClaimed: "06/15/2021",
    recipient: "Bantay Bata",
    dateDonated: "06/17/2021",
  },
];
