/** @format */

import { CardCart } from "../../components/CardCart";
import {
  AddressSection,
  CardItem,
  CheckoutContainer,
  DataSection,
  FinishOrderButton,
  FormCompleteOrder,
  PaymentSection,
  ReviewItems,
  ReviewOrderSection,
  ReviewOrderSectionContent,
  ReviewTotalPrice,
} from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <FormCompleteOrder>
        <DataSection>
          <h1>Complete seu pedido</h1>
          <AddressSection>Endereço</AddressSection>
          <PaymentSection>Pagamento</PaymentSection>
        </DataSection>
        <ReviewOrderSection>
          <h1>Cafés selecionados</h1>
          <ReviewOrderSectionContent>
            <ReviewItems>
              <CardItem>
                <CardCart />
              </CardItem>
              <CardItem>
                <CardCart />
              </CardItem>
            </ReviewItems>
            <ReviewTotalPrice>
              <tbody>
                <tr>
                  <td>Total de itens</td>
                  <td>R$ 29,70</td>
                </tr>
                <tr>
                  <td>Entrega</td>
                  <td>R$ 3,50</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>R$ 33,20</td>
                </tr>
              </tbody>
            </ReviewTotalPrice>
            <FinishOrderButton>CONFIRMAR PEDIDO</FinishOrderButton>
          </ReviewOrderSectionContent>
        </ReviewOrderSection>
      </FormCompleteOrder>
    </CheckoutContainer>
  );
}
