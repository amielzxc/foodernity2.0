import { Button, Chip, Typography, withStyles } from "@material-ui/core";
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

        //rowsPerPageOptions={[5]}
        // checkboxSelection
        // disableSelectionOnClick
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
  // {
  //   field: "id",
  //   headerName: "ID",
  //   width: 100,
  //   type: "number",
  // },
  // {
  //   field: "imgLoc",
  //   headerName: "Image",
  //   sortable: false,
  //   width: 100,
  //   // disableClickEventBubbling: true,

  //   renderCell: (params) => {
  //     return (
  //       <img
  //         src={params.row.imgLoc}
  //         alt="donation"
  //         style={{ width: "50px", height: "50px", margin: "10px" }}
  //       />
  //     );
  //   },
  // },
  // {
  //   field: "donationName",
  //   headerName: "Donation",
  //   width: 170,
  // },
  // {
  //   field: "donorName",
  //   headerName: "Donor",
  //   width: 170,
  // },
  // {
  //   field: "category",
  //   headerName: "Category",
  //   width: 170,
  //   renderCell: (params) => {
  //     return (
  //       // <Chip label={params.row.category} style={{ margin: '0 auto' }} />
  //       <StyledChip label={params.row.category} />
  //     );
  //   },
  // },
  // {
  //   field: "quantity",
  //   headerName: "Qty.",
  //   width: 105,
  //   type: "number",
  // },
  // {
  //   field: "dateClaimed",
  //   headerName: "Claimed on",
  //   width: 160,
  //   type: "date",
  // },
  // {
  //   field: "expiryDate",
  //   headerName: "Expiry",
  //   width: 160,
  //   type: "date",
  // },
  // {
  //   field: "daysLeft",
  //   headerName: "Before Expiry",
  //   width: 170,
  //   type: "number",
  //   renderCell: (params) => {
  //     return (
  //       <StyledTypography daysLeft={params.row.daysLeft} />
  //       // <Typography style={{ color: 'red', textAlign: 'center' }}>
  //       //    {params.row.daysLeft} days left
  //       // </Typography>
  //     );
  //   },
  // },
  // {
  //   field: "",
  //   headerName: "Action",
  //   width: 200,
  //   disableClickEventBubbling: true,
  //   sortable: false,
  //   renderCell: (params) => {
  //     const onClick = () => {
  //       console.log(params.row.donationID);
  //       return prompt(
  //         `Enter the recipient of the donation of the donor ${params.row.donorName}.`,
  //         ""
  //       );
  //     };
  //     return (
  //       <Button variant="contained" color="primary" onClick={onClick}>
  //         Mark as Donated
  //       </Button>
  //     );
  //   },
  // },
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

// function StyledTypography(props) {
//   const { daysLeft } = props;
//   let color;

//   if (daysLeft < 8) {
//     color = "red";
//   } else if (daysLeft < 15) {
//     color = "orange";
//   } else {
//     color = "green";
//   }

//   return <Typography style={{ color: color }}>{daysLeft} days left</Typography>;
// }

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
