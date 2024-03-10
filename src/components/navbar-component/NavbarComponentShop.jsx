import logoNavbar from '../../assets/images/logo-white.png'
export default function NavbarComponent() {
    return (
    
<nav className="bg-black border-black-200 dark:bg-black-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5 space-x-10">
    <div>
        <a href="/" className="flex items-center space-x-5 rtl:space-x-reverse">
      <img src={logoNavbar} className="h-20" alt="Logo" />
      <span className="self-center text-4xl font-semibold whitespace-nowrap text-white ">Nutrilicious</span>
        </a>
  </div>
  <div className="flex-row justify-between space-x-5">
    
    <a href="/login"><button type="button" className="text-black bg-amber-400 hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-amber-400 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-amber-100 dark:hover:bg-amber-400 dark:focus:ring-amber-400">Iniciar Sesión</button> </a>
      <button type="button" className="text-black bg-amber-400 hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-amber-400 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-amber-100 dark:hover:bg-amber-400 dark:focus:ring-amber-400">Cerrar sesión</button>
      <a href="/register"><button type="button" className="text-black bg-amber-400 hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-amber-400 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-amber-100 dark:hover:bg-amber-400 dark:focus:ring-amber-400">Registrarse</button></a>
      <button type="button" className="text-black bg-amber-400 hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-amber-400 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-amber-100 dark:hover:bg-amber-400 dark:focus:ring-amber-400">🛒</button>

      <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
  </div>
  </div>
  <div className="items-center justify-center hidden w-full md:flex md:w-auto md:order-1 p-3" id="navbar-cta">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-black-100 rounded-lg bg-black-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-amber-400 bg-amber-400 rounded md:bg-transparent md:text-white md:dark:text-amber-400" aria-current="page">Alimentos veganos</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-white rounded hover:bg-amber-400 md:hover:bg-transparent md:hover:text-amber-400 md:dark:hover:text-amber-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Proteínas vegetales</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-white rounded hover:bg-white  md:hover:bg-transparent md:hover:text-amber-400 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Granos y cereales</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-white rounded hover:bg-amber-400 md:hover:bg-transparent md:hover:text-amber-400 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Snacks</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-white rounded hover:bg-amber-400 md:hover:bg-transparent md:hover:text-amber-400 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Frutas y verduras</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-white rounded hover:bg-amber-400 md:hover:bg-transparent md:hover:text-amber-400 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Proteína animal</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-white rounded hover:bg-amber-400 md:hover:bg-transparent md:hover:text-amber-400 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Aceites y condimentos</a>
      </li>
    </ul>
  </div>
</nav>
    )}