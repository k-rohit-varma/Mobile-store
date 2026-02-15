import Customer_form from "../pages/Customer_form";

const Mobile_view = ({ mobile }) => {
  return (
    <article
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
      role="article"
      aria-label={mobile.name}
    >
      {/* IMAGE */}
      <div className="bg-linear-to-tr from-pink-50 via-purple-50 to-blue-50 p-6 flex justify-center items-center">
        <img
          src={mobile.image_url}
          alt={mobile.name}
          className="h-52 object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col grow">
        {/* Brand + Offers */}
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-gray-500 font-medium">{mobile.brand}</p>
          <span className="text-xs text-green-600 font-semibold">
            No Cost EMI / Exchange Offers
          </span>
        </div>

        {/* NAME */}
        <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-2 line-clamp-2">
          {mobile.name}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {mobile.description}
        </p>

        {/* Price */}
        <div className="mb-4">
          <p className="text-2xl font-bold text-gray-900">₹ {mobile.price}</p>
          <p className="text-xs text-gray-500">Inclusive of all taxes</p>
        </div>

        {/* Customer Form */}
        <div className="mt-6">
          <Customer_form mobile={mobile} />
        </div>
      </div>
    </article>
  );
};

export default Mobile_view;
