import { useState } from 'react';
import Button from '../components/Button';
import FlashCard from '../components/FlashCard';
import FlashCards from '../components/FlashCards';
import Header from '../components/Header';
import Main from '../components/Main';
import RadioButton from '../components/RadioButton';
import { allFlashCards } from '../data/allFlashcards';
import { helperShuffleArray } from '../helpers/arrayHelpers';

export default function FlashCardsPage() {
  const [allCards, setAllCards] = useState(allFlashCards);
  const [radioButtonShowTitle, setradioButtonShowTitle] = useState(true);

  function handleButtonClick() {
    const shuffleCards = helperShuffleArray(allCards);

    setAllCards(shuffleCards);
  }

  function handleRadioShowTitleClick() {
    const updatedCards = [...allCards].map(card => ({
      ...card,
      showTitle: true,
    }));

    setAllCards(updatedCards);

    setradioButtonShowTitle(true);
  }

  function handleRadioShowDescriptionClick() {
    const updatedCards = [...allCards].map(card => ({
      ...card,
      showTitle: false,
    }));

    setAllCards(updatedCards);

    setradioButtonShowTitle(false);
  }

  function handleToggleFlashCard(cardId) {
    const updatedCards = [...allCards];
    const cardIndex = updatedCards.findIndex(card => card.id === cardId);
    updatedCards[cardIndex].showTitle = !updatedCards[cardIndex].showTitle;

    setAllCards(updatedCards);
  }

  return (
    <>
      <Header>react-flashcards-v1</Header>

      <Main>
        <div className="text-center mb-4">
          <Button onButtonClick={handleButtonClick}>Embaralhar Cards</Button>
        </div>

        <div className="flex flex-row items-center justify-center space-x-4 m-4">
          <RadioButton
            id="radiobuttonShowTitle"
            name="showInfo"
            buttonChecked={radioButtonShowTitle}
            onButtonClick={handleRadioShowTitleClick}
          >
            Mostrar Título
          </RadioButton>

          <RadioButton
            id="radiobuttonShowDescription"
            name="showInfo"
            buttonChecked={!radioButtonShowTitle}
            onButtonClick={handleRadioShowDescriptionClick}
          >
            Mostrar Descrição
          </RadioButton>
        </div>

        <FlashCards>
          {allCards.map(({ id, title, description, showTitle }) => {
            return (
              <FlashCard
                key={id}
                id={id}
                title={title}
                description={description}
                showFlashCardTitle={showTitle}
                onToggleFlashCard={handleToggleFlashCard}
              />
            );
          })}
        </FlashCards>
      </Main>
    </>
  );
}
