import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  //  Show wheen the page is scrolled a particular distance
  const toggleVisibility = () => {
    window.pageYOffset > 900 ? setVisible(true) : setVisible(false);
  };

  // set the cordinate to 0
  // make the scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // useEffect to make changes to components on state change
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <div className="back-to-top">
      {visible && (
        <div onClick={scrollToTop}>
          <div className="scroll-top">Back to top</div>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;

// import React, { Component } from "react";

// export class ScrollToTop extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isVisible: false,
//     };
//   }
//   componentDidMount() {
//     var scrollComponent = this;
//     document.addEventListener("scroll", (e) => {
//       scrollComponent.toggleVisibility();
//     });
//   }
//   toggleVisibility() {
//     window.pageYOffset > 900
//       ? this.setState({ isVisible: true })
//       : this.setState({ isVisible: false });
//   }
//   scrollToTop() {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }
//   render() {
//     const { isVisible } = this.state;
//     return (
//       <div className="back-to-top">
//         {isVisible && (
//           <div onClick={() => this.scrollToTop()}>
//             <div className="scroll-top">Back to top</div>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default ScrollToTop;
