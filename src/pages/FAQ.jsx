import React, { useEffect } from "react";
import FaqLanding from "../components/FAQ/FaqLanding";
import FaqContent from "../components/FAQ/FaqContent";
import FaqForm from "../components/FAQ/FaqForm";

export default function FAQ() {
  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleToTop();
  }, []);
  return (
    <div>
      <FaqLanding />
      <div className="xl:px-48 lg:px-20 md:px-12 px-10 bg-[#f2f2f2] py-20">
        <div className="grid grid-cols-12 lg:gap-x-10 gap-y-16 lg:gap-y-0">
          <div className="lg:col-span-8 col-span-12">
            <FaqContent />
          </div>
          <div className="lg:col-span-4 col-span-12">
            <FaqForm />
          </div>
        </div>
      </div>
    </div>
  );
}











// import React, { useEffect } from "react";
// import FaqLanding from "../components/FAQ/FaqLanding";
// import FaqContent from "../components/FAQ/FaqContent";
// import FaqForm from "../components/FAQ/FaqForm";

// export default function FAQ() {
//   const handleToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     handleToTop();
//   }, []);

//   return (
//     <div>
//       <FaqLanding />
//       <div className="bg-[#f2f2f2] py-20">
//         <div className="xl:px-48 lg:px-20 md:px-12 px-10">
//           <div className="grid grid-cols-12 lg:gap-x-10 gap-y-16 lg:gap-y-0 relative">
//             {/* Left side with the content */}
//             <div className="lg:col-span-8 col-span-12">
//               <FaqContent />
//             </div>
//             {/* Right side with the fixed form */}
//             <div className="lg:col-span-4 col-span-12 lg:sticky lg:top-20 lg:h-screen lg:flex lg:justify flex-col">
//               <FaqForm />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
