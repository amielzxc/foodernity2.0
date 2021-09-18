import { Button, Chip, Typography, withStyles } from "@material-ui/core";
import { DataGrid } from "@mui/x-data-grid";
function InventoryTable() {
  return (
    <div style={{ height: 600, width: "100%" }}>
      <StyledDataGrid
        rows={data}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[5]}
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
    field: "category",
    headerName: "Category",
    width: 170,
    renderCell: (params) => {
      return (
        // <Chip label={params.row.category} style={{ margin: '0 auto' }} />
        <StyledChip label={params.row.category} />
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
    type: "date",
  },
  {
    field: "expiryDate",
    headerName: "Expiry",
    width: 160,
    type: "date",
  },
  {
    field: "daysLeft",
    headerName: "Before Expiry",
    width: 170,
    type: "number",
    renderCell: (params) => {
      return (
        <StyledTypography daysLeft={params.row.daysLeft} />
        // <Typography style={{ color: 'red', textAlign: 'center' }}>
        //    {params.row.daysLeft} days left
        // </Typography>
      );
    },
  },
  {
    field: "",
    headerName: "Action",
    width: 200,
    disableClickEventBubbling: true,
    sortable: false,
    renderCell: (params) => {
      const onClick = () => {
        console.log(params.row.donationID);
        return prompt(
          `Enter the recipient of the donation of the donor ${params.row.donorName}.`,
          ""
        );
      };
      return (
        <Button variant="contained" color="primary" onClick={onClick}>
          Mark as Donated
        </Button>
      );
    },
  },
];

const data = [
  {
    id: 1,
    donationID: 1,
    imgLoc:
      "https://cdn.shopify.com/s/files/1/0024/9695/4415/products/CABBAGE_1024x1024.jpg?v=1587065235",
    donationName: "Repolyo",
    donorName: "Johnny Geis",
    category: "Vegetables",
    quantity: 8,
    dateClaimed: "06/25/2021",
    expiryDate: "07/02/2021",
    daysLeft: 7,
  },
  {
    id: 2,
    donationID: 2,
    imgLoc: "https://cf.shopee.com.my/file/9e0aec8c671eaaa75d039ddad2efce47",
    donationName: "Argentina Corned Beef",
    donorName: "Lee Weber",
    category: "Canned Goods",
    quantity: 7,
    dateClaimed: "06/20/2021",
    expiryDate: "07/31/2021",
    daysLeft: 41,
  },
  {
    id: 3,
    donationID: 3,
    imgLoc:
      "https://cdn.shopify.com/s/files/1/0024/9695/4415/products/tomato_retail_480x.png?v=1525676368",
    donationName: "Kamatis",
    donorName: "Sidney Carr",
    category: "Vegetables",
    quantity: 20,
    dateClaimed: "06/29/2021",
    expiryDate: "07/09/2021",
    daysLeft: 10,
  },
  {
    id: 4,
    donationID: 4,
    imgLoc:
      "https://cdn.shopify.com/s/files/1/0024/9695/4415/products/red_onion_retail_480x.png?v=1525675399",
    donationName: "Sibuyas",
    donorName: "Felicia Presley",
    category: "Vegetables",
    quantity: 10,
    dateClaimed: "07/01/2021",
    expiryDate: "07/15/2021",
    daysLeft: 14,
  },
  {
    id: 5,
    donationID: 5,
    imgLoc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnLiLiAZ_0aokfrDKkn8B6OvZquAzW7mzFZg&usqp=CAU",
    donationName: "Ligo sardines",
    donorName: "Pat Lyons",
    category: "Canned Goods",
    quantity: 8,
    dateClaimed: "06/25/2021",
    expiryDate: "09/15/2021",
    daysLeft: 82,
  },
  {
    id: 6,
    donationID: 6,
    imgLoc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCeQtmIuJmPX7re-gEkuW0uFQ7BNn6RVagg&usqp=CAU",
    donationName: "555 sardines",
    donorName: "Elise Perry",
    category: "Canned Goods",
    quantity: 13,
    dateClaimed: "06/30/2021",
    expiryDate: "08/15/2021",
    daysLeft: 46,
  },
  {
    id: 7,
    donationID: 7,
    imgLoc:
      "https://cdn.shopify.com/s/files/1/0024/9695/4415/products/eggplant_retail_720x.png?v=1587818753",
    donationName: "Eggplant",
    donorName: "Harvey Moreno",
    category: "Vegetables",
    quantity: 5,
    dateClaimed: "06/29/2021",
    expiryDate: "07/09/2021",
    daysLeft: 10,
  },
  {
    id: 8,
    donationID: 8,
    imgLoc:
      "https://cdn.shopify.com/s/files/1/0024/9695/4415/products/IMG_4293_480x.jpg?v=1575871682",
    donationName: "Carrots",
    donorName: "Aiken Burgess",
    category: "Vegetables",
    quantity: 15,
    dateClaimed: "06/28/2021",
    expiryDate: "07/15/2021",
    daysLeft: 17,
  },
  {
    id: 9,
    donationID: 9,
    imgLoc: "https://c1.staticflickr.com/5/4158/33593402264_bedafb79d1_c.jpg",
    donationName: "Pancit Canton Noodles",
    donorName: "Fhillip Bagsic",
    quantity: 7,
    category: "Instant Noodles",
    dateClaimed: "06/21/2021",
    expiryDate: "10/05/2021",
    daysLeft: 97,
  },
  {
    id: 10,
    donationID: 10,
    imgLoc: "https://cf.shopee.com.my/file/9e0aec8c671eaaa75d039ddad2efce47",
    donationName: "Argentina Corned Beef",
    donorName: "Amiel Morilla",
    quantity: 7,
    category: "Canned Goods",
    dateClaimed: "07/01/2021",
    expiryDate: "09/03/2021",
    daysLeft: 62,
  },
  {
    id: 11,
    donationID: 11,
    imgLoc: "https://cf.shopee.com.my/file/71ee574d1013a3715f71a25244c8715c",
    donationName: "Lucky Me Chicken",
    donorName: "Kenneth Dela Cruz",
    quantity: 9,
    category: "Instant Noodles",
    dateClaimed: "06/20/2021",
    expiryDate: "09/10/2021",
    daysLeft: 50,
  },
  {
    id: 12,
    donationID: 12,
    imgLoc: "https://cf.shopee.ph/file/b6fe5dbf2a4ff8d77959296a3574d630_tn",
    donationName: "Sky Flakes",
    donorName: "Carl Patio",
    quantity: 15,
    category: "Biscuits & Snacks",
    expiryDate: "09/15/2021",
    dateClaimed: "06/23/2021",
    daysLeft: 84,
  },
  // {
  //    id:10,
  //    donationID:,
  //    imgLoc:,
  //    donationName:,
  //    donorName:,
  //    quantity,
  //    category:,
  //    dateClaimed:,
  //    expiryDate:,
  //    daysLeft:,
  // }
];

function StyledChip(props) {
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
        color: "white",
      }}
    />
  );
}

function StyledTypography(props) {
  const { daysLeft } = props;
  let color;

  if (daysLeft < 8) {
    color = "red";
  } else if (daysLeft < 15) {
    color = "orange";
  } else {
    color = "green";
  }

  return <Typography style={{ color: color }}>{daysLeft} days left</Typography>;
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
