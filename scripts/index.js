const seats = document.querySelectorAll('.seat');
let availableSeats = 40;
let selectedSeat = 0;
let seatCount = 1;
let totalSeatPrice = 0;



for(const seat of seats){
    seat.addEventListener('click' , function(elementId){

        seat.classList.add('bg-thirdColor');
        seat.setAttribute('disabled' , true)

        selectedSeat = selectedSeat + 1;
        availableSeats -= 1;

        //  4 seat select then button disabled
        if(selectedSeat === 4){
            for (const selectButton of seats){
                selectButton.setAttribute('disabled' , true);
            }
        }
        // per ticket Price
        const nameOfSeats = elementId.target.innerText;
        const economyClass = 'Economy';

        const seatPrice = parseFloat(document.getElementById('per-seat-price').innerText);
       
        // price calculator
        const priceCalculator = document.getElementById('price-calculator');

        const li = document.createElement('li');

        const p = document.createElement('p')
        p.innerText = nameOfSeats;

        const p2 = document.createElement('p');
        p2.innerText = economyClass;

        const p3 = document.createElement('p');
        p3.innerText = parseFloat(seatPrice);

        
        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3)

        priceCalculator.appendChild(li);

        setInnerText('available-seats' , availableSeats)
        setInnerText('select-seats', selectedSeat);      
     
        // calculate the total seat price 
        totalSeatPrice += seatPrice;
        console.log(totalSeatPrice)
        setInnerText('total-price' , totalSeatPrice)
       

        const grandTotal = document.getElementById('grand-total-price');
        setInnerText('grand-total-price' , totalSeatPrice)

    })
   
}


const discount = document.getElementById('discount');
discount.addEventListener('click' , function() {

    const couponCode = document.getElementById('coupon-code').value ;

    if(selectedSeat === 4){
        if(couponCode === 'NEW15'){
            const getDiscount = document.getElementById('grand-total-price');
            const discountPrice = totalSeatPrice * 0.15;
            getDiscount.innerText = totalSeatPrice - discountPrice;
            document.getElementById('discount').disabled = true;
            document.getElementById('coupon-code').value = ' ' ;
        }

        else if(couponCode === 'Couple 20'){
            const getDiscount = document.getElementById('grand-total-price');
            const discountPrice = totalSeatPrice * 0.2;
            getDiscount.innerText = totalSeatPrice - discountPrice;
            document.getElementById('discount').disabled = true;
            document.getElementById('coupon-code').value = ' ' ;
        }

       else{
        alert('invalid coupon code . Please try again');
            document.getElementById('coupon-code').value = ' ' ;
            
        }
    }
         else{
            alert('You have to book 4 seats , Unless you will not get discount')
        }
        

})


const nextButton = document.getElementById('next-button');
nextButton.addEventListener('click' , function(elementId){


    const passengerName = document.getElementById('passenger-name').value;
    const phoneNumber = parseInt(document.getElementById('phone-number').value);

    const emailId = document.getElementById('email-id').value;
    if(typeof passengerName === "string" && isNaN(passengerName) && typeof phoneNumber === "number" && !isNaN(phoneNumber)){
        hideElementById('body');
        showElementById ('booking-success')
    }
    else{
        alert('you have to full filed you name and phone number')
    }
})
