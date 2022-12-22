import React from "react";
import { makeStyles } from "@mui/styles";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectedProduct } from "../redux/action";
import { useTheme, useMediaQuery, Typography } from "@mui/material";
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
  productContainerSmall: {
    // borderTop: "0.7px solid lightgrey",
    // borderBottom: "0.7px solid lightgrey",
    border: "2px solid orenage",
    width: "100vw",
    height: "300px",
    display: "flex",
    // flexDirection: "column",
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
  //for small screen
  productSmall: {
    // borderTop: "0.7px solid lightgrey",
    borderBottom: "0.7px solid lightgrey",
    width: "100%",
    // height: "300px",
    height: "fit-content",
    padding: "40px 0px",
    display: "flex",
    alignItems: "center",
    // border: "1px solid red",
    // justifyContent: "space-between",
  },
  firstSmall: {
    // paddingLeft: "75px",
    height: "100%",
    // width: "200px",
    padding: "0px 15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // border: "2px solid red",
    width: "30%",
  },
  secondSmall: {
    width: "65%",
    // border: "2px solid green",
    marginLeft: "auto",
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
  id,
}) {
  const dispatch = useDispatch();
  const classes = useStyle();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {isMatch ? (
        <div className={classes.productSmall}>
          <div className={classes.firstSmall}>
            <img width="auto" height="110px" src={src} alt={`${mobileName}`} />
          </div>
          <div className={classes.secondSmall}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/mobiles/${mobileName}`}
              onClick={() => {
                dispatch(selectedProduct(mobileName));
              }}
            >
              <p style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
                {mobileName}
              </p>
            </Link>

            <span
              style={{
                backgroundColor: "#388e3c",
                display: "flex",
                alignItems: "center",
                width: "fit-content",
                color: "white",
                borderRadius: "5px",
                // paddingTop: "2px",
                // paddingBottom: "2px",
                paddingLeft: "5px",
                paddingRight: "5px",
                // paddingTop: "3px",
                // paddingBottom: "3px",
                marginTop: "7px",
                marginBottom: "7px",
                fontSize: "0.8rem",
                gap: "0.2rem",
              }}
            >
              {rating}
              <StarIcon sx={{ fontSize: "1rem" }} />
            </span>
            <Typography
              variant="body"
              sx={{ fontSize: "1rem", color: "black", fontWeight: "500" }}
            >
              ₹
              {price.toString().length === 4
                ? `${price.toString()[0]},${price.toString()[1]}${
                    price.toString()[2]
                  }${price.toString()[3]}`
                : price.toString().length === 5
                ? `${price.toString()[0]}${price.toString()[1]},${
                    price.toString()[2]
                  }${price.toString()[3]}${price.toString()[4]}`
                : price.toString().length === 6
                ? `${price.toString()[0]},${price.toString()[1]}${
                    price.toString()[2]
                  },${price.toString()[3]}${price.toString()[4]}${
                    price.toString()[5]
                  }`
                : ``}
              {/* {price} */}
            </Typography>
            <br />
            <Typography
              variant="body"
              sx={{ fontSize: "0.8rem", color: "black", fontWeight: "500" }}
            >
              {delivery}
            </Typography>
            {/* <br /> */}
            <p style={{ display: isMatch ? "none" : "" }}>* {spec1}</p>
            <p style={{ display: isMatch ? "none" : "" }}>* {spec2}</p>
            <p style={{ display: isMatch ? "none" : "" }}>* {spec3}</p>
            <p style={{ display: isMatch ? "none" : "" }}>* {spec4}</p>
            <p style={{ display: isMatch ? "none" : "" }}>* {spec5}</p>
            <p style={{ display: isMatch ? "none" : "" }}>* {spec6}</p>
          </div>
        </div>
      ) : (
        <div className={classes.productContainer}>
          <div className={classes.first}>
            <img
              width={width}
              height={height}
              src={src}
              alt={`${mobileName}`}
            />
          </div>
          <div className={classes.second}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/mobiles/${mobileName}`}
              onClick={() => {
                dispatch(selectedProduct(mobileName));
              }}
            >
              <h3>{mobileName}</h3>
            </Link>

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
            <h3>
              ₹
              {price.toString().length === 4
                ? `${price.toString()[0]},${price.toString()[1]}${
                    price.toString()[2]
                  }${price.toString()[3]}`
                : price.toString().length === 5
                ? `${price.toString()[0]}${price.toString()[1]},${
                    price.toString()[2]
                  }${price.toString()[3]}${price.toString()[4]}`
                : price.toString().length === 6
                ? `${price.toString()[0]},${price.toString()[1]}${
                    price.toString()[2]
                  },${price.toString()[3]}${price.toString()[4]}${
                    price.toString()[5]
                  }`
                : ``}
            </h3>
            <p style={{ fontSize: "13px" }}>{delivery}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
