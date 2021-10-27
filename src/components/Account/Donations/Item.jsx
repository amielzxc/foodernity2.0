import { Box, makeStyles, Typography } from "@material-ui/core";
import { LocationOnRounded } from "@material-ui/icons";

function Item({ status }) {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      borderRadius={5}
      boxShadow={1}
      bgcolor="white"
      p={1.5}
      overflow="hidden"
    >
      <img
        src="https://c1.staticflickr.com/5/4158/33593402264_bedafb79d1_c.jpg"
        alt="donation"
        style={{
          width: "30%",
          height: "100%",
          borderRadius: "5px",
        }}
      />
      <Box flex="1" pl={1} width={100}>
        <Typography className={classes.text_bold} noWrap>
          Pancit Canton Noodles
        </Typography>
        <GetStatusLabel status={status} />
      </Box>
    </Box>
  );
}

export default Item;

function GetStatusLabel({ status }) {
  if (status === "Accepted" || status === "Available") return <AcceptedLabel />;
  else if (status === "Claimed") return <ClaimedLabel />;
  else return <DonatedLabel />;
}

function AcceptedLabel() {
  return (
    <>
      <Box display="flex" alignItems="center" overflow="hidden">
        <LocationOnRounded style={{ color: "red" }} />
        <Typography
          variant="body2"
          noWrap
          style={{
            overflow: "hidden",
            fontWeight: "500",
            color: "#2196F3",
          }}
        >
          National University-Manila, M.F. Jhocson Street, Sampaloc, Manila,
          Metro Manila
        </Typography>
      </Box>
      <Typography variant="body2" style={{ fontWeight: "200" }} noWrap>
        Deliver on <span style={{ fontWeight: "500" }}>07/01/2021</span>
      </Typography>
      <Typography variant="body2" style={{ fontWeight: "200" }}>
        Quantity: <span style={{ fontWeight: "500" }}>10 piece/s</span>
      </Typography>
    </>
  );
}
function ClaimedLabel() {
  return (
    <>
      <Typography variant="body2" style={{ fontWeight: "200" }}>
        Donation claimed on 07/01/2021
      </Typography>
      <Typography variant="body2" style={{ fontWeight: "200" }}>
        Status:{" "}
        <span style={{ fontWeight: "500" }}>currently in the inventory</span>
      </Typography>
    </>
  );
}

function DonatedLabel() {
  return (
    <>
      <Typography variant="body2" style={{ fontWeight: "200" }}>
        Your donation has been donated to{" "}
        <span style={{ fontWeight: "500" }}>Bantay Bata</span>!
      </Typography>
      <Typography variant="body2" style={{ fontWeight: "200" }}>
        Donated on <span style={{ fontWeight: "500" }}>07/03/2021</span>
      </Typography>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  text_bold: {
    fontWeight: "bold",
  },
}));
/*
{
      donationID: '1',
      donorName: 'Fhillip Bagsic',
      imgLoc: 'https://c1.staticflickr.com/5/4158/33593402264_bedafb79d1_c.jpg',
      donationName: 'Pancit Canton Noodles',
      quantity: 7,
      category: 'Instant Noodles',
      expiryDate: '10/05/2021',
      method: 'Pickup',
      pickupLocation:
         'National University-Manila, M.F. Jhocson Street, Sampaloc, Manila, Metro Manila',
      date: '07/01/2021',
      status: 'Accepted',
      dateClaimed: 'July 01, 2021',
      recipient: '',
   },
*/
