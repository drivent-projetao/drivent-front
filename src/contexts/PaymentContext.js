import { createContext, useState } from 'react';

const PaymentContext = createContext();
export default PaymentContext;

export function PaymentProvider({ children }) {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardDate, setCardDate] = useState('');
  const [cardCVC, setCardCVC] = useState('');
  const [focus, setFocus] = useState('');
  const [ticketId, setTicketId] = useState('');

  return (
    <PaymentContext.Provider value={{ 
      cardNumber, setCardNumber, 
      cardName, setCardName, 
      cardDate, setCardDate, 
      cardCVC, setCardCVC, 
      focus, setFocus, 
      ticketId, setTicketId 
    }}>
      {children}
    </PaymentContext.Provider>
  );
}
