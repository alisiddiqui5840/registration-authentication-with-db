import React, { useState, useEffect } from 'react';
import './Cart.css'; // Import your CSS file
import { Link } from 'react-router-dom';
import axios from 'axios';

const products = [
  {
    id: 0,
    image: './src/assets/aa-4.jpg',
    title: 'Z Flip Foldable Mobile',
    price: 120,
  },
  {
    id: 1,
    image: './src/assets/aa-1.jpg',
    title: 'Head Phones',
    price: 70,
  },
  {
    id: 3,
    image: './src/assets/aa-3.jpg',
    title: 'Air Pods Pro',
    price: 60,
  },
  {
    id: 2,
    image: './src/assets/aa-2.jpg',
    title: '250D Dslr Camera',
    price: 30,
  },
  {
    id: 4,
    image: './src/assets/aa-5.jpg',
    title: 'IPhone 12 pro max',
    price: 800,
  },
  {
    id: 5,
    image: './src/assets/aa-6.jpg',
    title: 'Key Chain',
    price: 10,
  },
];

function Cart() {
  const [cart, setCart] = useState([]);

  const addtocart = (id) => {
    const newItem = products.find((item) => item.id === id);
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
      existingItem.count++;
    } else {
      newItem.count = 1;
      setCart([...cart, newItem]);
    }
    displaycart();
  };

  const removeItem = (id) => {
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
      if (existingItem.count > 1) {
        existingItem.count--;
      } else {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
      }
    }
    displaycart();
  };

  const displaycart = () => {
    let total = 0;
    
    document.getElementById("count").innerHTML = cart.length;

    const cartItemsContainer = document.getElementById("cartItem");
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = "Your cart is empty";
      document.getElementById("total").innerHTML = "$" + 0 + ".00";

    

      
    } else {
      cart.forEach((item) => {
        const { title, image, price, count } = item;

        total += price * count;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        const rowImg = document.createElement("div");
        rowImg.classList.add("row-img");
        const img = document.createElement("img");
        img.classList.add("rowimg");
        img.src = image;
        rowImg.appendChild(img);

        const titleParagraph = document.createElement("p");
        titleParagraph.style.fontSize = "12px";
        titleParagraph.textContent = `${title} (x${count})`;

        const priceHeader = document.createElement("h2");
        priceHeader.style.fontSize = "15px";
        priceHeader.textContent = `$ ${price.toFixed(2)}`;

        // Create plus and minus buttons
        const plusButton = document.createElement("button");
        plusButton.textContent = "+";
        plusButton.onclick = () => addtocart(item.id);

        const minusButton = document.createElement("button");
        minusButton.textContent = "-";
        minusButton.onclick = () => removeItem(item.id);

        // Set the CSS properties for the plus and minus buttons
        plusButton.style.backgroundColor = "green"; // Change the background color to green
        plusButton.style.color = "white"; // Change the text color to white
        plusButton.style.padding = "1px 1px"; // Adjust the padding as needed
        plusButton.style.border = "none"; // Remove the button border
        plusButton.style.width = "10%";

        minusButton.style.backgroundColor = "red"; // Change the background color to red
        minusButton.style.color = "white"; // Change the text color to white
        minusButton.style.padding = "1px 1px"; // Adjust the padding as needed
        minusButton.style.border = "none"; // Remove the button border
        minusButton.style.width = "10%";
        cartItem.appendChild(rowImg);
        cartItem.appendChild(titleParagraph);
        cartItem.appendChild(priceHeader);
        cartItem.appendChild(minusButton);
        cartItem.appendChild(plusButton);

        cartItemsContainer.appendChild(cartItem);
      });
      

      document.getElementById("total").innerHTML = "$" + total.toFixed(2) + "";
      
    }
  };

  useEffect(() => {
    displaycart();
  }, [cart]);
 
  //
  const checkout = () => {
    // Calculate the total amount
    let totalAmount = 0;
    cart.forEach((item) => {
      totalAmount += item.price * item.count;
    });
  
    // Save the total amount in local storage
    localStorage.setItem('totalAmount', totalAmount);
  }
  //
  
  
  
  
  return (
    <div className="shopping-cart">
      <div className="header">
        <h1 className="logo">Almari.com</h1>
        <div className="cart">
          <i className="fas fa-shopping-cart"></i>
          <p id="count">{cart.length}</p>
        </div>
      </div>

      <div className="cart-container">
        
        {products.map((item, index) => (
           
          <div className="box" key={item.id}>
            <div className="img-box">
              <img className="images" src={item.image} alt={item.title} />
            </div>
            <div className="bottom">
              <p>{item.title}</p>
              <h2>$ {item.price.toFixed(2)}</h2>
              <button className='cart-btn' onClick={() => addtocart(item.id)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="sidebar">
        <div className="head">Shopping Cart</div>
        <div id="cartItem" className="cartItem">
          {/* Display cart items */}
        </div>
        <div className="foot">
          <p>Total:</p>
          <p id="total">$ TotalAmount</p>
          
        </div>
        <Link to ="/register">
        <button id='Checkout' onClick={checkout}   >Proceed To Checkout</button>
        </Link>
      </div>
    </div>
     
  );
}

export default Cart;
