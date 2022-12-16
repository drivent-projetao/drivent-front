import styled from 'styled-components';

export default function ChooseHotelMenu() {
  return (
    <>
      <MenuHeader>Primeiro, escolha seu hotel</MenuHeader>
      <HotelBrowser>
        <div className="hotel">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/380569812.jpg?k=0755f95e7361587eb7b9c9b79ea62d51b8dcef7cba1e3987daecd59e26daa42b&o=&hp=1"
            alt="hotel"
          />
          <div className="hotel-name">Driven Resort</div>
        </div>
        <div className="hotel">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/380569812.jpg?k=0755f95e7361587eb7b9c9b79ea62d51b8dcef7cba1e3987daecd59e26daa42b&o=&hp=1"
            alt="hotel"
          />
          <div className="hotel-name">Driven Palace</div>
        </div>
        <div className="hotel">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/380569812.jpg?k=0755f95e7361587eb7b9c9b79ea62d51b8dcef7cba1e3987daecd59e26daa42b&o=&hp=1"
            alt="hotel"
          />
          <div className="hotel-name">Driven World</div>
        </div>
      </HotelBrowser>
    </>
  );
}

const MenuHeader = styled.div`
  color: #8e8e8e;
  font-size: 20px;
  margin-bottom: 18px;
`;

const HotelBrowser = styled.div`
  display: flex;
  flex-direction: row;
  gap: 19px;
  align-items: center;
  justify-content: flex-start;

  .hotel {
    background-color: #ebebeb;
    border-radius: 10px;
    width: 196px;
    height: 264px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 14px;
    cursor: pointer;
    &:hover {
      background: linear-gradient(90deg, #fb4298, #fed47f);
      transform: scale(1.02);
    }
    img {
      width: 168px;
      height: 109px;
      border-radius: 5px;
      margin-bottom: 10px;
    }
    .hotel-name {
      font-size: 20px;
    }
  }
`;
