import React, { useState, useEffect } from "react"; // 1. ĐÃ THÊM useEffect
import { Link } from "react-router-dom";
import CartImage from "@/assets/images/cart-img.png";
import { X, Plus, Minus } from "lucide-react";

// Import Redux
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCartItems,
  updateCartItemQuantity,
  removeCartItem,
} from "@/features/cart/cartSlice";

// Import Popups
import OrderPopup from "@/components/OrderPopup";
import SuccessPopup from "@/components/SuccessPopup";

// 2. ĐÃ XÓA KHỐI DỮ LIỆU GIẢ (const cartItems = [...])

const CartPage = () => {
  const dispatch = useDispatch();

  // 3. Lấy dữ liệu từ Redux store (giờ không còn bị trùng tên)
  const cartItems = useSelector((state) => state.cart.items);
  const cartStatus = useSelector((state) => state.cart.status);

  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  // 4. Fetch dữ liệu giỏ hàng khi component mount
  useEffect(() => {
    if (cartStatus === "idle") {
      dispatch(fetchCartItems());
    }
  }, [cartStatus, dispatch]);

  // 5. CÁC HÀM XỬ LÝ (SỬA/XÓA)
  const handleIncrease = (item) => {
    dispatch(
      updateCartItemQuantity({ id: item.id, quantity: item.quantity + 1 })
    );
  };

  const handleDecrease = (item) => {
    dispatch(
      updateCartItemQuantity({ id: item.id, quantity: item.quantity - 1 })
    );
  };

  const handleRemove = (id) => {
    if (
      window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?")
    ) {
      dispatch(removeCartItem(id));
    }
  };

  const handleOrderSubmit = () => {
    setIsOrderOpen(false);
    setIsSuccessOpen(true);
  };

  // Tính toán tổng
  const totalProducts = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <OrderPopup
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
        onSubmit={handleOrderSubmit}
      />
      <SuccessPopup
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
      />

      {/* Banner */}
      <div className="w-full h-20 bg-green-50 flex items-center justify-center">
        <div className="container text-center text-sm">
          <h3>
            Trang chủ / Sản phẩm /{" "}
            <Link to="/cart" className="text-green-600">
              Cart
            </Link>
          </h3>
        </div>
      </div>

      {/* Cart Section */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-2xl font-bold mb-6">Giỏ hàng của bạn</h1>

          {/* 6. Thêm trạng thái tải và giỏ hàng rỗng */}
          {cartStatus === "loading" && <div>Đang tải giỏ hàng...</div>}
          {cartStatus === "failed" && <div>Lỗi khi tải giỏ hàng.</div>}
          {cartStatus === "succeeded" && cartItems.length === 0 && (
            <p>Giỏ hàng của bạn đang trống.</p>
          )}

          {/* Chỉ hiển thị bảng nếu tải xong và có sản phẩm */}
          {cartStatus === "succeeded" && cartItems.length > 0 && (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-[#FFF0E7]">
                    <tr>
                      <th scope="col" className="px-6 py-3 rounded-l-lg">
                        Sản phẩm
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Giá
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Số lượng
                      </th>
                      <th scope="col" className="px-6 py-3 rounded-r-lg">
                        Tổng giá
                      </th>
                      <th scope="col" className="px-1 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id} className="bg-white border-b">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center gap-4"
                        >
                          <div className="w-20 h-20 bg-gray-100 rounded-md flex items-center justify-center">
                            <img
                              src={item.image || CartImage} // Dùng ảnh thật nếu có
                              alt={item.name}
                              className="h-16"
                            />
                          </div>
                          <div>
                            <p className="font-bold">{item.name}</p>
                            <p className="text-xs text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </th>
                        <td className="px-6 py-4">
                          {item.price.toLocaleString()} VNĐ
                        </td>
                        <td className="px-6 py-4">
                          {/* 7. GẮN HÀM VÀO NÚT */}
                          <div className="flex items-center border border-gray-300 rounded-md p-1 w-24 justify-between">
                            <button
                              onClick={() => handleDecrease(item)} // Gắn hàm
                              className="px-2 text-gray-500 hover:text-black"
                            >
                              <Minus size={14} />
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() => handleIncrease(item)} // Gắn hàm
                              className="px-2 text-gray-500 hover:text-black"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-semibold">
                          {(item.price * item.quantity).toLocaleString()} VNĐ
                        </td>
                        <td className="px-1 py-4 text-center">
                          <button
                            onClick={() => handleRemove(item.id)} // Gắn hàm
                            className="text-gray-400 hover:text-red-500"
                          >
                            <X size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-end pt-9">
                <Link to="/products">
                  <button className="bg-green-600 text-white font-bold py-3 px-6 rounded-md hover:bg-green-700 cursor-pointer">
                    Mua thêm
                  </button>
                </Link>
              </div>
              <div className="flex justify-between items-start">
                <div className="w-full max-w-sm bg-[#FFF0E7] p-6 rounded-lg mt-30 xl:mt-0">
                  <h2 className="text-lg font-bold mb-4">Tổng giỏ hàng</h2>
                  <div className="flex justify-between mb-2">
                    <p>Tổng sản phẩm:</p>
                    <p>{totalProducts}</p>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t border-gray-300 pt-2 mt-2">
                    <p>Tổng cộng:</p>
                    <p className="text-orange-600">
                      {totalPrice.toLocaleString()} VNĐ
                    </p>
                  </div>
                  <button
                    onClick={() => setIsOrderOpen(true)}
                    className="w-full mt-6 bg-gray-800 text-white font-bold py-3 rounded-md hover:bg-black cursor-pointer"
                  >
                    Đặt hàng
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default CartPage;
