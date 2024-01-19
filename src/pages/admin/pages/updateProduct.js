import classes from "./addproduct.module.css";
import MyContext from "../../../context/data/myContex";
import { useContext } from "react";

const UpdateProduct = () => {
  const context = useContext(MyContext);
  const { products, setProducts, updateProduct } = context;
  return (
    <>
      <div className={classes.form_section}>
        <div className={classes.formContainer}>
          <div>
            <h2>Update Product</h2>
          </div>
          <form className={classes.addForm}>
            <div>
              <input
                value={products.title}
                onChange={(e) =>
                  setProducts({ ...products, title: e.target.value })
                }
                placeholder="Product Title"
                type="text"
              />
            </div>
            <div>
              <input
                value={products.price}
                onChange={(e) =>
                  setProducts({ ...products, price: e.target.value })
                }
                placeholder="Product Price"
                type="text"
              />
            </div>
            <div>
              <input
                value={products.imageURL}
                onChange={(e) =>
                  setProducts({ ...products, imageURL: e.target.value })
                }
                placeholder="Product ImageURL"
                type="text"
              />
            </div>
            <div>
              <input
                value={products.category}
                onChange={(e) =>
                  setProducts({ ...products, category: e.target.value })
                }
                placeholder="Product Category"
                type="text"
              />
            </div>
            <div>
              <textarea
                value={products.description}
                onChange={(e) =>
                  setProducts({ ...products, description: e.target.value })
                }
                placeholder="Product Description"
              ></textarea>
            </div>
            <button type="submit" onClick={updateProduct}>
              Update Product
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProduct;
