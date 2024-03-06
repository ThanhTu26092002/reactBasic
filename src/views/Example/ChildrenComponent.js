import React from "react";
//ĐỊNH NGHĨA CLASS FUNCITON
// class ChildrenComponent extends React.Component {
//   render() {
//     console.log("check props ", this.props);
//     let { name, age, address, Jobs } = this.props;
//     return (
//       <>
//         <div className="Jobs">
//           {Jobs.map((item, index) => {
//             return (
//               <div key={item.id}>
//                 {item.name} - {item.address}
//               </div>
//             );
//           })}
//         </div>
//       </>
//     );
//   }
// }

//ĐỊNH NGHĨA FUNCITON COMPONENTS
const ChildrenComponent = (props) => {
  let { name, age, address, Jobs } = props;

  return (
    <>
      <div className="Jobs">
        {Jobs.map((item, index) => {
          return (
            <div key={item.id}>
              {item.name} - {item.address}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ChildrenComponent;
