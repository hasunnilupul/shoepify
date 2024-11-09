import Icon from "@/components/Icon";

const ShoppingCartSheet = () => {
    return (
      <button
        className="inline-flex h-10 w-max items-center justify-center rounded-md bg-background 
                px-2 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none 
                disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 cursor-pointer"
        aria-label="Cart"
      >
        <Icon name="shopping-cart" className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>
    );
  };

  export default ShoppingCartSheet;