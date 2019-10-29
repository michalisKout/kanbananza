import React, { Component } from 'react';
import MoveCardToList from './MoveCardToList';

class Card extends Component {
  state = { showOptions: false };

  toggleOptions = () => {
    this.setState((prevState) => {
      return { ...prevState, showOptions: !prevState.showOptions };
    });
  };

  handleChange = (event) => {
    const newListId = event.target.value;
    const { card } = this.props;

    this.props.onListChange(card, newListId);
  };

  moveCardToList = (event) => {

  }

  render() {
    const {
      card = {},
      lists = [],
      list = {},
      onRemoveCard = () => {},
    } = this.props;
    const { showOptions } = this.state;
    const removeCard = () => onRemoveCard(list, card);

    return (
      <article className="Card">
        <h3>{card.title}</h3>
        <div className="Card-description">{card.description}</div>
        {showOptions && (
          <div className="Card-options">
            {/* <select
              className="Card-move"
              onChange={this.handleChange}
              value={list.id}
            >
              {lists.map((list) => (
                <option value={list.id} key={list.id}>
                  {list.title}
                </option>
              ))}
            </select> */}
            <MoveCardToList  listId={list.id} lists={lists} moveCardToList={this.moveCardToList} />
            <button onClick={removeCard} className="Card-remove danger">
              Remove Card
            </button>
          </div>
        )}
        <button className="Card-toggle" onClick={this.toggleOptions}>
          Toggle Options
        </button>
      </article>
    );
  }
}

export default Card;
