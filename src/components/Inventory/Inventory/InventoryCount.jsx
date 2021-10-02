import { makeStyles, Box, Typography } from "@material-ui/core";
import cannedfood from "../../../assets/Inventory/cannedfood.png";
import noodles from "../../../assets/Inventory/noodles.png";
import vegetables from "../../../assets/Inventory/vegetables.png";
import eggs from "../../../assets/Inventory/eggs.png";
import rice from "../../../assets/Inventory/rice.png";
import bread from "../../../assets/Inventory/bread.png";
import fruits from "../../../assets/Inventory/fruits.png";
import snack from "../../../assets/Inventory/snack.png";
import beverage from "../../../assets/Inventory/beverage.png";
import other from "../../../assets/Inventory/other.png";
const categories = [
  {
    image: cannedfood,
    label: "Canned Goods",
    count: 40,
  },
  {
    image: noodles,
    label: "Instant Noodles",
    count: 38,
  },
  {
    image: vegetables,
    label: "Vegetables",
    count: 31,
  },
  {
    image: eggs,
    label: "Eggs",
    count: 51,
  },
  {
    image: rice,
    label: "Uncooked Rice",
    count: 20,
  },
  {
    image: bread,
    label: "Bread & Pastry",
    count: 21,
  },
  {
    image: fruits,
    label: "Fruits",
    count: 10,
  },
  {
    image: snack,
    label: "Biscuits & Snacks",
    count: 51,
  },
  {
    image: beverage,
    label: "Beverages",
    count: 20,
  },
  {
    image: other,
    label: "Others",
    count: 15,
  },
];

function InventoryCount() {
  const classes = useStyles();
  return (
    <div className={classes.container} data-testid="inventory">
      {categories
        .sort((a, b) => b.count - a.count)
        .map((category, index) => (
          <Stocks
            key={index}
            image={category.image}
            label={category.label}
            count={category.count}
          />
        ))}
    </div>
  );
}

export default InventoryCount;

function Stocks({ image, label, count }) {
  return (
    <Box bgcolor="white" borderRadius={10} boxShadow={1} p={2} display="flex">
      <img
        src={image}
        style={{
          width: "100px",
          height: "100%",
          marginRight: "1rem",
          // backgroundColor: color,
          padding: "1rem",
          borderRadius: "10px",
        }}
        alt="donation"
      />
      <Box display="flex" flexDirection="column" flex="1">
        <Typography variant="h6">{label}</Typography>
        <Typography
          variant="h4"
          style={{ fontWeight: "bold", marginTop: ".5rem" }}
        >
          {count}
        </Typography>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "2rem 0",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(300px, 1fr))",
    gap: "1rem",
  },
}));
