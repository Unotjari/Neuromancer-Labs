import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, Globe } from "lucide-react";
import Link from "next/link";

const ActionButtons = () => {
  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-4 items-start w-full  text-lg text-black mt-10">
                  <Link href="/" className="">
                    Sign In
                  </Link>
                  <Link href="/" className="">
                    Get Started
                  </Link>
                  <Link href="/pricing" className=" ">
                    Pricing
                  </Link>
                  <Link href="/" className="">
                    Features
                  </Link>
                  <Link href="/contact" className="">
                    Contact
                  </Link>
                  <Link href="/" className="">
                    About
                  </Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div
        className="hidden md:flex md:space-x-4 items-center
    
    

"
      >
        

        <div className="flex xl:space-x-6">
        <Link
          href={"/pricing"}
          className="
            xl:flex
            items-center
            hidden
            
            "
        >
          <div className="font-light flex">Pricing</div>
        </Link>

        <Link
          href={"/sign-in"}
          className="
            xl:flex
            items-center
            hidden
            
            "
        >
          <div className="font-light flex xl:w-12">Sign In</div>
        </Link>


      </div>
        <Link href={"/contact"}>
                <Button
                className="
                hidden
                md:flex
                text-md
                font-light
                rounded-[40px]
                border-4
                border-indigo-400/90
                py-6
                bg-[#565add]
                hover:scale-110
                transition-all
                duration-300
                shadow-md
                hover:shadow-indigo-300
                
                ">
                    Get Started for Free
                </Button>
            </Link>
        <Link href={"/contact"}>
                <Button
                className="
              hidden
              text-[#565add]
              text-md
              font-light
              bg-[#eff0ff]
              p-6
                rounded-[40px]
                hover:scale-110
                transition-all
                duration-300
                shadow-md
                md:hidden
                lg:flex
                hover:shadow-indigo-300
                
                ">
                  Contact Sales
                </Button>
            </Link>

        
       

        <div></div>
      </div>
    </div>
  );
};

export default ActionButtons;
