const Wrapper = ({ children, customStyling }) => {
  return (
    <div className={`mx-auto w-11/12 max-w-screen-2xl ${customStyling}`}>
      {children}
    </div>
  );
};

export default Wrapper;
