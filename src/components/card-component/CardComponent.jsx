import avocadoYTomate from '../../assets/images/avocadoYTomate.jpg';

export default function CardComponent() {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={avocadoYTomate} alt="" />
      </a>
      <div className="p-4">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-gray text-left">Veganos</h5>
        </a>
        <p className="mb-3 text-gray-700 dark:text-gray-400 text-left">Descubre nuestros productos veganos: deliciosos y éticos. ¡Haz tu elección consciente hoy mismo!</p>
        <div className="text-left">
          <a type="button" href="#" className="focus:outline-none text-gray bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Yo quiero!</a>
        </div>
      </div>
    </div>    
  );
}
