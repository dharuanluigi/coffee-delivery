/** @format */

import { CurrencyDollar, MapPin } from "phosphor-react";
import { CardCart } from "../../components/CardCart";
import { AddressForm } from "./components/AddressForm";
import { MethodsPayment } from "./components/MethodsPayment";
import {
  AddressSection,
  AddressSectionHeader,
  CardItem,
  CheckoutContainer,
  DataSection,
  FinishOrderButton,
  FormCompleteOrder,
  PaymentSection,
  PaymentSectionHeader,
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
          <AddressSection>
            <AddressSectionHeader>
              <MapPin size={22} />
              <div>
                <h1>Endereço de Entrega</h1>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </AddressSectionHeader>
            <AddressForm />
          </AddressSection>
          <PaymentSection>
            <PaymentSectionHeader>
              <CurrencyDollar size={22} />
              <div>
                <h1>Pagamento</h1>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </PaymentSectionHeader>
            <MethodsPayment />
          </PaymentSection>
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
                  <td>
                    <span>Total</span>
                  </td>
                  <td>
                    <span>R$ 33,20</span>
                  </td>
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
