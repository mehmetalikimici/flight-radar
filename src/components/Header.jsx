import { useSelector } from 'react-redux';

const Header = () => {
  const state = useSelector((store) => store.flightSlice);

  return (
    <header>
      <div>
        <img src="./plane-l.png" />
        <h3>Uçuş Radarı</h3>
      </div>

      <p>
        {state.isLoading
          ? 'Uçuşlar hesaplanıyor...'
          : state.isError
          ? 'Üzgünüz bir hata oluştu :('
          : state.flights.length + ' Uçuş Bulundu'}
      </p>
    </header>
  );
};

export default Header;
