import { useFormState } from "react-dom";

const addToCart = (prevState, queryData) => {
  const itemID = queryData.get("itemID");
  if (itemID === "1") {
    return "Added to cart";
  } else {
    return "Couldn't add to cart: the item is sold out.";
  }
};

const AddToCartForm = ({ itemID, itemTitle }) => {
  const [message, formAction] = useFormState(addToCart, null);

  return (
    <form
      action={formAction}
      className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
    >
      <h2 className="mb-4 text-xl font-bold">{itemTitle}</h2>
      <input type="hidden" name="itemID" value={itemID} />
      <button
        type="submit"
        className="focus:shadow-outline rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 focus:outline-none"
      >
        Add to Cart
      </button>
      <div className="mt-4 text-sm text-gray-700">{message}</div>
    </form>
  );
};

export default AddToCartForm;
