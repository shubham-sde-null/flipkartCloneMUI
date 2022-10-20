import React from "react";
import { makeStyles } from "@mui/styles";
import StarIcon from "@mui/icons-material/Star";
const useStyle = makeStyles((theme) => ({
  productContainer: {
    // borderTop: "0.7px solid lightgrey",
    borderBottom: "0.7px solid lightgrey",
    width: "80vw",
    height: "300px",
    display: "flex",
    alignItems: "center",
    // border: "1px solid red",
    justifyContent: "space-between",
  },
  first: {
    // border: "1px solid orange",
    paddingLeft: "75px",
    height: "100%",
    width: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  second: {
    // border: "1px solid yellow",
    // paddingRight: "300px",
    marginRight: "100px",
  },
  third: {
    // border: "1px solid green",
    alignSelf: "flex-start",
    marginTop: "35px",
    marginRight: "200px",
    padding: "15px",
  },
}));
function Product({
  mobileName,
  rating,
  spec1,
  spec2,
  spec3,
  spec4,
  spec5,
  spec6,
  price,
  delivery,
  src,
  width,
  height,
}) {
  const classes = useStyle();
  return (
    <div className={classes.productContainer}>
      <div className={classes.first}>
        <img width={width} height={height} src={src} alt={`${mobileName}`} />
      </div>
      <div className={classes.second}>
        <h3>{mobileName}</h3>
        <span
          style={{
            backgroundColor: "#388e3c",
            display: "flex",
            alignItems: "center",
            width: "fit-content",
            color: "white",
            borderRadius: "5px",
            paddingTop: "2px",
            paddingBottom: "2px",
            paddingLeft: "5px",
            paddingRight: "5px",
          }}
        >
          {rating}
          <StarIcon fontSize="small" />
        </span>
        <br />
        <p>* {spec1}</p>
        <p>* {spec2}</p>
        <p>* {spec3}</p>
        <p>* {spec4}</p>
        <p>* {spec5}</p>
        <p>* {spec6}</p>
      </div>
      <div className={classes.third}>
        <h3>{price}</h3>
        <p style={{ fontSize: "13px" }}>{delivery}</p>
      </div>
    </div>
  );
}

export default Product;
