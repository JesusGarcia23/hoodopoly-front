import React from "react";
import Card from './StreetSquare'


let bottomSquares = [
		{ 
      rowPosition : "row horizontal-row bottom-row",
			name : 'Little Haiti', 
			price: '$120',
			color: 'light-blue', 
			type: 'space property'
		},
		{
      rowPosition : "row horizontal-row bottom-row",
			name : 'Little Havanna', 
			price: '$100',
			color: 'light-blue',
			type: 'space property'
		},
		{
      rowPosition : "row horizontal-row bottom-row",
			name : 'Chance', 
			color: 'light-blue', 
			type: 'space chance'
		},
		{
      rowPosition : "row horizontal-row bottom-row",
			name : 'Triad Place', 
			price: '$100',
			color: 'light-blue',
			type: 'space property'
		},
		{
      rowPosition : "row horizontal-row bottom-row",
			name : 'Tootsies StripClub', 
			price: '$200',
			type: ' space railroad'
    },
    {
      rowPosition : "row horizontal-row bottom-row",
			name : 'Income Tax', 
      type: 'space fee income-tax',
      instructions:  'Pay 10% or $200'
    },
    {
      rowPosition : "row horizontal-row bottom-row",
			name : 'Baltic Avenue', 
			price: '$50',
			color: 'dark-purple',
			type: 'space property'
    },
    {
      rowPosition : "row horizontal-row bottom-row",
			name : 'Community Chest', 
      type: 'space community-chest',
      instructions: 'Follow instructions on top card'
    },
    {
      rowPosition : "row horizontal-row bottom-row",
			name : 'MLK Blvd', 
			price: '$50',
			color: 'dark-purple',
			type: 'space property'
    },
    
   
   

		// space railroad comment
]

let rightRow =[
  {
    rowPosition:"row vertical-row left-row",
    name : 'Little Haiti', 
    price: '$120',
    color: 'light-blue', 
    type: 'space property'
  },
  {
    rowPosition:"row vertical-row left-row",
    name : 'Little Havanna', 
    price: '$100',
    color: 'light-blue',
    type: 'space property'
  },
  {
    rowPosition:"row vertical-row left-row",
    name : 'Chance', 
    color: 'light-blue', 
    type: 'space chance'
  },
  {
    rowPosition:"row vertical-row left-row",
    name : 'Triad Place', 
    price: '$100',
    color: 'light-blue',
    type: 'space property'
  },
  {
    rowPosition:"row vertical-row left-row",
    name : 'Tootsies StripClub', 
    price: '$200',
    type: ' space railroad'
  },
  {
    rowPosition:"row vertical-row left-row",
    name : 'Income Tax', 
    type: 'space fee income-tax',
    instructions:  'Pay 10% or $200'
  },
  {
    rowPosition:"row vertical-row left-row",
    name : 'Baltic Avenue', 
    price: '$50',
    color: 'dark-purple',
    type: 'space property'
  },
  {
    rowPosition:"row vertical-row left-row",
    name : 'Community Chest', 
    type: 'space community-chest',
    instructions: 'Follow instructions on top card'
  },
  {
    rowPosition:"row vertical-row left-row",
    name : 'MLK Blvd', 
    price: '$50',
    color: 'dark-purple',
    type: 'space property'
  },
]

let topRow =[
  {
    rowPosition:"row vertical-row right-row",
    name : 'Little Haiti', 
    price: '$120',
    color: 'light-blue', 
    type: 'space property'
  },
  {
    rowPosition:"row vertical-row right-row",
    name : 'Little Havanna', 
    price: '$100',
    color: 'light-blue',
    type: 'space property'
  },
  {
    rowPosition:"row vertical-row right-row",
    name : 'Chance', 
    color: 'light-blue', 
    type: 'space chance'
  },
  {
    rowPosition:"row vertical-row right-row",
    name : 'Triad Place', 
    price: '$100',
    color: 'light-blue',
    type: 'space property'
  },
  {
    rowPosition:"row vertical-row right-row",
    name : 'Tootsies StripClub', 
    price: '$200',
    type: ' space railroad'
  },
  {
    rowPosition:"row vertical-row right-row",
    name : 'Income Tax', 
    type: 'space fee income-tax',
    instructions:  'Pay 10% or $200'
  },
  {
    rowPosition:"row vertical-row right-row",
    name : 'Baltic Avenue', 
    price: '$50',
    color: 'dark-purple',
    type: 'space property'
  },
  {
    rowPosition:"row vertical-row right-row",
    name : 'Community Chest', 
    type: 'space community-chest',
    instructions: 'Follow instructions on top card'
  },
  {
    rowPosition:"row vertical-row right-row",
    name : 'MLK Blvd', 
    price: '$50',
    color: 'dark-purple',
    type: 'space property'
  },
]


let bottomSqu= [
  {
    rowPosition:"row horizontal-row top-row",
    name : 'Little Haiti', 
    price: '$120',
    color: 'light-blue', 
    type: 'space property'
  },
  {
    rowPosition:"row horizontal-row top-row",
    name : 'Little Havanna', 
    price: '$100',
    color: 'light-blue',
    type: 'space property'
  },
  {
    rowPosition:"row horizontal-row top-row",
    name : 'Chance', 
    color: 'light-blue', 
    type: 'space chance'
  },
  {
    rowPosition:"row horizontal-row top-row",
    name : 'Triad Place', 
    price: '$100',
    color: 'light-blue',
    type: 'space property'
  },
  {
    rowPosition:"row horizontal-row top-row",
    name : 'Tootsies StripClub', 
    price: '$200',
    type: ' space railroad'
  },
  {
    rowPosition:"row horizontal-row top-row",
    name : 'Income Tax', 
    type: 'space fee income-tax',
    instructions:  'Pay 10% or $200'
  },
  {
    rowPosition:"row horizontal-row top-row",
    name : 'Baltic Avenue', 
    price: '$50',
    color: 'dark-purple',
    type: 'space property'
  },
  {
    rowPosition:"row horizontal-row top-row",
    name : 'Community Chest', 
    type: 'space community-chest',
    instructions: 'Follow instructions on top card'
  },
  {
    rowPosition:"row horizontal-row top-row",
    name : 'MLK Blvd', 
    price: '$50',
    color: 'dark-purple',
    type: 'space property'
  },
]


const Board = () => {
  return (
    <div>
      <div class="table">
        <div class="board">
          <div class="center">
            <div class="community-chest-deck">
              <h2 class="label">Community Chest</h2>
              <div class="deck"></div>
            </div>
            <h1 class="title">HOODOPOLY</h1>
            <div class="chance-deck">
              <h2 class="label">Chance</h2>
              <div class="deck"></div>
            </div>
          </div>

          <div class="space corner go">
            <div class="container">
              <div class="instructions">Collect $200.00 welfare as you pass</div>
              <div class="go-word">go</div>
            </div>
            <div class="arrow fa fa-long-arrow-left"></div>
          </div>
            
            <div className="row vertical-row left-row">
            {bottomSquares.map((street, index) => (
              
              <Card
                rowPosition={street.rowPosition}
                key={street.name}
                type={street.type}
                color={street.color}
                streetName={street.name}
                streetPrice={street.price}
                instructions={street.instructions}
              />
          
            )) }
            </div>


            <div className="row vertical-row right-row">
            {rightRow.map((street, index) => (
              
              <Card
                rowPosition={street.rowPosition}
                key={street.name}
                type={street.type}
                color={street.color}
                streetName={street.name}
                streetPrice={street.price}
                instructions={street.instructions}
              />
          
            )) }
            </div>

            <div className="row horizontal-row top-row">
            {topRow.map((street, index) => (
              
              <Card
                rowPosition={street.rowPosition}
                key={street.name}
                type={street.type}
                color={street.color}
                streetName={street.name}
                streetPrice={street.price}
                instructions={street.instructions}
              />
          
            )) }
            </div>



            <div className="row horizontal-row bottom-row">
            {bottomSqu.map((street, index) => (
              
              <Card
                rowPosition={street.rowPosition}
                key={street.name}
                type={street.type}
                color={street.color}
                streetName={street.name}
                streetPrice={street.price}
                instructions={street.instructions}
              />
          
            )) }
            </div>
          

          <div class="space corner jail">
            <div class="just">Just</div>
            <div class="drawing">
              <div class="container">
                <div class="name">In</div>
                <div class="window">
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <i class="person fa fa-frown-o"></i>
                </div>
                <div class="name">Jail</div>
              </div>
            </div>
            <div class="visiting">Visiting</div>
          </div>


          <div class="space corner free-parking">
            <div class="container">
              <div class="name">Free</div>
              <i class="drawing fa fa-car"></i>
              <div class="name">Parking</div>
            </div>
          </div>


          <div class="space corner go-to-jail">
            <div class="container">
              <div class="name">Go To</div>
              <i class="drawing fa fa-gavel"></i>
              <div class="name">Jail</div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Board;
