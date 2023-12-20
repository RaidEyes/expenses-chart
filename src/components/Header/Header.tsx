function Header() {
  return (
    <div className="flex flex-row justify-between items-center bg-[var(--primary-red)] rounded-xl p-4">
      <div>
        <p className="text-white font-light">My balance</p>
        <h2 className="text-white text-2xl font-semibold">$921.48</h2>
      </div>
      <div className="w-[45px] aspect-square rounded-[50%] bg-[var(--neutral-dark-brown)] relative before:absolute before:bg-transparent before:border-solid before:border-white before:border-2 before:rounded-[50%] before:w-full before:aspect-square before:right-6 before:top-0"></div>
    </div>
  );
}

export default Header;
