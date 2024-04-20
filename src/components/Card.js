function Card({ item, handleSelectedCards, toggled, stopflip }) { 
	return ( 
		<div className="item" > 
			<div className={toggled ? "toggled" : ""}> 
				<img className="face" src={item.img} alt="face" /> 
				<div 
					className="back55"
					onClick={() => !stopflip && handleSelectedCards(item)} 
				> 
					{" "} 
				</div> 
			</div> 
		</div> 
	); 
} 

export default Card;