import { useEffect, useState } from "react";
import MyContext from "./myContex";
import { fireDB } from "../../firebase/firebaseConfig";
import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
const MyStateProvider = (props) => {
  const [mode, setMode] = useState("blue");

  const toggleMode = () => {
    if (mode === "blue") {
      setMode("dark");
      document.body.style.backgroundColor = "#1f1f1f";
    } else {
      setMode("blue");
      document.body.style.backgroundColor = "white";
    }
  };

  // ---------------------------------------
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageURL: null,
    description: null,
    category: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const addProduct = async (e) => {
    e.preventDefault();
    if (
      products.title == null ||
      products.price == null ||
      products.imageURL == null ||
      products.description == null ||
      products.category == null
    ) {
      return toast.error("All fields required");
    }
    try {
      const productRef = collection(fireDB, "products");
      await addDoc(productRef, products);
      toast.success("Product Added Succuessfully");
      setTimeout(() => {
        window.location.href = "/admindashboard";
      }, 800);
      getProductData();
    } catch {
      console.log("Error");
    }
  };

  // -----------------Get-Product--------------------

  const [fetchProduct, setFetchProduct] = useState([]);

  const getProductData = async () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "products"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setFetchProduct(productArray);
        setLoading(false);
      });

      return () => data;
    } catch {
      console.log("error");
      setLoading(false);
    }
  };

  // --------Order-Data-----------
  const [order, setOrder] = useState([]);
  const getOrderData = async () => {
    try {
      const result = await getDocs(collection(fireDB, "order"));
      const ordersData = [];
      result.forEach((doc) => {
        ordersData.push(doc.data());
      });
      setOrder(ordersData);
    } catch (error) {
      console.log("Error");
    }
  };

  // --------User-Data--------

  const [userData, setUserData] = useState([]);

  const getUserInfo = async () => {
    try {
      const result = await getDocs(collection(fireDB, "userData"));
      const usersArray = [];
      result.forEach((doc) => {
        usersArray.push(doc.data());
      });
      setUserData(usersArray);
    } catch (error) {
      console.log("Error");
    }
  };

  useEffect(() => {
    getProductData();
    getOrderData();
    getUserInfo();
  }, []);

  // -------------------Update-Product------------------

  const editHandler = (item) => {
    setProducts(item);
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(fireDB, "products", products.id), products);
      toast.success("Product update successfully");
      getProductData();
      window.location.href = "/admindashboard";
    } catch {
      console.log("Error");
    }
  };

  const deleteProduct = async (item) => {
    try {
      await deleteDoc(doc(fireDB, "products", item.id));
      toast.success("Product Deleted Successfully");
      getProductData();
      // window.location.href = "/admindashboard"
    } catch {
      console.log("Error");
    }
  };

  // ----------Filter-----------

  const [searchKey, setSearchKey] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterPrice, setFilterPrice] = useState("");

  return (
    <>
      <MyContext.Provider
        value={{
          mode,
          toggleMode,
          products,
          setProducts,
          fetchProduct,
          getProductData,
          addProduct,
          updateProduct,
          deleteProduct,
          editHandler,
          loading,
          order,
          setLoading,
          userData,
          searchKey,
          setSearchKey,
          filterPrice,
          setFilterPrice,
          filterType,
          setFilterType,
        }}
      >
        {props.children}
      </MyContext.Provider>
    </>
  );
};

export default MyStateProvider;
