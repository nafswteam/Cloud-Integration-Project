const Reservation = () => {
  return (
    <div className="flex flex-col gap-5 w-full sm:w-[45%] p-4 h-full">
      <h2 className="font-semibold text-lg sm:text-2xl text-center">
        Come vist us at our Hackerspace
      </h2>
      <form className="flex flex-col gap-y-2 items-center justify-center w-full">
        <input
          type="text"
          placeholder="Interested Newsletter email ?"
          className="p-2 sm:p-4 border-4 w-full rounded-xl"
        />
        <button
          type="button"
          className="text-lg sm:text-xl w-full text-center border-2 bg-red-600 text-white rounded-lg p-2"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Reservation;
