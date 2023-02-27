import "./Content.css";

const Content = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="grid-container">
          <div className="box box-1">
            <img
              className="image"
              src="https://cdn.shopify.com/s/files/1/0606/6788/7856/files/Banzai-Dodgers-8192_Kopie_900x.jpg?v=1656333706"
              alt=""
            />
              <h3 className="image-title">STREETWEAR</h3>
          </div>
          <div className="box box-2">
            <img
              className="image"
              src="https://cdn.shopify.com/s/files/1/0606/6788/7856/files/TS-Banzai-Shoot-72_Kopie_21e0ab5a-11a4-4478-9fd9-199c9157a235_1080x.jpg?v=1656333834"
              alt=""
            />
             <h3 className="image-title">ACCESSORY</h3>
          </div>
          <div className="box box-3">
            <img
              className="image"
              src="https://cdn.shopify.com/s/files/1/0606/6788/7856/files/TS-Banzai-Shoot-26_Kopie_900x.jpg?v=1656334221"
              alt=""
            />
             <h3 className="image-title">WOOD</h3>
          </div>
          <div className="box box-4">
            <img
              className="image"
              src="https://cdn.shopify.com/s/files/1/0606/6788/7856/files/TS-Banzai-Shoot-72_Kopie_f6aa61f2-5ec6-4734-b6f8-7a405444a7f8_1296x.jpg?v=1656337212"
              alt=""
            />
             <h3 className="image-title">ALUMINIUM</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
