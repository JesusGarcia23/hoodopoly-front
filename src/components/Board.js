import React from "react";
import Card from './StreetSquare'


let bottomStreets = [
		{
			name : 'Little Haiti', 
			price: '$120',
			color: 'light-blue', 
			type: 'space property'
		},
		{
			name : 'Little Havanna', 
			price: '$100',
			color: 'light-blue',
			type: 'space property'
		},
		{
			name : 'Chance', 
			color: 'light-blue', 
			type: 'space chance'
		},
		{
			name : 'Triad Place', 
			price: '$100',
			color: 'light-blue',
			type: 'space property'
		},
		{
			name : 'Tootsies StripClub', 
			price: '$200',
			type: ' space railroad'
    },
    {
			name : 'Income Tax', 
      type: 'space fee income-tax',
      instructions:  'Pay 10% or $200'
    },
    {
			name : 'Baltic Avenue', 
			price: '$50',
			color: 'dark-purple',
			type: 'space property'
    },
    {
			name : 'Community Chest', 
      type: 'space community-chest',
      instructions: 'Follow instructions on top card'
    },
    {
			name : 'MLK Blvd', 
			price: '$50',
			color: 'dark-purple',
			type: 'space property'
    },
    

		// space railroad comment
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

          <div class="row horizontal-row bottom-row">
            {bottomStreets.map((street) => (
              <Card
                type={street.type}
                color={street.color}
                streetName={street.name}
                streetPrice={street.price}
                instructions={street.instructions}
              />
            )) }
						{/* <Card
							type="space property"
							color="light-blue"
							streetName="Little Haiti"
							streetPrice="120"
						/>
            <div class="space property">
              <div class="container">
                <div class="color-bar light-blue"></div>
                <div class="name">Little Havanna</div>
                <div class="price">Price $100</div>
              </div>
            </div>
            <div class="space chance">
              <div class="container">
                <div class="name">Chance</div>
                <i class="drawing fa fa-question"></i>
              </div>
            </div>
            <div class="space property">
              <div class="container">
                <div class="color-bar light-blue"></div>
                <div class="name">Triad Place</div>
                <div class="price">Price $100</div>
              </div>
            </div>
            <div class="space railroad">
              <div class="container">
                <div class="name">Tootsie's Strip Club</div>
                <i class="drawing fa fa-subway"></i>
                <div class="price">Price $200</div>
              </div>
            </div>
            <div class="space fee income-tax">
              <div class="container">
                <div class="name">Income Tax</div>
                <div class="diamond"></div>
                <div class="instructions">
                  Pay 10%
                  <br />
                  or
                  <br />
                  $200
                </div>
              </div>
              M
            </div>
            <div class="space property">
              <div class="container">
                <div class="color-bar dark-purple"></div>
                <div class="name">Baltic Avenue</div>
                <div class="price">Price $50</div>
              </div>
            </div>
            <div class="space community-chest">
              <div class="container">
                <div class="name">Community Chest</div>
                <i class="drawing fa fa-cube"></i>
                <div class="instructions">Follow instructions on top card</div>
              </div>
            </div>
            <div class="space property">
              <div class="container">
                <div class="color-bar dark-purple"></div>
                <div class="name three-line-name">
                  Mediter-
                  <br />
                  ranean
                  <br />
                  Avenue
                </div>
                <div class="price">Price $50</div>
              </div>
            </div> */}
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

          <div class="row vertical-row left-row">
            <div class="space property">
              <div class="container">
                <div class="color-bar orange"></div>
                <div class="name">New York Avenue</div>
                <div class="price">Price $200</div>
              </div>
            </div>
            <div class="space property">
              <div class="container">
                <div class="color-bar orange"></div>
                <div class="name">Tennessee Avenue</div>
                <div class="price">Price $180</div>
              </div>
            </div>
            <div class="space community-chest">
              <div class="container">
                <div class="name">Community Chest</div>
                <i class="drawing fa fa-cube"></i>
                <div class="instructions">Follow instructions on top card</div>
              </div>
            </div>
            <div class="space property">
              <div class="container">
                <div class="color-bar orange"></div>
                <div class="name">St. James Avenue</div>
                <div class="price">Price $180</div>
              </div>
            </div>
            <div class="space railroad">
              <div class="container">
                <div class="name long-name">Pennsylvania Railroad</div>
                <i class="drawing fa fa-subway"></i>
                <div class="price">Price $200</div>
              </div>
            </div>
            <div class="space property">
              <div class="container">
                <div class="color-bar purple"></div>
                <div class="name">Virginia Avenue</div>
                <div class="price">Price $160</div>
              </div>
            </div>
            <div class="space property">
              <div class="container">
                <div class="color-bar purple"></div>
                <div class="name">States Avenue</div>
                <div class="price">Price $140</div>
              </div>
            </div>
            <div class="space utility electric-company">
              <div class="container">
                <div class="name">Electric Company</div>
                <i class="drawing fa fa-lightbulb-o"></i>
                <div class="price">Price $150</div>
              </div>
            </div>
            <div class="space property">
              <div class="container">
                <div class="color-bar purple"></div>
                <div class="name">St. Charles Place</div>
                <div class="price">Price $140</div>
              </div>
            </div>
          </div>

          <div class="space corner free-parking">
            <div class="container">
              <div class="name">Free</div>
              <i class="drawing fa fa-car"></i>
              <div class="name">Parking</div>
            </div>
          </div>

          <div class="row horizontal-row top-row">
            <div class="space property">
              <div class="container">
                <div class="color-bar red"></div>
                <div class="name">Kentucky Avenue</div>
                <div class="price">Price $220</div>
              </div>
            </div>
            <div class="space chance">
              <div class="container">
                <div class="name">Chance</div>
                <i class="drawing fa fa-question blue"></i>
              </div>
            </div>
            <div class="space property">
              <div class="container">
                <div class="color-bar red"></div>
                <div class="name">Indiana Avenue</div>
                <div class="price">Price $220</div>
              </div>
            </div>
            <div class="space property">
              <div class="container">
                <div class="color-bar red"></div>
                <div class="name">Illinois Avenue</div>
                <div class="price">Price $200</div>
              </div>
            </div>
            <div class="space railroad">
              <div class="container">
                <div class="name">B & O Railroad</div>
                <i class="drawing fa fa-subway"></i>
                <div class="price">Price $200</div>
              </div>
            </div>
            <div class="space property">
              <div class="container">
                <div class="color-bar yellow"></div>
                <div class="name">Atlantic Avenue</div>
                <div class="price">Price $260</div>
              </div>
            </div>
            <div class="space property">
              <div class="container">
                <div class="color-bar yellow"></div>
                <div class="name">Ventnor Avenue</div>
                <div class="price">Price $260</div>
              </div>
            </div>
            <div class="space utility waterworks">
              <div class="container">
                <div class="name">Waterworks</div>
                <i class="drawing fa fa-tint"></i>
                <div class="price">Price $120</div>
              </div>
            </div>
            <div class="space property">
              <div class="container">
                <div class="color-bar yellow"></div>
                <div class="name">Marvin Gardens</div>
                <div class="price">Price $280</div>
              </div>
            </div>
          </div>

          <div class="space corner go-to-jail">
            <div class="container">
              <div class="name">Go To</div>
              <i class="drawing fa fa-gavel"></i>
              <div class="name">Jail</div>
            </div>
          </div>

          <div class="row vertical-row right-row">
            <div class="space property">
              <div class="container">
                <div class="color-bar green"></div>
                <div class="name">Pacific Avenue</div>
                <div class="price">Price $300</div>
              </div>
            </div>
            <div class="space property">
              <div class="container">
                <div class="color-bar green"></div>
                <div class="name three-line-name">North Carolina Avenue</div>
                <div class="price">Price $300</div>
              </div>
            </div>
            <div class="space community-chest">
              <div class="container">
                <div class="name">Community Chest</div>
                <i class="drawing fa fa-cube"></i>
                <div class="instructions">Follow instructions on top card</div>
              </div>
            </div>
            <div class="space property">
              <div class="container">
                <div class="color-bar green"></div>
                <div class="name long-name">Pennsylvania Avenue</div>
                <div class="price">Price $320</div>
              </div>
            </div>
            <div class="space railroad">
              <div class="container">
                <div class="name">Short Line</div>
                <i class="drawing fa fa-subway"></i>
                <div class="price">Price $200</div>
              </div>
            </div>
            <div class="space chance">
              <div class="container">
                <div class="name">Chance</div>
                <i class="drawing fa fa-question"></i>
              </div>
            </div>
            <div class="space property">
              <div class="container">
                <div class="color-bar dark-blue"></div>
                <div class="name">Park Place</div>
                <div class="price">Price $350</div>
              </div>
            </div>
            <div class="space fee luxury-tax">
              <div class="container">
                <div class="name">Luxury Tax</div>
                <div class="drawing fa fa-diamond"></div>
                <div class="instructions">Pay $75.00</div>
              </div>
            </div>
            <div class="space property">
              <div class="container">
                <div class="color-bar dark-blue"></div>
                <div class="name">Boardwalk</div>
                <div class="price">Price $400</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
