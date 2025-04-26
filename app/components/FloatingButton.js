import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function FloatingButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href="https://wa.me/543834902999"
        className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white w-20 h-20 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="w-10 h-10" />
      </a>
    </div>
  );
}