import React, { useState } from 'react'
import '../CardTable.css';

const CardTable = () => {

  const [cardsOnBoard, setCardsOnBoard] = useState([])

  const [cardsInHand, setCardsInHand] = useState([
    {
      card_number: 'a',
      card_symbol: 'spades',
    },
    {
      card_number: '2',
      card_symbol: 'clubs',
    },
    {
      card_number: '3',
      card_symbol: 'diamonds',
    },
    {
      card_number: '4',
      card_symbol: 'hearts',
    },
    {
      card_number: '5',
      card_symbol: 'spades',
    },
    {
      card_number: '6',
      card_symbol: 'clubs',
    },
    {
      card_number: '7',
      card_symbol: 'diamonds',
    },
    {
      card_number: '8',
      card_symbol: 'hearts',
    }
  ])




  const [users, setUsers] = useState([
    {
      username: 'Taranjit Singh',
      user_state: 'Playing',
      user_image: 'https://picsum.photos/100/111.jpg',
      playing: true
    },
    {
      username: 'Hardeep Singh',
      user_state: 'Playing',
      user_image: 'https://picsum.photos/100/112.jpg',
      playing: false
    },
    {
      username: 'Arshmeet Singh',
      user_state: 'Playing',
      user_image: 'https://picsum.photos/100/113.jpg',
      playing: false
    },
    {
      username: 'Inderpreet Singh',
      user_state: 'Playing',
      user_image: 'https://picsum.photos/100/114.jpg',
      playing: false
    },
    {
      username: 'Sahil Rawat',
      user_state: 'Out',
      user_image: 'https://picsum.photos/100/115.jpg',
      playing: false
    },
    {
      username: 'Simran Singh',
      user_state: 'Out',
      user_image: 'https://picsum.photos/100/116.jpg',
      playing: false
    },
    {
      username: 'Nandan Jain',
      user_state: 'Watching',
      user_image: 'https://picsum.photos/100/117.jpg',
      playing: false
    },
    {
      username: 'Paviter Rangi',
      user_state: 'Watching',
      user_image: 'https://picsum.photos/100/118.jpg',
      playing: false
    }
  ])



  return (
    <>
      <div className="vue-container">










        <div className="table" table_name='Bhabi'>

          {cardsOnBoard.length ?<>
            <div className="card-place">
              {
                cardsOnBoard.map((item, index) => {
                  return (
                    <div key={index} className="card">
                      <h1>{item.card_number}</h1>
                      <div className={`figures ${item.card_symbol}`}></div>
                      <h1>{item.card_number}</h1>
                    </div>
                  )
                })
              }

            </div>
          </>: ''}




          <div className="players">


            {
              users.map((item, index) => {
                return (
                  <div key={index} className={`player player-${index + 1} ${item.playing ? 'playing' : ''}`}>
                    <div className="avatar">
                      <img src={item.user_image} alt={item.username} />
                    </div>
                    <div className="name">{item.username}</div>
                  </div>

                )
              })
            }



          </div>
        </div>
















        <div className='time_tracker'>
          <h3>Time : 05:02</h3>
        </div>
























        <div className="list-wrapper">
          <ul className="list">

            {
              users.map((item, index) => {
                return (
                  <li key={index} className="list-item">
                    <div>
                      <img src={item.user_image} className="list-item-image" alt={item.username} />
                    </div>
                    <div className="list-item-content">
                      <h4>{item.username}</h4>
                      <p>{item.user_state}</p>
                    </div>
                  </li>

                )
              })
            }


          </ul>
        </div>






















        <div className='my_cards_wrrpr'>
          <div className="card-place">






            {
              cardsInHand.map((item, index) => {
                return (
                  <div key={index} className="card_dv">
                    <div className="card" onClick={() => {
                      
                      setCardsInHand([
                        ...cardsInHand.slice(0, index),
                        ...cardsInHand.slice(index + 1)
                      ]);

                      setCardsOnBoard([
                        ...cardsOnBoard,
                        item
                      ])
           

                    }}>
                      <h1>{item.card_number}</h1>
                      <div className={`figures ${item.card_symbol}`}></div>
                      <h1>{item.card_number}</h1>
                    </div>
                  </div>
                )
              })
            }










          </div>
        </div>










      </div>
    </>
  )
}

export default CardTable