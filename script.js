const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices=document.querySelectorAll('.price')
	let totalPrice=0
	prices.forEach((item)=>totalPrice+=Number(item.textContent))
	  const table=document.querySelector('table')
	
	
	table.innerHTML+=`
		 <tr>
	      <td class="total">Total</td>
	      <td class="prices">${totalPrice}</td>
	    </tr>
	`
};

getSumBtn.addEventListener("click", getSum);

