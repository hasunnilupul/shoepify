import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Icon from "@/components/Icon";

const UserAccountDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="inline-flex h-10 w-max items-center justify-center rounded-md bg-background 
                px-2 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none 
                disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 cursor-pointer"
          aria-label="User account"
        >
          <Icon name="user-round" className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Login
          </DropdownMenuItem>
          <DropdownMenuItem>
            Register
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountDropdown;
