export default function Button({
  children: description = 'Descrição do Botão',
  onButtonClick = null,
}) {
  function handleButtonClick() {
    if (onButtonClick) {
      onButtonClick();
    }
  }

  return (
    <button
      className="bg-gray-300 p-2 rounded-md m-1"
      onClick={handleButtonClick}
    >
      {description}
    </button>
  );
}
