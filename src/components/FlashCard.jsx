export default function FlashCard({
  title = 'Título do Card',
  description = 'Descrição do Card, em muitas e várias palavras descritivas',
  showFlashCardTitle = true,
  onToggleFlashCard = null,
  id,
}) {
  function handleCardClick() {
    if (onToggleFlashCard) {
      onToggleFlashCard(id);
    }
  }

  const fontSizeClassName = showFlashCardTitle ? 'text-xl' : 'text-sm';
  return (
    <div
      className={`shadow-lg font-semibold p-4 w-80 h-48 m-2 cursor-pointer
    flex-row items-center justify-center font-mono ${fontSizeClassName}`}
      onClick={handleCardClick}
    >
      {showFlashCardTitle ? title : description}
    </div>
  );
}
