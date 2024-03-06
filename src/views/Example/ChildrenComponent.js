import React from "react";

// ĐỊNH NGHĨA CLASS FUNCITON
class ChildrenComponent extends React.Component {
  // state = {
  //   showJobs: false,
  // };

  // handleShowHide = () => {
  //   this.setState({
  //     showJobs: !this.state.showJobs,
  //   });
  // };
  // render() {
  //   let { arrJobs } = this.props;
  //   let { showJobs } = this.state;
  //   return (
  //     <>
  //       <div>
  //         <button onClick={() => this.handleShowHide()}>Show</button>
  //       </div>
  //       {showJobs && (
  //         <>
  //           <div className="Jobs">
  //             {arrJobs.map((item, index) => {
  //               return (
  //                 <div key={item.id}>
  //                   {item.name} - {item.title}
  //                 </div>
  //               );
  //             })}
  //           </div>
  //           <div>
  //             <button onClick={() => this.handleShowHide()}>Hide</button>
  //           </div>
  //         </>
  //       )}
  //     </>
  //   );
  // }
  state = {
    showJobs: false,
  };
  handleOnclickShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };
  render() {
    let { arrJobs } = this.props;
    let { showJobs } = this.state;
    return (
      <>
        <div>
          <button onClick={() => this.handleOnclickShowHide()}>Show</button>
        </div>
        {showJobs && (
          <>
            <div className="arrJobs">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary}
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleOnclickShowHide()}>Show</button>
            </div>
          </>
        )}
      </>
    );
  }
}

//ĐỊNH NGHĨA FUNCITON COMPONENTS
// const ChildrenComponent = (props) => {
//   let { arrJobs } = props;
//   return (
//     <>
//       <div className="Jobs">
//         {arrJobs.map((item, index) => {
//             return (
//               <div key={item.id}>
//                 {item.title} - {item.salary} $
//               </div>
//             );
//           }
//         })}
//       </div>
//     </>
//   );
// };
export default ChildrenComponent;
