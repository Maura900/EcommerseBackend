import "../../styles/utils/spinner.css";

export const Spinner = () => {
  return (
    <div className="wrapper">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
