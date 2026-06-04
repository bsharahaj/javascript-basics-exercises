const menu = [
  { id: 1, name: "Burger",       category: "Food",    price: 35,  available: true  },
  { id: 2, name: "Pizza",        category: "Food",    price: 50,  available: true  },
  { id: 3, name: "Orange Juice", category: "Drink",   price: 12,  available: false },
  { id: 4, name: "Cola",         category: "Drink",   price: 8,   available: true  },
  { id: 5, name: "Ice Cream",    category: "Dessert", price: 15,  available: true  },
  { id: 6, name: "Caesar Salad", category: "Food",    price: 28,  available: true  },
  { id: 7, name: "Cheesecake",   category: "Dessert", price: 22,  available: false },
  { id: 8, name: "Water",        category: "Drink",   price: 5,   available: true  }
];

const customer = {
  name: "jhonny",
  budget: 120,
  isStudent: true
};

const order = [1, 3, 5];

/* Create a function that prints all menu items in a clear format. */
function displayMenu() {
  console.log("========== MENU ==========");
  menu.forEach((item) => {
    console.log(`${item.id} - ${item.name} - ${item.category} - ${item.price} NIS - ${item.available ? "Available" : "Not Available"}`);
  });
}

function getAvailableItems() {
  const availableItems = menu.filter((m) => m.available);
  console.log("========== AVAILABLE ITEMS ==========");
  console.log(availableItems);
  return availableItems;
}

function findItemById(id) {
  const found = menu.find((m) => m.id === id);
  if (found) {
    console.log(found);
  } else {
    console.log("Item Not Found");
  }
  return found;
}

function getOrderItems() {
  const items = order.map((id) => {
    const found = menu.find((item) => item.id === id);
    return found;
  });
  return items;
}

function validateOrder() {
  let isValid = true;

  order.forEach((id) => {
    const item = menu.find((m) => m.id === id);

    if (item === undefined) {
      console.log(`Item with id ${id} does not exist.`);
      isValid = false;
    } else if (item.available === false) {
      console.log(`Sorry, "${item.name}" is currently not available.`);
      isValid = false;
    }
  });

  return isValid;
}

function calculateTotal() {
  const items = getOrderItems(); // array of full item objects

  const total = items.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  return total;
}

function applyDiscount() {
  const originalTotal = calculateTotal();
  let discountPercentage = 0;

  if (originalTotal > 150) {
    discountPercentage = 20;
  } else if (originalTotal > 100) {
    discountPercentage = 15;
  } else if (customer.isStudent) {
    discountPercentage = 10;
  }

  const discountAmount = originalTotal * (discountPercentage / 100);
  const finalTotal = originalTotal - discountAmount;

  return {
    originalTotal: originalTotal,
    discountPercentage: discountPercentage,
    discountAmount: discountAmount,
    finalTotal: finalTotal
  };
}

/* Check if the customer's budget covers the final total. */
function canCustomerPay() {
  const { finalTotal } = applyDiscount();
  if (customer.budget >= finalTotal) {
    return true;
  } else {
    return false;
  }
}

/* Print a complete receipt to the console. */
function printReceipt() {
  const items = getOrderItems();
  const { originalTotal, discountPercentage, discountAmount, finalTotal } = applyDiscount();
  const paid = canCustomerPay();

  console.log("========== RECEIPT ==========");
  console.log("Restaurant: JavaScript Burger House");
  console.log(`Customer: ${customer.name}`);
  console.log("");
  console.log("Items:");
  items.forEach((item) => {
    console.log(`- ${item.name}: ${item.price} NIS`);
  });
  console.log("");
  console.log(`Original Total: ${originalTotal} NIS`);
  console.log(`Discount: ${discountPercentage}%`);
  console.log(`Discount Amount: ${discountAmount} NIS`);
  console.log(`Final Total: ${finalTotal} NIS`);
  console.log("");
  console.log(`Customer Budget: ${customer.budget} NIS`);
  console.log(`Payment Status: ${paid ? "Paid Successfully" : "Not Enough Money"}`);
  console.log("");
  console.log("==============================");
}

/* ===================== MAIN PROGRAM FLOW ===================== */
function main() {
  // 1. Display the full menu
  displayMenu();

  // 2. Display only available items
  getAvailableItems();

  // 3. Convert order IDs into full item objects
  const orderItems = getOrderItems();
  console.log("========== ORDER ITEMS ==========");
  console.log(orderItems);

  // 4. Validate the order
  console.log("========== VALIDATION ==========");
  const isValid = validateOrder();

  // 5. Decide what to do
  if (isValid) {
    // 5a. valid: calculate total -> apply discount -> check budget -> print receipt
    printReceipt();
  } else {
    // 5b. invalid: stop the order and print a clear error message
    console.log("========================================");
    console.log("Order cancelled: one or more items are not available or do not exist.");
  }
}

main();