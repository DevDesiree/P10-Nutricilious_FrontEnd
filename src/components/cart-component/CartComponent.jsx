import naranja from "../../assets/images/naranja.jpg";
import QuantityComponent from "../quantity-component/QuantityComponent";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function CartComponent() {
  return (
    <div className="container mx-auto py-4 w-96 h-auto shadow-xl">
      <div className="flex justify-center">
        <div className="relative">
          <div className="flex flex-row cursor-pointer truncate p-2 px-4 rounded">
            <div className="flex justify-between ml-2 w-full relative align-middle">
              <FontAwesomeIcon icon={faShoppingCart} className="h-6" style={{ color: "#d9c31b" }} />
              <FontAwesomeIcon icon={faTrash} style={{ color: "#6b0b00" }} />
            </div>
          </div>
          <div className="overflow-y-auto max-h-80">
            {" "}
            <div className="shadow-xl w-80 rounded p-2">
              <div className="flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                <div className="p-2 w-20">
                  <img src={naranja} alt="img product" />
                </div>
                <div className="flex-auto p-2 text-sm text-left w-32">
                  <div className="font-bold">Product 1</div>
                  <div className="text-gray-400">Qt: 2</div>
                  <div className="text-gray-400">€3</div>
                </div>
                <div className="p-2">
                  <QuantityComponent />
                </div>
                <div className="p-2">
                  <FontAwesomeIcon
                    icon={faTrash}
                    style={{ color: "#6b0b00" }}
                  />
                </div>
              </div>
              <div className="flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
              <div className="p-2 w-20">
                  <img src={naranja} alt="img product" />
                </div>
                <div className="flex-auto p-2 text-sm text-left w-32">
                  <div className="font-bold">Product 1</div>
                  <div className="text-gray-400">Qt: 2</div>
                  <div className="text-gray-400">€3</div>
                </div>
                <div className="p-2">
                  <QuantityComponent />
                </div>
                <div className="p-2">
                  <FontAwesomeIcon
                    icon={faTrash}
                    style={{ color: "#6b0b00" }}
                  />
                </div>
              </div>
              <div className="flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
              <div className="p-2 w-20">
                  <img src={naranja} alt="img product" />
                </div>
                <div className="flex-auto p-2 text-sm text-left w-32">
                  <div className="font-bold">Product 1</div>
                  <div className="text-gray-400">Qt: 2</div>
                  <div className="text-gray-400">€3</div>
                </div>
                <div className="p-2">
                  <QuantityComponent />
                </div>
                <div className="p-2">
                  <FontAwesomeIcon
                    icon={faTrash}
                    style={{ color: "#6b0b00" }}
                  />
                </div>
              </div>
              <div className="flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
              <div className="p-2 w-20">
                  <img src={naranja} alt="img product" />
                </div>
                <div className="flex-auto p-2 text-sm text-left w-32">
                  <div className="font-bold">Product 1</div>
                  <div className="text-gray-400">Qt: 2</div>
                  <div className="text-gray-400">€3</div>
                </div>
                <div className="p-2">
                  <QuantityComponent />
                </div>
                <div className="p-2">
                  <FontAwesomeIcon
                    icon={faTrash}
                    style={{ color: "#6b0b00" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="p-2">
            <h3 className="text-gray-700 text-xl font-bold">Total: €12</h3>{" "}
          </div>
          <div className="justify-center flex">
            <a
              type="button"
              href="#"
              className="focus:outline-none text-gray bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 transform transition-all duration-300 hover:scale-105"
            >
              Checkout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}