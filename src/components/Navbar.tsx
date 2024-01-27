import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { AlignJustify } from "lucide-react";

const Navbar = () => {
  return (
    <div className="fixed bg-white backdrop-blur-md w-full flex justify-end md:justify-center items-center">
      <div className="md:flex hidden w-full justify-between items-center mx-5 max-w-6xl">
        <img src="/logo.png" className="w-60 my-5"></img>
        <p>Sahyadri</p>
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify className="w-9 h-9 my-5 mr-5" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
