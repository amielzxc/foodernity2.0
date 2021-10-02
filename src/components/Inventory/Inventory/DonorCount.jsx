import {
  Typography,
  makeStyles,
  Card,
  CardHeader,
  Avatar,
  CardMedia,
} from "@material-ui/core";

function DonorCount() {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h6" className={classes.text}>
        Recent Donations from Donors
      </Typography>
      <div className={classes.container} data-testid="recentdonations">
        {donorData.map((donor, index) => (
          <RecentDonor
            key={index}
            donorName={donor.donorName}
            avatar={donor.avatar}
            imgLoc={donor.imgLoc}
            quantity={donor.quantity}
            recipient={donor.recipient}
          />
        ))}
      </div>
    </>
  );
}

function RecentDonor({ donorName, avatar, imgLoc, quantity, recipient }) {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={avatar} />}
        title={donorName}
        titleTypographyProps={{ variant: "body2" }}
        subheaderTypographyProps={{ variant: "caption" }}
        subheader={`donated ${quantity} pieces to ${recipient}`}
      />

      <CardMedia
        style={{
          backgroundSize: "cover",
          objectFit: "contain",
          height: "200px",
          // paddingTop: '56.25%', // 16:9
        }}
        image={imgLoc}
        title="donation"
      />
    </Card>
  );
}

const useStyles = makeStyles(() => ({
  text: {
    fontWeight: "bold",
    margin: "2rem 0",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "1rem",
  },
}));

export default DonorCount;

const donorData = [
  {
    avatar:
      "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg",
    donorName: "Johnny G.",
    imgLoc:
      "https://cdn.shopify.com/s/files/1/0024/9695/4415/products/CABBAGE_1024x1024.jpg?v=1587065235",
    quantity: 15,
    recipient: "Bantay Bata",
  },
  {
    avatar: "http://i.imgur.com/vqESNGp.jpg",
    donorName: "Lee W.",
    imgLoc: "https://cf.shopee.com.my/file/9e0aec8c671eaaa75d039ddad2efce47",
    quantity: 20,
    recipient: "Barangay 143",
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1VvqwlDjUJ6i1fiQpWJgvnEPFjdksQEde-KEjCx66skt39oib1QtroMgS8W-_Ihu8P6Q&usqp=CAU",
    donorName: "Sidney C.",
    imgLoc:
      "https://cdn.shopify.com/s/files/1/0024/9695/4415/products/tomato_retail_480x.png?v=1525676368",
    quantity: 20,
    recipient: "Balic-Balic Residents",
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlm1gqS5r6ERBNDeXV2gS2R95fqL1vA37PgLF1mSoqP4bucWTc8K0GDqus_mRIxNUJoO0&usqp=CAU",
    donorName: "Felicia P.",
    imgLoc:
      "https://cdn.shopify.com/s/files/1/0024/9695/4415/products/red_onion_retail_480x.png?v=1525675399",
    quantity: 10,
    recipient: "Binondo Residents",
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb1lcgfNqNDEWh8LDCKaXIraxgEE7XihuhH4IR2q0AE92JoF0_-z8qihjZ5Z5wFkX96zI&usqp=CAU",
    donorName: "Pat L.",
    imgLoc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnLiLiAZ_0aokfrDKkn8B6OvZquAzW7mzFZg&usqp=CAU",
    quantity: 8,
    recipient: "Barangay 287",
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXs_iIewEiaZ3tXb6n6VgaUIONS0B0HjwsqcvA3-EnnaNm0BwX216u2dZl2QTHnP7VOIU&usqp=CAU",
    donorName: "Elise P.",
    imgLoc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCeQtmIuJmPX7re-gEkuW0uFQ7BNn6RVagg&usqp=CAU",
    quantity: 13,
  },
  {
    avatar: "http://i.imgur.com/RP1Z4WT.jpg",
    donorName: "Harvey M.",
    imgLoc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCeQtmIuJmPX7re-gEkuW0uFQ7BNn6RVagg&usqp=CAU",
    quantity: 13,
    recipient: "Barangay 659-A",
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLK66w-Z84L5WB4MiLdk53RmPDmUEBxuL_IrdscmvPG4Sl1RPuKMxstlzZ77hmKQ147R4&usqp=CAU",
    donorName: "Aiken B.",
    imgLoc:
      "https://cdn.shopify.com/s/files/1/0024/9695/4415/products/eggplant_retail_720x.png?v=1587818753",
    quantity: 5,
    recipient: "Barangay 707",
  },
  {
    avatar:
      "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg",
    donorName: "Johnny G.",
    imgLoc:
      "https://cdn.shopify.com/s/files/1/0024/9695/4415/products/CABBAGE_1024x1024.jpg?v=1587065235",
    quantity: 15,
  },
  {
    avatar: "http://i.imgur.com/vqESNGp.jpg",
    donorName: "Lee W.",
    imgLoc: "https://cf.shopee.com.my/file/9e0aec8c671eaaa75d039ddad2efce47",
    quantity: 20,
    recipient: "Barangay 664-A",
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1VvqwlDjUJ6i1fiQpWJgvnEPFjdksQEde-KEjCx66skt39oib1QtroMgS8W-_Ihu8P6Q&usqp=CAU",
    donorName: "Sidney C.",
    imgLoc:
      "https://cdn.shopify.com/s/files/1/0024/9695/4415/products/tomato_retail_480x.png?v=1525676368",
    quantity: 20,
    recipient: " Barangay 451",
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlm1gqS5r6ERBNDeXV2gS2R95fqL1vA37PgLF1mSoqP4bucWTc8K0GDqus_mRIxNUJoO0&usqp=CAU",
    donorName: "Felicia P.",
    imgLoc:
      "https://cdn.shopify.com/s/files/1/0024/9695/4415/products/red_onion_retail_480x.png?v=1525675399",
    quantity: 10,
    recipient: "Barangay 161",
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb1lcgfNqNDEWh8LDCKaXIraxgEE7XihuhH4IR2q0AE92JoF0_-z8qihjZ5Z5wFkX96zI&usqp=CAU",
    donorName: "Pat L.",
    imgLoc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnLiLiAZ_0aokfrDKkn8B6OvZquAzW7mzFZg&usqp=CAU",
    quantity: 8,
    recipient: "Bantay Bata",
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXs_iIewEiaZ3tXb6n6VgaUIONS0B0HjwsqcvA3-EnnaNm0BwX216u2dZl2QTHnP7VOIU&usqp=CAU",
    donorName: "Elise P.",
    imgLoc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCeQtmIuJmPX7re-gEkuW0uFQ7BNn6RVagg&usqp=CAU",
    quantity: 13,
    recipient: "Holy Trinity Parish",
  },
  {
    avatar: "http://i.imgur.com/RP1Z4WT.jpg",
    donorName: "Harvey M.",
    imgLoc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCeQtmIuJmPX7re-gEkuW0uFQ7BNn6RVagg&usqp=CAU",
    quantity: 13,
    recipient: "Barangay 713",
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLK66w-Z84L5WB4MiLdk53RmPDmUEBxuL_IrdscmvPG4Sl1RPuKMxstlzZ77hmKQ147R4&usqp=CAU",
    donorName: "Aiken B.",
    imgLoc:
      "https://cdn.shopify.com/s/files/1/0024/9695/4415/products/eggplant_retail_720x.png?v=1587818753",
    quantity: 5,
    recipient: "Barangay 216-A",
  },
  {
    avatar: "http://i.imgur.com/RP1Z4WT.jpg",
    donorName: "Harvey M.",
    imgLoc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCeQtmIuJmPX7re-gEkuW0uFQ7BNn6RVagg&usqp=CAU",
    quantity: 13,
    recipient: "Barangay 416",
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLK66w-Z84L5WB4MiLdk53RmPDmUEBxuL_IrdscmvPG4Sl1RPuKMxstlzZ77hmKQ147R4&usqp=CAU",
    donorName: "Aiken B.",
    imgLoc:
      "https://cdn.shopify.com/s/files/1/0024/9695/4415/products/eggplant_retail_720x.png?v=1587818753",
    quantity: 5,
    recipient: "Bantay Bata",
  },
];
