import Grinder from "../assets/images/grinder.png";

const CONVERTER = () => {
  return (
    <div className="converter">
      <div className="container pt-5">
        {/* <h1>Converter</h1>  */}
        <div className="row">
          <div className="col-lg-6">
            <form></form>
          </div>
          <div className="col-lg-6">
            <div
              className="
                  h-100
                  w-100
                  p-3
                  d-flex
                  flex-xl-row flex-column
                  justify-content-lg-end
                  align-items-center
                "
            >
              <img src={Grinder} alt="Grinder" />
              <div className="text-center px-3">
                <p className="mb-0">Filter medium fine between</p>
                <h3>25-35 clicks</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CONVERTER;
