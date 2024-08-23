import OrderHeader from "@/app/_componets/OrderHeader";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <OrderHeader/>
      <div className="flex justify-center items-center mt-10">
        <SignUp/>
      </div>
    </>
  
);
}