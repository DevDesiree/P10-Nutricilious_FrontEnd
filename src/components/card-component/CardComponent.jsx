import PropTypes from 'prop-types';

const CardComponent = ({ category, description, imageUrl }) => {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full"> {/* Defina uma altura fixa para o card usando a classe 'h-full' */}
      <a href="#">
        <img className="rounded-t-lg w-full h-48 object-cover" src={imageUrl} alt={category.name} />
      </a>
      <div className="p-4">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-gray text-left">{category.name}</h5>
        </a>
        <p className="mb-3 text-gray-700 dark:text-gray-400 text-left">{description}</p>
        <div className="text-left">
          <a type="button" href="#" className="focus:outline-none text-gray bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Yo quiero!</a>
        </div>
      </div>
    </div>    
  );
}

CardComponent.propTypes = {
  category: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default CardComponent;
