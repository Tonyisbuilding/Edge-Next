// import "./component.css";
// import { theTeamYouCanTrustData } from "@/constant/data";
// import images from "@/constant/images";
// // import TeamMemberCards from "@/common/TeamMemberCards";

// const TheTeamYouCanTrust = () => {
//   return (
//     <>
//       <div className=" bg-[#EEF4F5] py-[2rem] relative">
//         <div>
//           <div>
//             <img
//               src={images.landingPage.dots_one}
//               alt=""
//               className="absolute left-0 top-[2rem]"
//             />
//           </div>
//           <div>
//             <img
//               src={images.landingPage.dots_one}
//               alt=""
//               className="absolute left-0 top-[18rem] lg:block hidden"
//             />
//           </div>
//           <div>
//             <img
//               src={images.landingPage.dots_one}
//               alt=""
//               className="absolute right-0 top-[2rem] lg:block hidden"
//             />
//           </div>
//         </div>

//         <h1 className=" md:text-[48px] text-[21px] font-semibold text-left md:text-center 
//         montserrat text-black py-[2rem] md:px-0 px-[1rem]">
//           Our Management Team
//         </h1>
//         <div className=" md:flex justify-center items-center relative left-[1.2rem] md:left-[3rem] lg:left-0">
//           {theTeamYouCanTrustData.map((data) => {
//             return (
//               <div
//                 key={data.id}
//                 className=" flex justify-center relative my-[2rem] md:my-0"
//               >
//                 <div>
//                   <img
//                     src={data.avatar}
//                     alt=""
//                     className=" md:w-[80%] w-[92%] rounded-tr-2xl rounded-bl-2xl"
//                   />
//                 </div>
//                 <div
//                   className=" bg-[#0000009f] absolute bottom-0 p-2 left-0 rounded-bl-2xl lg:w-[15vw] text-center
//                   bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 
//                  "
//                 >
//                   <p className=" text-white">{data.name}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//         <div className=" flex justify-center items-center mt-[5rem] ">
//           <button className=" bg-black text-white py-2 px-5 rounded-3xl hover:cursor-pointer">
//             Meet our entire team
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TheTeamYouCanTrust;
